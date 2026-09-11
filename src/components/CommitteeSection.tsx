'use client';

import React from 'react';
import { conferenceConfig } from '@/config/conferenceConfig';
import { Users, Award, HeartHandshake, ShieldCheck, Building2 } from 'lucide-react';

export default function CommitteeSection() {
  const { committee, sponsors, organizerInfo } = conferenceConfig;

  return (
    <section id="committee" className="py-16 bg-slate-50 text-slate-900 relative border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 border border-purple-200 text-purple-900 text-xs font-bold mb-2 shadow-2xs">
            <Users className="w-3.5 h-3.5 text-purple-700" />
            ORGANIZING COMMITTEE & SPONSORS
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
            조직위원회 및 후원 기업
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

        {/* Organizer & Sponsors Grid */}
        <div className="max-w-5xl mx-auto space-y-6">
          
          {/* Organizer Card */}
          <div className="bg-white border border-slate-200 rounded-3xl p-5 sm:p-6 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-800 flex-shrink-0">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/70 px-2.5 py-0.5 rounded-md">
                  주관 | ORGANIZER
                </span>
                <h3 className="text-lg font-black text-slate-950 mt-1">
                  {organizerInfo.name}
                </h3>
                <p className="text-xs text-slate-500">
                  {organizerInfo.nameEng}
                </p>
              </div>
            </div>
            <div className="h-12 flex items-center px-4 bg-slate-50 rounded-xl border border-slate-200">
              <img src={organizerInfo.logoUrl} alt={organizerInfo.name} className="max-h-9 w-auto object-contain" />
            </div>
          </div>

          {/* Sponsors Grid (Enlarged, prominent logos with no white box artifacts) */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs">
            <div className="text-center mb-6">
              <h3 className="text-xl font-black text-slate-950 flex items-center justify-center gap-2">
                <HeartHandshake className="w-5 h-5 text-purple-700" />
                <span>후원사 (SPONSORS)</span>
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                한국멀티미디어언어교육학회 2026 연례학술대회를 함께 후원해 주시는 파트너 기업입니다.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5">
              {sponsors.map((sp, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-slate-200 hover:border-purple-400 rounded-2xl p-3 sm:p-4 flex flex-col items-center justify-between text-center hover:shadow-md transition-all duration-200 group"
                >
                  {/* Clean, enlarged logo container */}
                  <div className="w-full h-14 sm:h-16 flex items-center justify-center mb-2 px-1">
                    {sp.logoUrl ? (
                      <img
                        src={sp.logoUrl}
                        alt={sp.name}
                        className="max-h-9 sm:max-h-11 max-w-[130px] w-auto object-contain group-hover:scale-105 transition-transform duration-200"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-800 font-bold flex items-center justify-center text-xs">
                        {sp.name.slice(0, 2)}
                      </div>
                    )}
                  </div>

                  {/* Brand name & Tier badge */}
                  <div className="w-full pt-2.5 border-t border-slate-100 flex flex-col items-center justify-center">
                    <div className="text-[11px] sm:text-xs font-black text-slate-950 leading-tight min-h-[30px] flex items-center justify-center break-keep">
                      {sp.name}
                    </div>
                    <div className="text-[10px] font-bold mt-1.5 px-2.5 py-0.5 rounded-full inline-block bg-purple-50 text-purple-900 border border-purple-200 shadow-2xs whitespace-nowrap">
                      {sp.tier}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
