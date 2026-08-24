'use client';

import React from 'react';
import { conferenceConfig } from '@/config/conferenceConfig';
import { Mic, Building, Sparkles, BookOpen, User } from 'lucide-react';

export default function KeynoteSection() {
  const { keynoteSpeakers } = conferenceConfig;

  return (
    <section id="keynotes" className="py-20 bg-slate-50 text-slate-900 relative border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-purple-100 border border-purple-200 text-purple-900 text-xs font-bold mb-3 shadow-2xs">
            <Mic className="w-3.5 h-3.5 text-purple-700" />
            KEYNOTE & PLENARY SPEAKERS
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            기조연설 및 플래너리 초청 연사
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            생성형 AI와 에이전틱 AI, 미래 언어교육 분야의 국내외 최고 석학 세 분의 강연을 소개합니다.
          </p>
        </div>

        {/* Speakers Cards (Balanced, Equal Prominence for All 3) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {keynoteSpeakers.map((speaker, idx) => {
            const isKeynote = speaker.speakerType === 'keynote';
            const themeBadgeColor = isKeynote 
              ? 'bg-purple-700 text-white' 
              : idx === 1 
                ? 'bg-blue-700 text-white' 
                : 'bg-indigo-700 text-white';

            return (
              <div
                key={speaker.id}
                className="bg-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 border-2 border-purple-200 hover:border-purple-600 shadow-sm hover:shadow-lg hover:shadow-purple-900/5 group"
              >
                <div>
                  {/* Speaker Photo & Header Badge */}
                  <div className="flex flex-col items-center text-center pb-6 border-b border-slate-100">
                    <div className="relative mb-4">
                      <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl overflow-hidden shadow-md p-1 bg-white border-2 border-purple-300 group-hover:border-purple-600 transition-colors">
                        <img
                          src={speaker.imageUrl}
                          alt={speaker.name}
                          className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <span className={`absolute -bottom-2.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-[11px] font-black uppercase tracking-wider shadow-xs whitespace-nowrap ${themeBadgeColor}`}>
                        {speaker.role}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black text-slate-950 mt-2">
                      {speaker.name}
                    </h3>
                    <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-slate-600 mt-1">
                      <Building className="w-3.5 h-3.5 text-purple-700" />
                      <span>{speaker.affiliation}</span>
                    </div>
                  </div>

                  {/* Lecture Topic Box */}
                  <div className="my-5 bg-purple-50/50 border border-purple-100 rounded-2xl p-4 shadow-2xs">
                    <div className="text-[10px] font-black text-purple-800 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-purple-700" />
                      강연 주제
                    </div>
                    <div className="text-sm sm:text-base font-extrabold text-slate-950 leading-snug">
                      "{speaker.title}"
                    </div>
                  </div>

                  {/* Abstract Section */}
                  <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                    <div>
                      <span className="font-black text-purple-950 block mb-1 text-xs uppercase tracking-wider flex items-center gap-1">
                        <BookOpen className="w-3.5 h-3.5 text-purple-700" />
                        강연 요약 (Abstract)
                      </span>
                      <p className="leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-200/80 text-xs text-slate-700">
                        {speaker.abstract}
                      </p>
                    </div>

                    {/* Bio Section */}
                    <div>
                      <span className="font-black text-slate-800 block mb-1 text-xs uppercase tracking-wider flex items-center gap-1">
                        <User className="w-3.5 h-3.5 text-slate-500" />
                        연사 약력 (Biography)
                      </span>
                      <p className="leading-relaxed text-xs text-slate-600 bg-slate-50/50 p-3 rounded-xl border border-slate-100">
                        {speaker.bio}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 text-center">
                  <span className="text-[11px] font-bold text-purple-900 bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
                    {speaker.role.includes('Keynote') ? '대강당 기조연설 세션' : '대강당 플래너리 세션'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
