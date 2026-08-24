'use client';

import React from 'react';
import { conferenceConfig } from '@/config/conferenceConfig';
import { Bot, Network, Sparkles, Quote, Award } from 'lucide-react';

export default function OverviewSection() {
  const { welcomeMessage, meta } = conferenceConfig;

  const coreThemes = [
    {
      icon: Network,
      title: "실용적 AI 인프라 & 포용적 학습",
      description: "생성형 AI가 모든 학습자에게 공평하고 실질적인 교육적 혜택으로 이어지도록 지원하는 학교·교실 단위의 실용적 AI 인프라 구축 방안을 모색합니다.",
      color: "from-purple-50 to-blue-50/50",
      border: "border-purple-200/80",
      iconBg: "bg-purple-100 text-purple-700",
    },
    {
      icon: Bot,
      title: "활동이론 & 에이전틱 AI 교수법",
      description: "인간 교사와 자율형 AI 에이전트의 상호작용을 활동이론(Activity Theory) 관점에서 고찰하고, 다문화·멀티모달 언어 습득 모델을 탐구합니다.",
      color: "from-blue-50 to-indigo-50/50",
      border: "border-blue-200/80",
      iconBg: "bg-blue-100 text-blue-700",
    },
    {
      icon: Sparkles,
      title: "질문의 시대: 새로운 영어 역량",
      description: "단순 정답 암기에서 벗어나, 프롬프트 엔지니어링과 비판적 사고를 바탕으로 AI와 협업하여 의미 있는 질문을 구성하는 미래형 언어 역량을 정의합니다.",
      color: "from-amber-50/70 to-orange-50/50",
      border: "border-amber-200/80",
      iconBg: "bg-amber-100 text-amber-800",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white text-slate-900 relative overflow-hidden border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-800 text-xs font-bold mb-3">
            <Award className="w-3.5 h-3.5 text-purple-700" />
            ABOUT THE CONFERENCE
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            학술대회 취지 및 핵심 의제
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            생성형 AI 시대, 모든 학습자를 위한 포용적 언어 교육과 실용적 인프라의 미래를 함께 만들어갑니다.
          </p>
        </div>

        {/* 3 Core Theme Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {coreThemes.map((theme, idx) => {
            const Icon = theme.icon;
            return (
              <div
                key={idx}
                className={`p-6 sm:p-8 rounded-3xl bg-gradient-to-b ${theme.color} border ${theme.border} hover:shadow-md transition-all duration-300 flex flex-col justify-between group`}
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl ${theme.iconBg} flex items-center justify-center mb-5 shadow-xs group-hover:scale-105 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-black text-slate-950 mb-3">
                    {theme.title}
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {theme.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* President Welcome Message Card (With President Photo) */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm relative">
          <div className="absolute top-6 right-6 text-slate-300 opacity-30 pointer-events-none hidden sm:block">
            <Quote className="w-24 h-24" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* President Photo & Profile */}
            <div className="lg:col-span-4 flex flex-col items-center text-center lg:border-r border-slate-200 lg:pr-8">
              <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-3xl overflow-hidden border-3 border-purple-600 shadow-lg p-1 bg-white mb-4 flex-shrink-0">
                <img
                  src={welcomeMessage.imageUrl}
                  alt={welcomeMessage.presidentName}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <h4 className="text-xl font-black text-slate-950">{welcomeMessage.presidentName}</h4>
              <div className="text-sm font-bold text-purple-800 mt-1">{welcomeMessage.presidentTitle}</div>
              <div className="text-xs text-slate-600 mt-0.5">{welcomeMessage.affiliation}</div>
              <div className="mt-3 px-3.5 py-1 rounded-full bg-purple-100/70 border border-purple-200 text-[11px] font-bold text-purple-900">
                {meta.host}
              </div>
            </div>

            {/* Welcome Greeting Body (Autumn Greeting) */}
            <div className="lg:col-span-8 space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
              <div className="text-xs font-bold text-purple-700 tracking-wider uppercase mb-1">
                PRESIDENT'S WELCOME MESSAGE
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-950 mb-3">
                “{meta.themeKo}”
              </h3>
              {welcomeMessage.paragraphs.map((p, idx) => (
                <p key={idx} className="text-slate-700 leading-relaxed">
                  {p}
                </p>
              ))}
              
              <div className="pt-4 mt-4 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 font-semibold gap-2">
                <div className="text-slate-800 font-bold">한국멀티미디어언어교육학회장 {welcomeMessage.presidentName}</div>
                <div className="text-purple-800 font-bold">2026년 10월 17일(토) @ 건국대학교 글로컬캠퍼스</div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
