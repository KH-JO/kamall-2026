'use client';

import React from 'react';
import { conferenceConfig, ImportantDate } from '@/config/conferenceConfig';
import { Calendar, CheckCircle2, Clock, AlertCircle } from 'lucide-react';

export default function ImportantDatesSection() {
  const { importantDates } = conferenceConfig;

  const getStatusBadge = (status: ImportantDate['status']) => {
    switch (status) {
      case 'open':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-extrabold bg-emerald-100 text-emerald-800 border border-emerald-300 animate-pulse">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
            접수 진행중
          </span>
        );
      case 'upcoming':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-purple-100 text-purple-800 border border-purple-200">
            <Clock className="w-3 h-3 text-purple-700" />
            예정
          </span>
        );
      case 'closed':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-500 border border-slate-200">
            <CheckCircle2 className="w-3 h-3 text-slate-400" />
            마감
          </span>
        );
    }
  };

  return (
    <section id="dates" className="py-20 bg-slate-50 text-slate-900 relative border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-800 text-xs font-bold mb-3">
            <Calendar className="w-3.5 h-3.5 text-purple-700" />
            IMPORTANT DATES
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            학술대회 주요 일정
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            발표 제목 신청, 초록 접수, 심사 결과 발표 및 사전 등록 일정을 확인하세요.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {importantDates.map((item, index) => {
            const isOpen = item.status === 'open';
            return (
              <div
                key={item.id}
                className={`relative rounded-3xl p-6 transition-all duration-300 flex flex-col justify-between ${
                  isOpen
                    ? 'bg-white border-2 border-purple-600 shadow-md shadow-purple-900/5 scale-[1.02]'
                    : 'bg-white border border-slate-200 shadow-xs hover:shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-black text-slate-400">STEP 0{index + 1}</span>
                    {getStatusBadge(item.status)}
                  </div>
                  <h3 className="text-base sm:text-lg font-black text-slate-950 mb-2">
                    {item.title}
                  </h3>
                  <div className="text-base font-extrabold text-purple-800 font-mono mb-2">
                    {item.dateStr}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Notice Box */}
        <div className="mt-10 max-w-2xl mx-auto bg-white border border-purple-100 rounded-2xl p-4 flex items-start gap-3 text-xs sm:text-sm text-slate-700 shadow-xs">
          <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <p>
            학술대회 세부 일정은 논문 심사 진행 상황에 따라 일부 조정될 수 있으며, 변동 사항은 학회 공식 홈페이지 공지사항을 통해 신속히 안내해 드립니다.
          </p>
        </div>

      </div>
    </section>
  );
}
