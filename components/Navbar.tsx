import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Overview', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Systems', href: '#projects' },
  { name: 'Capabilities', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setIsOpen(false); };
    if (isOpen) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen]);

  const handleClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`site-nav ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="nav-inner">
        <span className="nav-brand">KIM3310</span>

        {/* Desktop */}
        <div className="nav-desktop">
          {navItems.map(item => (
            <button key={item.name} onClick={() => handleClick(item.href)} className="nav-link">
              {item.name}
            </button>
          ))}
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="nav-toggle" aria-label="Toggle menu" aria-expanded={isOpen}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="nav-mobile">
          {navItems.map(item => (
            <button key={item.name} onClick={() => handleClick(item.href)} className="nav-mobile-link">
              {item.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
