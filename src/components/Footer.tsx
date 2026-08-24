'use client';

import React from 'react';
import { conferenceConfig } from '@/config/conferenceConfig';
import { Mail, Globe, MapPin, Clock, ArrowUp } from 'lucide-react';

export default function Footer() {
  const { meta, contact } = conferenceConfig;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 text-xs sm:text-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-white p-1.5 rounded-xl shadow-xs">
                <img
                  src={meta.logoUrl}
                  alt="KAMALL 로고"
                  className="h-7 w-auto object-contain"
                />
              </div>
              <div>
                <div className="font-bold text-base text-white">
                  {meta.shortTitle} 연례학술대회
                </div>
                <div className="text-[11px] text-slate-400 font-medium">
                  {meta.host}
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              한국멀티미디어언어교육학회(KAMALL)는 최첨단 테크놀로지와 AI를 언어 교육에 활용하는 이론과 실제를 연구하고 보급하는 전문 학술단체입니다.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              빠른 메뉴
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#about" className="hover:text-purple-400 transition-colors">학술대회 개요</a></li>
              <li><a href="#keynotes" className="hover:text-purple-400 transition-colors">기조 / 플래너리 연사</a></li>
              <li><a href="#program" className="hover:text-purple-400 transition-colors">프로그램 일정표</a></li>
              <li><a href="#cfp" className="hover:text-purple-400 transition-colors">발표 신청 (구글폼)</a></li>
              <li><a href="#registration" className="hover:text-purple-400 transition-colors">사전 등록 안내</a></li>
              <li><a href="#venue" className="hover:text-purple-400 transition-colors">오시는 길 (건국대 글로컬)</a></li>
            </ul>
          </div>

          {/* Secretariat Contact */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              학회 사무국 문의처
            </h4>
            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div>행사/등록 문의: <a href={`mailto:${contact.email}`} className="text-purple-400 hover:underline">{contact.email}</a></div>
                  <div>논문/초록 문의: <a href={`mailto:${contact.academicEmail}`} className="text-purple-400 hover:underline">{contact.academicEmail}</a></div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-purple-400 flex-shrink-0" />
                <a href={contact.homepage} target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
                  {contact.homepage} (공식 학회 홈페이지)
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                <span>{contact.address}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Clock className="w-4 h-4 text-slate-500 flex-shrink-0" />
                <span>{contact.operatingHours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 Korea Association of Multimedia-Assisted Language Learning (KAMALL). All Rights Reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-white transition-colors"
          >
            <span>맨 위로 이동</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
