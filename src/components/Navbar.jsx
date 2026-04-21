import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function NavBar() {
  const [activeLink, setActiveLink] = useState('Work');
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = (label) => {
    setActiveLink(label);
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-outline-variant/10 px-6 md:px-10 py-4 flex justify-between items-center transition-all duration-300">
      
      {/* Logo */}
      <Link to="/" className="font-headline text-2xl font-black tracking-tighter text-primary uppercase italic" onClick={() => setActiveLink('Work')}>
        Uyen Ngo
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-10">
        {navLinks.map(({ label, href }) => (
          <a
            key={label}
            href={location.pathname === '/' ? href : `/${href}`}
            onClick={() => handleNavClick(label)}
            className={`relative font-bold text-[10px] tracking-[0.3em] uppercase transition-all duration-300 pb-1 group
              ${activeLink === label ? 'text-primary' : 'text-zinc-500 hover:text-primary'}`}
          >
            {label}
            {/* Underline */}
            <span className={`absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-300
              ${activeLink === label ? 'w-full' : 'w-0 group-hover:w-full'}`}
            />
          </a>
        ))}
      </div>

      {/* Desktop CTA */}
      <a
        href="#contact"
        onClick={() => handleNavClick('Contact')}
        className="hidden md:inline-block bg-primary text-on-primary px-8 py-3 font-label text-[10px] font-bold tracking-[0.3em] uppercase hover:-translate-y-1 transition-transform duration-300 shadow-[0_16px_40px_rgba(176,0,70,0.1)]"
      >
        Get In Touch
      </a>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden flex flex-col gap-[5px] p-2"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
        <span className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
        <span className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
      </button>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-outline-variant/10 shadow-lg flex flex-col py-6 px-8 gap-6 md:hidden">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={location.pathname === '/' ? href : `/${href}`}
              onClick={() => handleNavClick(label)}
              className={`font-bold text-[11px] tracking-[0.3em] uppercase transition-all duration-300 pb-1 border-b-2
                ${activeLink === label ? 'text-primary border-primary' : 'text-zinc-500 border-transparent'}`}
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => handleNavClick('Contact')}
            className="bg-primary text-on-primary px-8 py-4 font-label text-[10px] font-bold tracking-[0.3em] uppercase text-center"
          >
            Get In Touch
          </a>
        </div>
      )}
    </nav>
  );
}
