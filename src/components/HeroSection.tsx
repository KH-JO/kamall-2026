'use client';

import React, { useState, useEffect } from 'react';
import { conferenceConfig } from '@/config/conferenceConfig';
import { Calendar, MapPin, Sparkles, ArrowRight, Clock, Train, ZoomIn, X, BookOpen } from 'lucide-react';

export default function HeroSection() {
  const { meta } = conferenceConfig;
  const [posterOpen, setPosterOpen] = useState(false);

  // D-Day Countdown Calculation
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  });

  useEffect(() => {
    const targetDate = new Date(meta.startDateIso).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds, isExpired: false });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [meta.startDateIso]);

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden bg-gradient-to-b from-purple-50/50 via-white to-slate-50 text-slate-900 border-b border-slate-200/70">
      
      {/* Subtle Background Glows */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[300px] bg-gradient-to-tr from-purple-200/40 to-blue-100/30 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-100/40 rounded-full blur-3xl pointer-events-none -z-0" />

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-0" 
        style={{ backgroundImage: 'radial-gradient(#5e3a8c 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Title & Key Conference Info */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-purple-200 text-purple-800 text-xs sm:text-sm font-bold mb-5 shadow-xs">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span>2026 한국멀티미디어언어교육학회 연례학술대회</span>
            </div>

            {/* Main Title (English Theme) */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.18] text-slate-950 mb-3">
              <span className="block text-xl sm:text-2xl md:text-3xl text-purple-700 font-extrabold mb-1">
                AI for All:
              </span>
              <span className="bg-gradient-to-r from-slate-950 via-purple-950 to-blue-900 bg-clip-text text-transparent">
                {meta.themeSub}
              </span>
            </h1>

            {/* Korean Theme Sub-box */}
            <div className="bg-white/95 border border-purple-100 px-4 py-2 rounded-2xl mb-6 shadow-2xs">
              <p className="text-sm sm:text-base text-purple-900 font-bold">
                [{meta.themeKo}]
              </p>
            </div>

            {/* Key Quick Details Chips */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 mb-8 text-xs sm:text-sm font-semibold">
              <div className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-slate-800 shadow-2xs">
                <Calendar className="w-4 h-4 text-purple-700" />
                <span>{meta.dateRange}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-slate-800 shadow-2xs">
                <MapPin className="w-4 h-4 text-rose-600" />
                <span>{meta.venueName}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-purple-50 border border-purple-200 text-purple-900 shadow-2xs font-bold">
                <Train className="w-4 h-4 text-purple-700" />
                <span>판교역 KTX 1시간</span>
              </div>
            </div>

            {/* D-Day Countdown Card (Clean White) */}
            <div className="w-full max-w-lg bg-white border border-purple-100 rounded-2xl p-4 mb-8 shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2.5 mb-2.5 text-xs text-slate-500 font-bold uppercase tracking-wider">
                <span className="flex items-center gap-1.5 text-purple-800 font-extrabold">
                  <Clock className="w-3.5 h-3.5" />
                  학술대회 개최 D-Day
                </span>
                <span className="text-slate-600 font-mono">2026. 10. 17(토) 10:00</span>
              </div>
              <div className="grid grid-cols-4 gap-2 text-center">
                <div className="bg-slate-50 border border-slate-100 rounded-xl p-2">
                  <div className="text-2xl sm:text-3xl font-black text-slate-900 font-mono">{timeLeft.days}</div>
                  <div className="text-[10px] text-slate-500 font-bold">DAYS</div>
                </div>
                <div className="bg-slate-50 border border-slate-100 rounded-xl p-2">
                  <div className="text-2xl sm:text-3xl font-black text-purple-700 font-mono">{timeLeft.hours}</div>
                  <div className="text-[10px] text-slate-500 font-bold">HOURS</div>
                </div>
                <div className="bg-slate-50 border border-slate-100 rounded-xl p-2">
                  <div className="text-2xl sm:text-3xl font-black text-slate-900 font-mono">{timeLeft.minutes}</div>
                  <div className="text-[10px] text-slate-500 font-bold">MINS</div>
                </div>
                <div className="bg-slate-50 border border-slate-100 rounded-xl p-2">
                  <div className="text-2xl sm:text-3xl font-black text-purple-700 font-mono">{timeLeft.seconds}</div>
                  <div className="text-[10px] text-slate-500 font-bold">SECS</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <a
                href="#registration"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm sm:text-base font-black text-white bg-gradient-to-r from-purple-700 to-blue-600 hover:from-purple-800 hover:to-blue-700 rounded-xl shadow-md shadow-purple-700/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>사전 참가 등록하기</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#program"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-bold text-slate-700 hover:text-slate-950 bg-white hover:bg-slate-100 rounded-xl border border-slate-200 transition-all shadow-xs"
              >
                <BookOpen className="w-4 h-4 text-purple-700" />
                <span>프로그램 일정표 보기</span>
              </a>
            </div>

          </div>

          {/* Right Column: Prominent Conference Poster Display */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div 
              onClick={() => setPosterOpen(true)}
              className="relative group cursor-pointer rounded-3xl overflow-hidden border-4 border-white shadow-2xl hover:shadow-purple-900/20 transition-all duration-300 max-w-[340px] sm:max-w-[380px] bg-white"
            >
              <img
                src={meta.posterUrl}
                alt="2026 KAMALL 학술대회 공식 포스터"
                className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-sm font-bold gap-2 backdrop-blur-[2px]">
                <ZoomIn className="w-5 h-5 text-white" />
                <span>포스터 크게보기</span>
              </div>
            </div>
            <div className="mt-3.5 text-center">
              <span className="inline-block text-xs font-extrabold text-purple-900 bg-purple-100/70 border border-purple-200 px-3 py-1 rounded-full">
                2026 KAMALL 공식 포스터 (클릭 시 확대)
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Poster Zoom Modal */}
      {posterOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md animate-fadeIn">
          <div className="relative max-w-2xl w-full max-h-[90vh] flex flex-col items-center bg-white rounded-3xl p-4 sm:p-5 border border-slate-200 shadow-2xl">
            <button
              onClick={() => setPosterOpen(false)}
              className="absolute top-4 right-4 text-slate-500 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 p-2 rounded-full z-10 transition-colors"
              aria-label="닫기"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="overflow-y-auto max-h-[78vh] rounded-2xl w-full flex justify-center bg-slate-50 p-2">
              <img
                src={meta.posterUrl}
                alt="2026 KAMALL 학술대회 공식 포스터"
                className="w-auto max-h-[74vh] object-contain rounded-xl shadow-lg"
              />
            </div>
            <div className="mt-3 text-xs text-slate-600 font-semibold text-center">
              2026 한국멀티미디어언어교육학회 연례학술대회 공식 포스터
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
