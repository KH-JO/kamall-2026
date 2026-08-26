'use client';

import React, { useState } from 'react';
import { conferenceConfig, ParallelSessionRoom } from '@/config/conferenceConfig';
import { Clock, MapPin, User, Coffee, ChevronDown, ChevronUp, Download, Printer, Sparkles, BookOpen, Layers, CheckCircle2 } from 'lucide-react';

export default function ProgramSection() {
  const { parallelSessionsPart1, parallelSessionsPart2 } = conferenceConfig;

  // Track expanded session accordion states (all closed by default)
  const [expandedPart1, setExpandedPart1] = useState<number | null>(null);
  const [expandedPart2, setExpandedPart2] = useState<number | null>(null);

  const togglePart1 = (idx: number) => {
    setExpandedPart1(expandedPart1 === idx ? null : idx);
  };

  const togglePart2 = (idx: number) => {
    setExpandedPart2(expandedPart2 === idx ? null : idx);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="program" className="py-24 bg-white text-slate-900 relative border-b border-slate-200/80">
      
      {/* Background Subtle Gradient */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-purple-50/50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Download/Print CTA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-900 text-xs font-black mb-3 shadow-2xs">
              <Clock className="w-3.5 h-3.5 text-purple-700" />
              CONFERENCE PROGRAM & TIMETABLE
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight">
              2026 KAMALL 연례학술대회 프로그램
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 font-medium">
              일시: <span className="font-bold text-purple-900 font-mono">2026년 10월 17일(토) 10:00 ~ 17:00</span> | 장소: <span className="font-bold text-slate-900">충주 건국대학교 글로컬캠퍼스</span>
            </p>
          </div>

          <div className="flex items-center gap-2.5 flex-shrink-0">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs sm:text-sm border border-slate-200 shadow-2xs transition-colors"
            >
              <Printer className="w-4 h-4 text-slate-600" />
              <span>일정표 인쇄 / PDF 저장</span>
            </button>
            <a
              href="#registration"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-bold text-xs sm:text-sm shadow-xs transition-colors"
            >
              <BookOpen className="w-4 h-4 text-purple-200" />
              <span>사전등록 바로가기</span>
            </a>
          </div>
        </div>

        {/* Master Schedule Container */}
        <div className="max-w-5xl mx-auto space-y-8">

          {/* ═══════════════════════════════════════════════════════════════════
              PART 1: 개회식, 기조연설 및 플래너리 강연 (10:00 ~ 12:30)
             ═══════════════════════════════════════════════════════════════════ */}
          <div className="bg-white border-2 border-purple-200 rounded-3xl p-6 sm:p-8 shadow-sm">
            <div className="flex items-center justify-between gap-2 pb-4 mb-6 border-b border-slate-200">
              <div className="flex items-center gap-2.5">
                <span className="w-3 h-3 rounded-full bg-purple-600" />
                <h3 className="text-xl font-black text-purple-950">
                  제1부: 개회식 · 기조강연 및 Plenary 초청 강연
                </h3>
              </div>
              <span className="text-xs font-bold text-purple-800 bg-purple-100 px-3 py-1 rounded-full whitespace-nowrap">
                대강당 (Main Hall)
              </span>
            </div>

            <div className="space-y-4">
              
              {/* Registration */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-200/80 gap-3">
                <div className="flex items-center gap-3">
                  <div className="px-3 py-1.5 rounded-xl bg-slate-200 text-slate-800 font-mono font-bold text-xs sm:text-sm flex-shrink-0">
                    09:30 - 10:00
                  </div>
                  <div className="font-bold text-slate-900 text-sm sm:text-base">
                    등록 및 안내, 자료집 배포
                  </div>
                </div>
                <div className="text-xs text-slate-500 font-semibold flex items-center gap-1 flex-shrink-0">
                  <MapPin className="w-3.5 h-3.5 text-rose-500" />
                  행사장 로비 등록데스크
                </div>
              </div>

              {/* Opening Ceremony */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-200/80 gap-3">
                <div className="flex items-center gap-3">
                  <div className="px-3 py-1.5 rounded-xl bg-purple-100 text-purple-900 font-mono font-bold text-xs sm:text-sm flex-shrink-0">
                    10:00 - 10:10
                  </div>
                  <div>
                    <div className="font-black text-slate-950 text-sm sm:text-base">
                      개회식 및 내빈소개
                    </div>
                    <div className="text-xs text-slate-600 mt-0.5">
                      개회사: 신동광 (광주교육대학교, 한국멀티미디어언어교육학회 회장)
                    </div>
                  </div>
                </div>
                <div className="text-xs text-slate-500 font-semibold flex items-center gap-1 flex-shrink-0">
                  <MapPin className="w-3.5 h-3.5 text-rose-500" />
                  대강당
                </div>
              </div>

              {/* Keynote Speech (High Prominence) */}
              <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-purple-50 via-white to-purple-50/50 border-2 border-purple-600 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-lg bg-purple-700 text-white text-xs font-black">
                      기조강연 (Keynote)
                    </span>
                    <span className="font-mono font-black text-purple-950 text-sm sm:text-base">
                      10:10 - 11:10 (60분)
                    </span>
                  </div>
                  <span className="text-xs font-bold text-slate-500 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-rose-500" />
                    대강당
                  </span>
                </div>
                <h4 className="text-base sm:text-lg font-black text-slate-950 mb-2">
                  "Reconceptualizing L2 Instruction in the GenAI Era: A GenAI-Mediated Activity Theory Framework"
                </h4>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-purple-900">
                  <User className="w-4 h-4 text-purple-700" />
                  <span>연사: 이장호 교수 (중앙대학교)</span>
                </div>
              </div>

              {/* Plenary 1 (High Prominence) */}
              <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-blue-50 via-white to-blue-50/50 border-2 border-blue-600 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-lg bg-blue-700 text-white text-xs font-black">
                      Plenary 1
                    </span>
                    <span className="font-mono font-black text-blue-950 text-sm sm:text-base">
                      11:10 - 11:50 (40분)
                    </span>
                  </div>
                  <span className="text-xs font-bold text-slate-500 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-rose-500" />
                    대강당
                  </span>
                </div>
                <h4 className="text-base sm:text-lg font-black text-slate-950 mb-2">
                  "Rethinking Language Learning with Agentic AI: From Multimodal to Intercultural and Inclusive Learning"
                </h4>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-blue-900">
                  <User className="w-4 h-4 text-blue-700" />
                  <span>연사: 이성용 교수 (University College London, UK)</span>
                </div>
              </div>

              {/* Plenary 2 (High Prominence) */}
              <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-indigo-50 via-white to-indigo-50/50 border-2 border-indigo-600 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-lg bg-indigo-700 text-white text-xs font-black">
                      Plenary 2
                    </span>
                    <span className="font-mono font-black text-indigo-950 text-sm sm:text-base">
                      11:50 - 12:30 (40분)
                    </span>
                  </div>
                  <span className="text-xs font-bold text-slate-500 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-rose-500" />
                    대강당
                  </span>
                </div>
                <h4 className="text-base sm:text-lg font-black text-slate-950 mb-2">
                  "정답의 시대에서 질문의 시대로: AI 시대 영어 능력의 새로운 정의"
                </h4>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-indigo-900">
                  <User className="w-4 h-4 text-indigo-700" />
                  <span>연사: 권서경 교수 (서울교육대학교)</span>
                </div>
              </div>

            </div>
          </div>

          {/* ═══════════════════════════════════════════════════════════════════
              LUNCH & NETWORKING (12:30 ~ 13:30)
             ═══════════════════════════════════════════════════════════════════ */}
          <div className="bg-amber-50/70 border-2 border-amber-300 rounded-3xl p-5 sm:p-6 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center flex-shrink-0 shadow-2xs">
                <Coffee className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="font-mono font-black text-amber-950 text-base">
                    12:30 - 13:30 (60분)
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-amber-200 text-amber-900 text-xs font-black">
                    점심식사 (Lunch)
                  </span>
                </div>
                <h4 className="text-base font-black text-slate-950">
                  중식 제공 및 참가자 기념촬영 / 후원사 부스 관람
                </h4>
              </div>
            </div>
            <div className="text-xs font-bold text-amber-900 bg-white px-3.5 py-1.5 rounded-xl border border-amber-200 shadow-2xs whitespace-nowrap">
              교내 식당 & 로비
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════════════════════
              PART 2: 제2부 학술발표 I (13:30 ~ 14:50) — 4개 발표실 동시 진행
             ═══════════════════════════════════════════════════════════════════ */}
          <div className="bg-slate-50 border-2 border-slate-300/80 rounded-3xl p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-6 border-b border-slate-200">
              <div>
                <div className="inline-block text-[11px] font-black text-purple-800 bg-purple-100 px-2.5 py-0.5 rounded-md mb-1 uppercase">
                  학술발표 I (Session ① · ② · ③ · ④ 동시 진행)
                </div>
                <h3 className="text-xl font-black text-slate-950">
                  제2부 학술발표 I (13:30 ~ 14:50) — 클릭하여 세부 논문 및 발표자 확인
                </h3>
              </div>
              <span className="text-xs font-bold text-slate-500 font-mono">
                총 16편 발표 · 4개 분과
              </span>
            </div>

            {/* 4 Parallel Rooms Accordion Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {parallelSessionsPart1.map((room, idx) => {
                const isExpanded = expandedPart1 === idx;

                return (
                  <div
                    key={idx}
                    className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                      isExpanded ? 'border-purple-600 shadow-md ring-2 ring-purple-100' : 'border-slate-200 hover:border-purple-300'
                    }`}
                  >
                    {/* Accordion Header / Click Target */}
                    <button
                      onClick={() => togglePart1(idx)}
                      className="w-full p-4 sm:p-5 text-left flex items-start justify-between gap-3 bg-white hover:bg-slate-50/80 transition-colors"
                    >
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="px-2.5 py-0.5 rounded-md bg-purple-700 text-white font-mono font-bold text-xs">
                            {room.sessionCode}
                          </span>
                          <span className="font-bold text-xs text-slate-500">
                            {room.roomNumber}
                          </span>
                        </div>
                        <h4 className="text-base font-black text-slate-950 leading-snug">
                          {room.themeKo}
                        </h4>
                        <div className="text-[11px] text-slate-500 font-mono mt-0.5">
                          {room.themeEn}
                        </div>
                        <div className="text-xs font-bold text-purple-900 mt-2">
                          사회자: {room.moderator}
                        </div>
                      </div>

                      <div className="p-1 rounded-lg bg-slate-100 text-slate-600 flex-shrink-0 mt-1">
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </div>
                    </button>

                    {/* Detailed Paper Presentations (Visible on click) */}
                    {isExpanded && (
                      <div className="p-4 sm:p-5 bg-slate-50/70 border-t border-slate-100 space-y-3.5 animate-fadeIn">
                        <div className="text-[11px] font-black text-slate-500 uppercase tracking-wider">
                          발표 논문 목록 ({room.papers.length}편)
                        </div>
                        {room.papers.map((paper, pIdx) => (
                          <div
                            key={pIdx}
                            className="bg-white p-3.5 rounded-xl border border-slate-200 text-xs shadow-2xs space-y-1.5"
                          >
                            <div className="font-extrabold text-slate-950 leading-snug">
                              {pIdx + 1}. {paper.title}
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-[11px] text-slate-600 gap-1 pt-1 border-t border-slate-100">
                              <div>
                                <span className="font-bold text-purple-900">발표자:</span> {paper.presenter}
                              </div>
                              <div>
                                <span className="font-bold text-slate-700">토론자:</span> {paper.discussant}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Break Time (14:50 ~ 15:05) */}
          <div className="text-center py-2.5 px-4 rounded-2xl bg-slate-100 text-slate-600 font-bold text-xs flex items-center justify-center gap-2">
            <Clock className="w-3.5 h-3.5 text-slate-500" />
            <span>Break Time (14:50 ~ 15:05) — 휴식 및 발표장 이동</span>
          </div>

          {/* ═══════════════════════════════════════════════════════════════════
              PART 3: 제2부 학술발표 II (15:05 ~ 16:05) — 4개 발표실 동시 진행
             ═══════════════════════════════════════════════════════════════════ */}
          <div className="bg-slate-50 border-2 border-slate-300/80 rounded-3xl p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-6 border-b border-slate-200">
              <div>
                <div className="inline-block text-[11px] font-black text-blue-800 bg-blue-100 px-2.5 py-0.5 rounded-md mb-1 uppercase">
                  학술발표 II (Session ⑤ · ⑥ · ⑦ · ⑧ 동시 진행)
                </div>
                <h3 className="text-xl font-black text-slate-950">
                  제2부 학술발표 II (15:05 ~ 16:05) — 클릭하여 세부 논문 및 발표자 확인
                </h3>
              </div>
              <span className="text-xs font-bold text-slate-500 font-mono">
                총 6편 발표 · 4개 분과
              </span>
            </div>

            {/* 4 Parallel Rooms Accordion Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {parallelSessionsPart2.map((room, idx) => {
                const isExpanded = expandedPart2 === idx;

                return (
                  <div
                    key={idx}
                    className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                      isExpanded ? 'border-blue-600 shadow-md ring-2 ring-blue-100' : 'border-slate-200 hover:border-blue-300'
                    }`}
                  >
                    {/* Accordion Header / Click Target */}
                    <button
                      onClick={() => togglePart2(idx)}
                      className="w-full p-4 sm:p-5 text-left flex items-start justify-between gap-3 bg-white hover:bg-slate-50/80 transition-colors"
                    >
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="px-2.5 py-0.5 rounded-md bg-blue-700 text-white font-mono font-bold text-xs">
                            {room.sessionCode}
                          </span>
                          <span className="font-bold text-xs text-slate-500">
                            {room.roomNumber}
                          </span>
                        </div>
                        <h4 className="text-base font-black text-slate-950 leading-snug">
                          {room.themeKo}
                        </h4>
                        <div className="text-[11px] text-slate-500 font-mono mt-0.5">
                          {room.themeEn}
                        </div>
                        <div className="text-xs font-bold text-blue-900 mt-2">
                          사회자: {room.moderator}
                        </div>
                      </div>

                      <div className="p-1 rounded-lg bg-slate-100 text-slate-600 flex-shrink-0 mt-1">
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </div>
                    </button>

                    {/* Detailed Paper Presentations (Visible on click) */}
                    {isExpanded && (
                      <div className="p-4 sm:p-5 bg-slate-50/70 border-t border-slate-100 space-y-3.5 animate-fadeIn">
                        <div className="text-[11px] font-black text-slate-500 uppercase tracking-wider">
                          발표 논문 목록 ({room.papers.length}편)
                        </div>
                        {room.papers.map((paper, pIdx) => (
                          <div
                            key={pIdx}
                            className="bg-white p-3.5 rounded-xl border border-slate-200 text-xs shadow-2xs space-y-1.5"
                          >
                            <div className="font-extrabold text-slate-950 leading-snug">
                              {pIdx + 1}. {paper.title}
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-[11px] text-slate-600 gap-1 pt-1 border-t border-slate-100">
                              <div>
                                <span className="font-bold text-blue-900">발표자:</span> {paper.presenter}
                              </div>
                              <div>
                                <span className="font-bold text-slate-700">토론자:</span> {paper.discussant}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════════════════════
              PART 4: 후속 일정 및 총회 / 폐회 (16:05 ~ 17:00)
             ═══════════════════════════════════════════════════════════════════ */}
          <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-sm">
            <h3 className="text-lg font-black text-white mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <span>후속 일정: 연구윤리교육 · 확대이사회 및 정기총회 · 폐회</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
              <div className="bg-slate-800/90 p-4 rounded-2xl border border-slate-700">
                <div className="text-purple-400 font-mono font-bold mb-1">16:05 ~ 16:25 (20분)</div>
                <div className="font-extrabold text-white text-sm">① 연구윤리교육</div>
                <div className="text-xs text-slate-400 mt-1">학술 논문 및 AI 활용 연구 윤리 가이드라인 교육</div>
              </div>

              <div className="bg-slate-800/90 p-4 rounded-2xl border border-slate-700">
                <div className="text-blue-400 font-mono font-bold mb-1">16:25 ~ 16:55 (30분)</div>
                <div className="font-extrabold text-white text-sm">② 확대이사회 및 정기총회</div>
                <div className="text-xs text-slate-400 mt-1">학회 운영 보고, 학술지 결산 및 정기 안건 의결</div>
              </div>

              <div className="bg-slate-800/90 p-4 rounded-2xl border border-slate-700">
                <div className="text-amber-400 font-mono font-bold mb-1">17:00 ~</div>
                <div className="font-extrabold text-white text-sm">③ 폐회 및 만찬</div>
                <div className="text-xs text-slate-400 mt-1">학술대회 공식 폐회 및 참가자 만찬 네트워킹</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
