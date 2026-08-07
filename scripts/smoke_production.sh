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

check_endpoint "/" "text/html" "<title>KIM3310 Systems | Agent Reliability &amp; Operational AI Services</title>"
check_endpoint "/privacy" "text/html" "<h1>Privacy</h1>"
check_endpoint "/terms" "text/html" "<h1>Terms</h1>"
check_endpoint "/service-offer.json" "application/json" '"name": "KIM3310 Systems"'
check_endpoint "/llms.txt" "text/plain" "Canonical URL: ${canonical_origin}/"
check_endpoint "/robots.txt" "text/plain" "Sitemap: ${canonical_origin}/sitemap.xml"
check_endpoint "/sitemap.xml" "application/xml" "<loc>${canonical_origin}/terms</loc>"
check_endpoint "/service-offer.json" "application/json" '"slug": "stage-pilot"' "https://stage-pilot.pages.dev"

echo "Production policy, discovery, commercial surface, and linked project smoke passed."
