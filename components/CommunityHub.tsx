import React, { useEffect, useRef, useState } from 'react';
import { AlertCircle, ArrowUpRight, CheckCircle2, Github, Linkedin, LucideIcon, Mail, MessageCircle, Send } from 'lucide-react';
import Section from './Section';
import {
  PORTFOLIO_DISCUSSIONS_URL,
  PORTFOLIO_FEEDBACK_ISSUE_URL,
  PORTFOLIO_GISCUS_CATEGORY,
  PORTFOLIO_GISCUS_CATEGORY_ID,
  PORTFOLIO_GISCUS_REPO,
  PORTFOLIO_GISCUS_REPO_ID,
  PORTFOLIO_IDEAS_URL,
  PORTFOLIO_QA_URL,
  PROFILE,
} from '../constants';

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

const FORMSPREE_ENDPOINT = String(import.meta.env.VITE_FORMSPREE_ENDPOINT || '').trim();
const DISQUS_SHORTNAME = String(import.meta.env.VITE_DISQUS_SHORTNAME || '').trim();
const DISQUS_IDENTIFIER = String(import.meta.env.VITE_DISQUS_IDENTIFIER || 'doeon-kim-portfolio').trim();
const GISCUS_REPO = String(import.meta.env.VITE_GISCUS_REPO || PORTFOLIO_GISCUS_REPO).trim();
const GISCUS_REPO_ID = String(import.meta.env.VITE_GISCUS_REPO_ID || PORTFOLIO_GISCUS_REPO_ID).trim();
const GISCUS_CATEGORY = String(import.meta.env.VITE_GISCUS_CATEGORY || PORTFOLIO_GISCUS_CATEGORY).trim();
const GISCUS_CATEGORY_ID = String(import.meta.env.VITE_GISCUS_CATEGORY_ID || PORTFOLIO_GISCUS_CATEGORY_ID).trim();
// The repo/category wiring is ready, but the giscus GitHub App is not installed on this repo yet.
const GISCUS_EMBED_ACTIVE = false;

const DIRECT_FEEDBACK_LINKS = [
  {
    label: 'Email Brief',
    href: `mailto:${PROFILE.email}?subject=Portfolio%20Feedback`,
    helper: 'Fastest direct path for hiring inquiries and scoped project discussions.',
    Icon: Mail,
  },
  {
    label: 'GitHub Issue',
    href: PORTFOLIO_FEEDBACK_ISSUE_URL,
    helper: 'Structured bug report or improvement request tied to the portfolio repo.',
    Icon: Github,
  },
  {
    label: 'LinkedIn Message',
    href: PROFILE.linkedin,
    helper: 'Professional async follow-up if you prefer direct messaging.',
    Icon: Linkedin,
  },
];

const DISCUSSION_LINKS = [
  {
    label: 'Discussion Board',
    href: PORTFOLIO_DISCUSSIONS_URL,
    helper: 'Open-ended thread list for feedback, hiring discussions, and collaboration topics.',
    Icon: MessageCircle,
  },
  {
    label: 'Q&A Thread',
    href: PORTFOLIO_QA_URL,
    helper: 'Technical questions, architecture follow-ups, and implementation details.',
    Icon: Github,
  },
  {
    label: 'Ideas Thread',
    href: PORTFOLIO_IDEAS_URL,
    helper: 'Feature requests and next-step proposals for the portfolio itself.',
    Icon: Github,
  },
];

const LinkPanel: React.FC<{
  href: string;
  label: string;
  helper: string;
  Icon: LucideIcon;
}> = ({ href, label, helper, Icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-start justify-between gap-4 border border-white/10 bg-black/20 p-4 transition-all hover:border-accent-gold/40 hover:bg-black/30"
  >
    <div>
      <p className="text-sm font-medium text-white">{label}</p>
      <p className="mt-2 text-sm font-light leading-relaxed text-primary-muted">{helper}</p>
    </div>
    <div className="flex items-center gap-2 text-accent-gold">
      <Icon className="h-4 w-4" />
      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </div>
  </a>
);

declare global {
  interface Window {
    disqus_config?: () => void;
  }
}

const CommunityHub: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const giscusRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!DISQUS_SHORTNAME || typeof document === 'undefined') {
      return;
    }
    if (document.getElementById('disqus-embed-script')) {
      return;
    }

    window.disqus_config = function disqusConfig() {
      this.page.url = window.location.href;
      this.page.identifier = DISQUS_IDENTIFIER;
    };

    const script = document.createElement('script');
    script.id = 'disqus-embed-script';
    script.src = `https://${DISQUS_SHORTNAME}.disqus.com/embed.js`;
    script.async = true;
    script.setAttribute('data-timestamp', String(Date.now()));
    document.body.appendChild(script);

    return () => {
      delete window.disqus_config;
    };
  }, []);

  useEffect(() => {
    if (
      !GISCUS_EMBED_ACTIVE ||
      !giscusRef.current ||
      !GISCUS_REPO ||
      !GISCUS_REPO_ID ||
      !GISCUS_CATEGORY ||
      !GISCUS_CATEGORY_ID
    ) {
      return;
    }
    if (giscusRef.current.querySelector('script[data-giscus]')) {
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.async = true;
    script.setAttribute('data-giscus', '1');
    script.setAttribute('data-repo', GISCUS_REPO);
    script.setAttribute('data-repo-id', GISCUS_REPO_ID);
    script.setAttribute('data-category', GISCUS_CATEGORY);
    script.setAttribute('data-category-id', GISCUS_CATEGORY_ID);
    script.setAttribute('data-mapping', 'pathname');
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'top');
    script.setAttribute('data-theme', 'dark_tritanopia');
    script.setAttribute('data-lang', 'ko');
    script.crossOrigin = 'anonymous';
    giscusRef.current.appendChild(script);
  }, []);

  const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!FORMSPREE_ENDPOINT) {
      setStatus('error');
      setStatusMessage('Formspree endpoint is not configured. Please set VITE_FORMSPREE_ENDPOINT.');
      return;
    }

    setStatus('submitting');
    setStatusMessage('');
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
          source: 'doeon-kim-portfolio',
          page_url: window.location.href,
        }),
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => ({}));
        const detail = String(payload?.errors?.[0]?.message || payload?.error || 'Failed to send feedback.');
        throw new Error(detail);
      }

      setStatus('success');
      setStatusMessage('메시지를 전송했습니다. 빠르게 확인 후 답변드릴게요.');
      setMessage('');
    } catch (error) {
      setStatus('error');
      setStatusMessage(error instanceof Error ? error.message : 'Request failed.');
    }
  };

  return (
    <Section id="community">
      <div className="mb-10 border-b border-white/10 pb-8">
        <h2 className="text-3xl md:text-4xl font-serif-heading font-medium text-white mb-2">Community & Feedback</h2>
        <p className="text-primary-muted font-light">GitHub-native discussion flow with optional embedded community widgets.</p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <div className="bg-[#0a0a0c] border border-white/10 p-6 md:p-8">
          <h3 className="text-xl text-white font-serif-heading mb-4 flex items-center gap-2">
            <Send className="w-5 h-5 text-accent-gold" />
            Feedback Inbox
          </h3>
          {FORMSPREE_ENDPOINT ? (
            <>
              <form onSubmit={submitForm} className="space-y-3">
                <input
                  required
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Name"
                  className="w-full h-10 bg-black/40 border border-white/15 px-3 text-sm text-white placeholder:text-white/35 focus:outline-none focus:border-accent-gold/60"
                />
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Email"
                  className="w-full h-10 bg-black/40 border border-white/15 px-3 text-sm text-white placeholder:text-white/35 focus:outline-none focus:border-accent-gold/60"
                />
                <textarea
                  required
                  rows={6}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="What should we improve next?"
                  className="w-full bg-black/40 border border-white/15 p-3 text-sm text-white placeholder:text-white/35 focus:outline-none focus:border-accent-gold/60"
                />
                <button
                  disabled={status === 'submitting'}
                  className="h-10 px-5 bg-accent-gold/90 hover:bg-accent-gold text-black text-sm font-medium disabled:opacity-60 transition-colors"
                >
                  {status === 'submitting' ? 'Sending...' : 'Send Feedback'}
                </button>
              </form>
              <div className="mt-4 min-h-6 text-sm flex items-center gap-2">
                {status === 'success' && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                {status === 'error' && <AlertCircle className="w-4 h-4 text-rose-400" />}
                <span className={status === 'error' ? 'text-rose-300' : 'text-primary-muted'}>{statusMessage}</span>
              </div>
            </>
          ) : (
            <div className="rounded-sm border border-accent-gold/20 bg-accent-gold/5 p-4 text-sm text-primary-muted">
              This deployment does not have Formspree configured. Direct channels below are live and route feedback into
              email or the portfolio GitHub repo immediately.
            </div>
          )}

          <div className="mt-5 grid gap-3">
            {DIRECT_FEEDBACK_LINKS.map((link) => (
              <LinkPanel key={link.label} {...link} />
            ))}
          </div>
        </div>

        <div className="bg-[#0a0a0c] border border-white/10 p-6 md:p-8">
          <h3 className="text-xl text-white font-serif-heading mb-4 flex items-center gap-2">
            <MessageCircle className="w-5 h-5 text-accent-gold" />
            Discussion Threads
          </h3>
          <div className="space-y-5">
            <div className="border border-white/10 p-4">
              <p className="text-xs uppercase tracking-widest text-white/45 mb-2">GitHub Discussions</p>
              <p className="text-sm text-white/60 mb-4">
                This repo now has GitHub Discussions enabled, so visitors can open a real async thread even when
                embedded widgets are not configured in the deployment.
              </p>
              <div className="grid gap-3">
                {DISCUSSION_LINKS.map((link) => (
                  <LinkPanel key={link.label} {...link} />
                ))}
              </div>
            </div>

            <div className="border border-white/10 p-4">
              <p className="text-xs uppercase tracking-widest text-white/45 mb-2">Embedded Threads</p>
              {GISCUS_EMBED_ACTIVE && GISCUS_REPO && GISCUS_REPO_ID && GISCUS_CATEGORY && GISCUS_CATEGORY_ID ? (
                <div ref={giscusRef} className="min-h-[120px]" />
              ) : DISQUS_SHORTNAME ? (
                <div id="disqus_thread" className="min-h-[140px]" />
              ) : (
                <div className="space-y-2 text-sm text-white/60">
                  <p>
                    Embedded comments are staged, but the giscus GitHub App is not installed on this repository yet.
                  </p>
                  <p>
                    The GitHub Discussions links above are live now and do not depend on deployment-time env vars.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default CommunityHub;
