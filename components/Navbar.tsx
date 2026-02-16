import React, { useState, useEffect } from 'react';
import { Download, Coffee } from 'lucide-react';
import { NavItem, SectionId } from '../types';

declare global {
  interface Window {
    jspdf: any;
  }
}

interface NavbarProps {
  activeSection: SectionId;
  onNavigate: (id: SectionId) => void;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'connect', label: 'Contact' },
];

const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownloadResume = () => {
    window.open('https://drive.google.com/file/d/1F1jKsC71-qThGWxgLpKRaX4s0jeLsL3q/view?usp=drive_link', '_blank');
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex items-center justify-between px-6 py-4 md:px-12 ${scrolled ? 'bg-paper/95 shadow-md border-b border-umber/10' : 'bg-transparent'} backdrop-blur-sm`}>
      {/* Logo */}
      <div className="flex-shrink-0 z-50">
        <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); }} className="group flex items-center gap-2">
            <div className="p-2 bg-umber text-paper rounded-lg group-hover:bg-forest transition-colors">
                <Coffee className="w-5 h-5" />
            </div>
            <span className="text-2xl font-serif font-bold tracking-tight text-umber group-hover:text-forest transition-colors">
                Sanchita.
            </span>
        </a>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center justify-center">
        <ul className="flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => onNavigate(item.id)}
                className={`text-sm font-bold tracking-wide uppercase transition-all duration-300 relative py-1 group ${
                  activeSection === item.id
                    ? 'text-forest'
                    : 'text-umber/60 hover:text-umber'
                }`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-forest transition-all duration-300 ${activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Right Side Actions */}
      <div className="flex-shrink-0 flex items-center gap-4 z-50">
        <button 
          onClick={handleDownloadResume}
          className="hidden sm:flex items-center gap-2 bg-transparent hover:bg-umber/5 border-2 border-umber text-umber px-5 py-2 rounded-lg transition-all duration-300 group cursor-pointer font-serif font-bold"
        >
          <Download className="w-4 h-4 text-umber group-hover:scale-110 transition-transform" />
          <span className="text-sm">Resume</span>
        </button>
        
        {/* Mobile Menu Button (Hamburger) */}
        <div className="md:hidden">
             <button className="text-umber p-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
             </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;