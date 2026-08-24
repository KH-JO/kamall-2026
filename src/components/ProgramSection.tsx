'use client';

import React from 'react';
import { conferenceConfig } from '@/config/conferenceConfig';
import { Clock, MapPin, Calendar, User, Sparkles, Coffee, Award, Layers, CheckCircle2 } from 'lucide-react';

export default function ProgramSection() {
  const { meta } = conferenceConfig;

  return (
    <section id="program" className="py-24 bg-white text-slate-900 relative border-b border-slate-200/80">
      
      {/* Background Decorative Pattern */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-purple-50/50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-900 text-xs font-black mb-3 shadow-2xs">
            <Clock className="w-3.5 h-3.5 text-purple-700" />
            CONFERENCE PROGRAM & SCHEDULE
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">
            2026 KAMALL 연례학술대회 프로그램
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium">
            일시: <span className="font-bold text-purple-900 font-mono">2026년 10월 17일(토) 10:00 ~ 16:30</span> | 장소: <span className="font-bold text-slate-900">건국대학교 글로컬캠퍼스</span>
          </p>
        </div>

        {/* High-Readability Timeline Container */}
        <div className="max-w-5xl mx-auto space-y-6">

          {/* Part 1: Morning Main Hall Sessions (오전 메인홀 세션) */}
          <div className="bg-white border-2 border-purple-200 rounded-3xl p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-2.5 pb-4 mb-6 border-b border-slate-200">
              <span className="w-3 h-3 rounded-full bg-purple-600 animate-ping" />
              <h3 className="text-xl font-black text-purple-950 flex items-center gap-2">
                <span>[오전 세션] 등록 및 개회식 / 기조연설 & 플래너리 I</span>
              </h3>
              <span className="ml-auto text-xs font-bold text-purple-800 bg-purple-100 px-3 py-1 rounded-full">
                대강당 (Main Hall)
              </span>
            </div>

            <div className="space-y-4">
              
              {/* Item: Registration */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-200/80 gap-3">
                <div className="flex items-center gap-3">
                  <div className="px-3 py-1.5 rounded-xl bg-slate-200 text-slate-800 font-mono font-bold text-xs sm:text-sm flex-shrink-0">
                    09:30 - 10:00
                  </div>
                  <div className="font-bold text-slate-900 text-sm sm:text-base">
                    현장 등록 및 자료집 배포, 참가자 네트워킹
                  </div>
                </div>
                <div className="text-xs text-slate-500 font-semibold flex items-center gap-1 flex-shrink-0">
                  <MapPin className="w-3.5 h-3.5 text-rose-500" />
                  14동 행사장 로비
                </div>
              </div>

              {/* Item: Opening Ceremony */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-200/80 gap-3">
                <div className="flex items-center gap-3">
                  <div className="px-3 py-1.5 rounded-xl bg-purple-100 text-purple-900 font-mono font-bold text-xs sm:text-sm flex-shrink-0">
                    10:00 - 10:20
                  </div>
                  <div>
                    <div className="font-black text-slate-950 text-sm sm:text-base">
                      개회식 및 환영사
                    </div>
                    <div className="text-xs text-slate-600 mt-0.5">
                      개회사: 신동광 KAMALL 회장 | 환영사: 건국대학교 글로컬캠퍼스 총장
                    </div>
                  </div>
                </div>
                <div className="text-xs text-slate-500 font-semibold flex items-center gap-1 flex-shrink-0">
                  <MapPin className="w-3.5 h-3.5 text-rose-500" />
                  대강당
                </div>
              </div>

              {/* Item: Keynote Speech (High Prominence) */}
              <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-purple-50 via-white to-purple-50/50 border-2 border-purple-600 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-lg bg-purple-700 text-white text-xs font-black">
                      기조연설 (Keynote)
                    </span>
                    <span className="font-mono font-extrabold text-purple-950 text-sm sm:text-base">
                      10:20 - 11:20 (60분)
                    </span>
                  </div>
                  <span className="text-xs font-bold text-slate-500 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-rose-500" />
                    대강당 | 좌장: 이혜진 학술대회위원장 (원광대)
                  </span>
                </div>
                <h4 className="text-base sm:text-lg font-black text-slate-950 mb-2">
                  "Reconceptualizing L2 Instruction in the GenAI Era: A GenAI-Mediated Activity Theory Framework"
                </h4>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-purple-900">
                  <User className="w-4 h-4 text-purple-700" />
                  <span>발표: 이장호 교수 (중앙대학교)</span>
                </div>
              </div>

              {/* Item: Plenary I (High Prominence) */}
              <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-blue-50 via-white to-blue-50/50 border-2 border-blue-600 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-lg bg-blue-700 text-white text-xs font-black">
                      플래너리 I (Plenary I)
                    </span>
                    <span className="font-mono font-extrabold text-blue-950 text-sm sm:text-base">
                      11:30 - 12:20 (50분)
                    </span>
                  </div>
                  <span className="text-xs font-bold text-slate-500 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-rose-500" />
                    대강당 | 좌장: 임재현 프로그램체어 (대구교대)
                  </span>
                </div>
                <h4 className="text-base sm:text-lg font-black text-slate-950 mb-2">
                  "Rethinking Language Learning with Agentic AI: From Multimodal to Intercultural and Inclusive Learning"
                </h4>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-blue-900">
                  <User className="w-4 h-4 text-blue-700" />
                  <span>발표: 이성용 교수 (University College London, UK)</span>
                </div>
              </div>

            </div>
          </div>

          {/* Part 2: Lunch, Poster Session & Exhibition (오찬 및 포스터/부스 세션) */}
          <div className="bg-amber-50/70 border-2 border-amber-300 rounded-3xl p-6 sm:p-7 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center flex-shrink-0 shadow-xs">
                <Coffee className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono font-extrabold text-amber-950 text-base">
                    12:20 - 13:30 (70분)
                  </span>
                  <span className="px-2.5 py-0.5 rounded-md bg-amber-200 text-amber-900 text-xs font-black">
                    오찬 & 네트워킹
                  </span>
                </div>
                <h4 className="text-base sm:text-lg font-black text-slate-950">
                  점심 오찬 및 포스터 세션 관람 / 후원사 에듀테크 부스 투어
                </h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  참가자 전원 도시락/오찬 제공 및 신진연구자 포스터 발표, 기업 솔루션 시연
                </p>
              </div>
            </div>
            <div className="text-xs font-bold text-amber-900 bg-white px-4 py-2 rounded-xl border border-amber-200 shadow-2xs whitespace-nowrap">
              교내 식당 & 로비 전시홀
            </div>
          </div>

          {/* Part 3: Afternoon Sessions & Plenary II (오후 세션 & 분과발표 & 총회) */}
          <div className="bg-white border-2 border-indigo-200 rounded-3xl p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-2.5 pb-4 mb-6 border-b border-slate-200">
              <span className="w-3 h-3 rounded-full bg-indigo-600 animate-ping" />
              <h3 className="text-xl font-black text-indigo-950">
                [오후 세션] 플래너리 II & 분과별 구두발표 / 총회 및 폐회식
              </h3>
            </div>

            <div className="space-y-6">

              {/* Item: Plenary II (High Prominence) */}
              <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-indigo-50 via-white to-indigo-50/50 border-2 border-indigo-600 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-lg bg-indigo-700 text-white text-xs font-black">
                      플래너리 II (Plenary II)
                    </span>
                    <span className="font-mono font-extrabold text-indigo-950 text-sm sm:text-base">
                      13:30 - 14:20 (50분)
                    </span>
                  </div>
                  <span className="text-xs font-bold text-slate-500 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-rose-500" />
                    대강당 | 좌장: 황요한 프로시딩즈체어 (전북대)
                  </span>
                </div>
                <h4 className="text-base sm:text-lg font-black text-slate-950 mb-2">
                  "정답의 시대에서 질문의 시대: AI 시대 영어 능력의 새로운 정의"
                </h4>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-indigo-900">
                  <User className="w-4 h-4 text-indigo-700" />
                  <span>발표: 권서경 교수 (서울교육대학교)</span>
                </div>
              </div>

              {/* Parallel Oral Sessions (트랙 A vs 트랙 B 나란히 2컬럼 비교) */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-white text-xs font-black">
                      오후 분과 발표
                    </span>
                    <span className="font-mono font-black text-slate-900 text-sm sm:text-base">
                      14:30 - 15:50 (80분)
                    </span>
                  </div>
                  <span className="text-xs text-slate-500 font-bold">2개 트랙 동시 진행</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Track A */}
                  <div className="p-5 rounded-2xl bg-purple-50/40 border-2 border-purple-300">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-black text-purple-900 bg-purple-100 px-2.5 py-0.5 rounded-md">
                        트랙 A | 세미나실 101
                      </span>
                      <span className="text-[11px] text-slate-500 font-semibold">구두발표 4편</span>
                    </div>
                    <h5 className="font-black text-slate-950 text-base mb-1">
                      AI 인프라 & 생성형 AI 교수법
                    </h5>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      생성형 AI 기반 영어 쓰기/말하기 지도, 자동 평가 및 교실 수업 실증 연구 발표
                    </p>
                  </div>

                  {/* Track B */}
                  <div className="p-5 rounded-2xl bg-blue-50/40 border-2 border-blue-300">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-black text-blue-900 bg-blue-100 px-2.5 py-0.5 rounded-md">
                        트랙 B | 세미나실 102
                      </span>
                      <span className="text-[11px] text-slate-500 font-semibold">구두발표 4편</span>
                    </div>
                    <h5 className="font-black text-slate-950 text-base mb-1">
                      포용적 언어학습 & 에듀테크
                    </h5>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      다문화·취약계층을 위한 맞춤형 AI 도구, 상호문화적 언어 학습 및 디지털 리터러시
                    </p>
                  </div>
                </div>
              </div>

              {/* Concluding Session */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl bg-slate-900 text-white gap-3">
                <div className="flex items-center gap-3">
                  <div className="px-3 py-1.5 rounded-xl bg-purple-700 text-white font-mono font-black text-xs sm:text-sm flex-shrink-0">
                    16:00 - 16:30
                  </div>
                  <div>
                    <div className="font-black text-base">
                      종합 토론, 우수논문상 시상식, 폐회식 및 2026 KAMALL 정기총회
                    </div>
                    <div className="text-xs text-slate-300 mt-0.5">
                      학술대회 총평, 신진연구자 우수발표 시상, 학회 정기총회 개최
                    </div>
                  </div>
                </div>
                <div className="text-xs text-slate-300 font-semibold flex items-center gap-1 flex-shrink-0">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  대강당
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
