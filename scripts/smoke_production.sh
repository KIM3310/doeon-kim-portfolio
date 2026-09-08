#!/usr/bin/env bash
set -euo pipefail

base="${1:-https://kim3310-doeon-kim-portfolio.pages.dev}"
base="${base%/}"
canonical_origin="${SMOKE_CANONICAL_ORIGIN:-$base}"
canonical_origin="${canonical_origin%/}"
attempts="${SMOKE_ATTEMPTS:-3}"
retry_delay="${SMOKE_RETRY_DELAY_SECONDS:-5}"
body_file="$(mktemp)"
trap 'rm -f "$body_file"' EXIT

check_endpoint() {
  local endpoint="$1"
  local expected_type="$2"
  local marker="$3"
  local origin="${4:-$canonical_origin}"
  local expected_url="${origin}${endpoint}"
  local attempt
  local result
  local code
  local content_type
  local effective_url
  for ((attempt = 1; attempt <= attempts; attempt += 1)); do
    result="$(
      curl --silent --show-error --location \
        --connect-timeout 8 \
        --max-time 25 \
        --output "$body_file" \
        --write-out $'%{http_code}\t%{content_type}\t%{url_effective}' \
        --header "Origin: $origin" \
        "$expected_url" || true
    )"
    IFS=$'\t' read -r code content_type effective_url <<<"$result"

    printf '[%d/%d] %s -> status=%s type=%s url=%s\n' \
      "$attempt" "$attempts" "$endpoint" "${code:-000}" "${content_type:-missing}" "${effective_url:-missing}"

    if [[ "$code" =~ ^2[0-9]{2}$ ]] \
      && [[ "$content_type" == "$expected_type"* ]] \
      && [[ "$effective_url" == "$expected_url" ]] \
      && grep --fixed-strings --quiet "$marker" "$body_file"; then
      return 0
    fi

    sleep "$((attempt * retry_delay))"
  done

  printf 'Production identity check failed for %s\n' "$endpoint" >&2
  return 1
}

check_dynamic_request() {
  local method="$1"
  local endpoint="$2"
  local expected_status="$3"
  local expected_type="$4"
  local marker="$5"
  local payload="${6:-}"
  local expected_url="${canonical_origin}${endpoint}"
  local attempt
  local result
  local code
  local content_type
  local effective_url
  local -a curl_args

  for ((attempt = 1; attempt <= attempts; attempt += 1)); do
    curl_args=(
      --silent --show-error --location
      --connect-timeout 8
      --max-time 25
      --request "$method"
      --output "$body_file"
      --write-out $'%{http_code}	%{content_type}	%{url_effective}'
      --header "Origin: $canonical_origin"
    )
    if [[ -n "$payload" ]]; then
      curl_args+=(--header "Content-Type: application/json" --data "$payload")
    fi
    result="$(curl "${curl_args[@]}" "$expected_url" || true)"
    IFS=$'	' read -r code content_type effective_url <<<"$result"

    printf '[%d/%d] %s %s -> status=%s type=%s url=%s
'       "$attempt" "$attempts" "$method" "$endpoint" "${code:-000}" "${content_type:-missing}" "${effective_url:-missing}"

    if [[ "$code" == "$expected_status" ]]       && [[ "$effective_url" == "$expected_url" ]]       && { [[ "$expected_type" == "-" ]] || [[ "$content_type" == "$expected_type"* ]]; }       && { [[ -z "$marker" ]] || grep --fixed-strings --quiet "$marker" "$body_file"; }; then
      return 0
    fi

    sleep "$((attempt * retry_delay))"
  done

  printf 'Production dynamic endpoint check failed for %s %s
' "$method" "$endpoint" >&2
  return 1
}

check_endpoint "/" "text/html" "<title>Doeon Kim — Selected Work</title>"
node scripts/smoke_static.mjs "$base" "Doeon Kim — Selected Work"
check_endpoint "/privacy" "text/html" "<h1>Privacy</h1>"
check_endpoint "/terms" "text/html" "<h1>Terms</h1>"
check_endpoint "/service-offer.json" "application/json" '"name": "KIM3310 Systems"'
check_endpoint "/llms.txt" "text/plain" "Canonical URL: ${canonical_origin}/"
check_endpoint "/robots.txt" "text/plain" "Sitemap: ${canonical_origin}/sitemap.xml"
check_endpoint "/sitemap.xml" "application/xml" "<loc>${canonical_origin}/terms</loc>"
check_endpoint "/service-offer.json" "application/json" '"slug": "stage-pilot"' "https://stage-pilot.pages.dev"

if [[ "${SMOKE_REQUIRE_DYNAMIC:-0}" == "1" ]]; then
  check_dynamic_request "OPTIONS" "/api/inquiries" "204" "-" ""
  check_dynamic_request "POST" "/api/inquiries" "400" "application/json" '"error"' '{}'
  check_dynamic_request "POST" "/api/events" "400" "application/json" '"error"' '{}'
  check_dynamic_request "GET" "/api/benchmarks?repo=stage-pilot" "200" "application/json" '"repo":"stage-pilot"'
fi

echo "Production policy, discovery, commercial surface, and linked project smoke passed."
