import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Layers, ArrowRight } from 'lucide-react';
import Button from '../common/Button';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Overview', to: '/' },
    { label: 'Features', to: '/features' },
    { label: 'Pricing', to: '/pricing' },
    { label: 'Help Center', to: '/help' },
    { label: 'Careers', to: '/careers' },
  ];

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-stone-200/80 shadow-xs'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex h-16 items-center justify-between">
          {/* Brand Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded-sm"
          >
            <div className="w-8 h-8 rounded-md bg-stone-900 text-white flex items-center justify-center font-bold shadow-xs group-hover:bg-stone-800 transition-colors">
              <Layers className="w-4 h-4 text-orange-400" />
            </div>
            <span className="font-semibold text-base sm:text-lg tracking-tight text-stone-900">
              Vantage
            </span>
            <span className="hidden sm:inline-block text-[11px] font-mono uppercase bg-stone-100 text-stone-600 px-1.5 py-0.5 rounded border border-stone-200/70">
              Platform
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                className={({ isActive }) =>
                  `px-3 py-1.5 text-xs lg:text-sm font-medium rounded-md transition-colors ${
                    isActive && item.to === location.pathname
                      ? 'text-stone-950 bg-stone-100 font-semibold'
                      : 'text-stone-600 hover:text-stone-950 hover:bg-stone-100/60'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/contact"
              className="text-xs lg:text-sm font-medium text-stone-600 hover:text-stone-950 px-2 py-1.5 transition-colors"
            >
              Sign In
            </Link>
            <Button
              to="/contact"
              variant="primary"
              size="sm"
              icon={ArrowRight}
              iconPosition="right"
            >
              Book a Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <Button
              to="/contact"
              variant="primary"
              size="sm"
              className="text-xs px-2.5 py-1"
            >
              Demo
            </Button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-stone-600 hover:text-stone-900 hover:bg-stone-100 focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-stone-200 bg-white/98 backdrop-blur-md px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-medium rounded-md ${
                    isActive
                      ? 'text-stone-900 bg-stone-100 font-semibold'
                      : 'text-stone-600 hover:text-stone-900 hover:bg-stone-50'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="pt-3 border-t border-stone-100 flex flex-col gap-2">
            <Button
              to="/contact"
              onClick={closeMenu}
              variant="secondary"
              size="md"
              className="w-full justify-center"
            >
              Sign In
            </Button>
            <Button
              to="/contact"
              onClick={closeMenu}
              variant="primary"
              size="md"
              className="w-full justify-center"
            >
              Book a Demo
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
