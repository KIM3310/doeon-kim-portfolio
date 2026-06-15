import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Overview', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Systems', href: '#projects' },
  { name: 'Architecture', href: '#architecture' },
  { name: 'Capabilities', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState('#about');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;

    const sections = navItems
      .map(item => document.querySelector(item.href))
      .filter((section): section is Element => Boolean(section));

    const observer = new IntersectionObserver(
      entries => {
        const active = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (active?.target.id) {
          setActiveHref(`#${active.target.id}`);
        }
      },
      { rootMargin: '-38% 0px -50% 0px', threshold: [0.08, 0.24, 0.6] }
    );

    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setIsOpen(false); };
    if (isOpen) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen]);

  const handleClick = (href: string) => {
    setIsOpen(false);
    setActiveHref(href);
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`site-nav ${scrolled ? 'is-scrolled' : ''}`} aria-label="Primary navigation">
      <div className="nav-inner">
        <button type="button" className="nav-brand" onClick={() => handleClick('#about')}>
          KIM3310
        </button>

        <div className="nav-desktop">
          {navItems.map(item => (
            <button
              key={item.name}
              type="button"
              onClick={() => handleClick(item.href)}
              className={`nav-link ${activeHref === item.href ? 'is-active' : ''}`}
              aria-current={activeHref === item.href ? 'page' : undefined}
            >
              {item.name}
            </button>
          ))}
        </div>

        <button type="button" onClick={() => setIsOpen(!isOpen)} className="nav-toggle" aria-label="Toggle menu" aria-expanded={isOpen}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="nav-mobile">
          {navItems.map(item => (
            <button
              key={item.name}
              type="button"
              onClick={() => handleClick(item.href)}
              className={`nav-mobile-link ${activeHref === item.href ? 'is-active' : ''}`}
              aria-current={activeHref === item.href ? 'page' : undefined}
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
