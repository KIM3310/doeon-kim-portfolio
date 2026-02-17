import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'Why Me', href: '#why-me' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Community', href: '#community' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const scrollRaf = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRaf.current !== null) {
        return;
      }
      scrollRaf.current = window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 50);
        scrollRaf.current = null;
      });
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollRaf.current !== null) {
        window.cancelAnimationFrame(scrollRaf.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen]);

  const getScrollBehavior = (): ScrollBehavior => {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: getScrollBehavior()
      });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#050505]/80 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'} print:absolute print:bg-[#050505] print:border-none`}>
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: getScrollBehavior() })}
              className="text-xl font-serif-heading font-medium text-white tracking-tight focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded-sm"
              aria-label="Scroll to top"
            >
              DOEON KIM.
            </button>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-baseline space-x-8 lg:space-x-12 print:hidden">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className="text-sm text-white/60 hover:text-white transition-colors font-medium tracking-wide"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          <div className="md:hidden print:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white/60 hover:text-white p-2 focus:outline-none"
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-nav-menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            id="mobile-nav-menu"
            className="md:hidden bg-[#050505] border-b border-white/10 overflow-hidden print:hidden"
          >
            <div className="px-6 pt-4 pb-8 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className="text-white/80 hover:text-white block text-lg font-serif-heading"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
