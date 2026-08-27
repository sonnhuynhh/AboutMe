import React, { useState, useEffect } from 'react';
import { PROFILE_DATA } from '../data/profileData';
import { FileText, Menu, X, Code2 } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Tổng quan', href: '#hero' },
    { name: 'Spring Terminal', href: '#terminal' },
    { name: 'Kỹ năng Java', href: '#skills' },
    { name: 'Dự án GitHub', href: '#projects' },
    { name: 'Kinh nghiệm CV', href: '#timeline' },
    { name: 'Liên hệ', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-obsidian-900/80 backdrop-blur-md border-b border-gray-800/80 shadow-lg shadow-black/30'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-spring-500 to-emerald-700 flex items-center justify-center text-obsidian-900 font-bold shadow-md shadow-spring-500/20 group-hover:scale-105 transition-transform">
            <Code2 className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg text-white tracking-wide flex items-center gap-2">
              {PROFILE_DATA.name}
              <span className="inline-block w-2 h-2 rounded-full bg-spring-500 animate-pulse"></span>
            </span>
            <span className="text-xs text-spring-400 font-mono tracking-wider">
              JAVA & SPRING BOOT
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-obsidian-800/60 p-1.5 rounded-full border border-gray-800/80 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-1.5 text-sm font-medium text-gray-300 hover:text-spring-400 hover:bg-gray-800/60 rounded-full transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={PROFILE_DATA.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-300 hover:text-white hover:bg-obsidian-800 rounded-xl border border-gray-800 transition-all flex items-center gap-2 text-sm font-medium"
            title="Xem GitHub Repositories"
          >
            <GithubIcon className="w-4 h-4 text-spring-400" />
            <span>GitHub</span>
          </a>

          <a
            href="#contact"
            className="px-4 py-2 bg-gradient-to-r from-spring-600 to-spring-500 hover:from-spring-500 hover:to-spring-400 text-obsidian-900 font-semibold rounded-xl text-sm transition-all shadow-md shadow-spring-500/20 hover:shadow-spring-500/40 flex items-center gap-2 hover:scale-[1.02]"
          >
            <FileText className="w-4 h-4" />
            <span>Liên hệ / CV</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-gray-300 hover:text-white rounded-lg bg-obsidian-800/80 border border-gray-800"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 mx-4 p-4 rounded-2xl glass-panel border border-gray-800 shadow-2xl flex flex-col gap-3 animate-in fade-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl text-gray-200 hover:bg-spring-500/10 hover:text-spring-400 transition-all font-medium text-sm flex items-center justify-between"
            >
              <span>{link.name}</span>
            </a>
          ))}
          <div className="pt-2 border-t border-gray-800 flex items-center gap-2">
            <a
              href={PROFILE_DATA.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2.5 text-center text-sm font-medium text-gray-200 bg-obsidian-800 rounded-xl border border-gray-700 flex items-center justify-center gap-2"
            >
              <GithubIcon className="w-4 h-4 text-spring-400" />
              GitHub
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 py-2.5 text-center text-sm font-semibold text-obsidian-900 bg-spring-500 rounded-xl flex items-center justify-center gap-2"
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
