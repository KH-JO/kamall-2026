'use client';

import React, { useState, useEffect } from 'react';
import { conferenceConfig } from '@/config/conferenceConfig';
import { Menu, X, UserCheck, ChevronRight, Globe, ExternalLink } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '학술대회 개요', href: '#about' },
    { name: '주요 일정', href: '#dates' },
    { name: '기조 / 플래너리', href: '#keynotes' },
    { name: '프로그램 일정표', href: '#program' },
    { name: '참가비 안내', href: '#registration' },
    { name: '오시는 길', href: '#venue' },
    { name: '조직위원회', href: '#committee' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/90 py-2.5'
          : 'bg-white/90 backdrop-blur-sm border-b border-slate-200/60 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Official Logo & Title */}
          <a href="#" className="flex items-center space-x-3 group flex-shrink-0">
            <div className="flex items-center justify-center">
              <img
                src={conferenceConfig.meta.logoUrl}
                alt="KAMALL 로고"
                className="h-8 sm:h-9 w-auto object-contain"
              />
            </div>
            <div className="hidden sm:block border-l border-slate-200 pl-3">
              <div className="font-extrabold text-sm sm:text-base text-slate-900 tracking-tight leading-none group-hover:text-purple-700 transition-colors whitespace-nowrap">
                KAMALL <span className="text-purple-700 font-black">2026</span>
              </div>
              <div className="text-[10px] text-slate-500 font-medium whitespace-nowrap mt-0.5">
                2026 연례학술대회
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 flex-shrink-0">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-2.5 xl:px-3 py-1.5 text-xs xl:text-sm font-semibold text-slate-700 hover:text-purple-800 hover:bg-purple-50/80 rounded-lg transition-all whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right CTA Buttons (Direct Google Form Link) */}
          <div className="hidden sm:flex items-center space-x-2.5 flex-shrink-0">
            <a
              href="https://kamall.or.kr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 hover:text-slate-900 rounded-xl border border-slate-200 transition-all shadow-xs whitespace-nowrap"
            >
              <Globe className="w-3.5 h-3.5 text-slate-500" />
              <span>학회 홈</span>
            </a>
            <a
              href={conferenceConfig.registration.registerFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-purple-700 to-blue-600 hover:from-purple-800 hover:to-blue-700 rounded-xl shadow-sm transition-all hover:scale-[1.02] active:scale-95 whitespace-nowrap"
            >
              <UserCheck className="w-3.5 h-3.5" />
              <span>사전 참가 등록</span>
              <ExternalLink className="w-3 h-3 text-purple-200" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <a
              href={conferenceConfig.registration.registerFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1.5 text-xs font-bold text-white bg-purple-700 rounded-lg shadow-xs flex items-center gap-1"
            >
              <span>사전등록</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="메뉴 열기"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-fadeIn">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-700 hover:bg-purple-50 hover:text-purple-800 flex items-center justify-between whitespace-nowrap"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}
            <div className="pt-4 mt-2 border-t border-slate-100">
              <a
                href={conferenceConfig.registration.registerFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-1.5 py-3 text-xs font-bold text-white bg-gradient-to-r from-purple-700 to-blue-600 rounded-xl text-center shadow-xs"
              >
                <UserCheck className="w-4 h-4" />
                <span>사전등록 구글 폼 작성하기</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
