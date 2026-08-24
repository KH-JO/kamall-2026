'use client';

import React from 'react';
import { conferenceConfig } from '@/config/conferenceConfig';
import { Users, Award, HeartHandshake, ShieldCheck } from 'lucide-react';

export default function CommitteeSection() {
  const { committee, sponsors } = conferenceConfig;

  return (
    <section id="committee" className="py-16 bg-slate-50 text-slate-900 relative border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Compact) */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 border border-purple-200 text-purple-900 text-xs font-bold mb-2">
            <Users className="w-3.5 h-3.5 text-purple-700" />
            ORGANIZING COMMITTEE & SPONSORS
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
            조직위원회 및 후원 파트너
          </h2>
        </div>

        {/* Compact Committee Card */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs max-w-5xl mx-auto mb-12">
          
          {/* Leadership Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-6 mb-6 border-b border-slate-200">
            <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-purple-50/70 border border-purple-200">
              <div className="w-10 h-10 rounded-xl bg-purple-700 text-white flex items-center justify-center font-bold flex-shrink-0 shadow-xs">
                <Award className="w-5 h-5 text-amber-300" />
              </div>
              <div>
                <div className="text-[11px] font-bold text-purple-800 uppercase tracking-wider">
                  {committee.conferenceChair.role}
                </div>
                <div className="text-base font-black text-slate-950">
                  {committee.conferenceChair.name}{' '}
                  <span className="text-xs font-semibold text-slate-500">({committee.conferenceChair.affiliation})</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-100/80 border border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-slate-800 text-white flex items-center justify-center font-bold flex-shrink-0 shadow-xs">
                <ShieldCheck className="w-5 h-5 text-cyan-300" />
              </div>
              <div>
                <div className="text-[11px] font-bold text-slate-600 uppercase tracking-wider">
                  {committee.president.role}
                </div>
                <div className="text-base font-black text-slate-950">
                  {committee.president.name}{' '}
                  <span className="text-xs font-semibold text-slate-500">({committee.president.affiliation})</span>
                </div>
              </div>
            </div>
          </div>

          {/* Compact Member Chips / Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 text-xs">
            {committee.members.map((m, idx) => (
              <div
                key={idx}
                className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between hover:border-purple-300 transition-colors"
              >
                <div className="text-[10px] font-bold text-purple-800">{m.role}</div>
                <div className="font-extrabold text-slate-900 mt-0.5">
                  {m.name} <span className="text-[11px] font-normal text-slate-500">({m.affiliation})</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sponsors Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="text-lg font-black text-slate-950 flex items-center justify-center gap-2">
              <HeartHandshake className="w-5 h-5 text-purple-700" />
              <span>후원 및 협력 기업</span>
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {sponsors.map((sp, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-2xl p-3.5 flex flex-col items-center justify-center text-center hover:border-purple-300 shadow-2xs transition-all"
              >
                <div className="text-xs font-black text-slate-900 leading-tight">
                  {sp.name}
                </div>
                <div className="text-[10px] text-purple-700 font-semibold mt-1">
                  {sp.tier}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
