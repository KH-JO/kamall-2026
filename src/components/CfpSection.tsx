'use client';

import React from 'react';
import { conferenceConfig } from '@/config/conferenceConfig';
import { FileText, Send, Download, CheckCircle, ArrowRight, ExternalLink } from 'lucide-react';

export default function CfpSection() {
  const { cfp } = conferenceConfig;

  const handleDownload = (format: string) => {
    alert(`[안내] KAMALL 2026 발표초록양식 (${format}) 다운로드 파일이 연결되어 있습니다.`);
  };

  return (
    <section id="cfp" className="py-20 bg-white text-slate-900 relative border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-800 text-xs font-bold mb-3">
            <FileText className="w-3.5 h-3.5 text-purple-700" />
            CALL FOR PAPERS
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            발표 신청 및 논문 투고 안내
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            생성형 AI와 멀티미디어 언어교육 분야의 혁신적인 연구 성과와 현장 실천 사례를 모집합니다.
          </p>
        </div>

        {/* Presentation Types Comparison */}
        <div className="mb-14">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-6 text-center">
            발표 분과 및 형식
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {cfp.submissionTypes.map((type, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 rounded-3xl p-6 shadow-xs flex flex-col justify-between hover:border-purple-300 hover:shadow-sm transition-all"
              >
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-purple-100 border border-purple-200 flex items-center justify-center text-purple-800 font-black text-sm mb-4">
                    0{idx + 1}
                  </div>
                  <h4 className="text-base sm:text-lg font-black text-slate-950 mb-2">
                    {type.title}
                  </h4>
                  <div className="text-xs font-bold text-purple-800 mb-3 bg-purple-100/70 px-2.5 py-1 rounded-lg inline-block">
                    {type.duration}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {type.format}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2-Column Grid: Topics vs Guidelines */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto mb-14">
          {/* Topics List */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs">
            <h3 className="text-lg sm:text-xl font-bold text-slate-950 mb-5 flex items-center gap-2">
              <span className="w-2 h-5 bg-purple-700 rounded-full inline-block"></span>
              주요 모집 분야 (Topics)
            </h3>
            <ul className="space-y-3">
              {cfp.topics.map((topic, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-purple-700 flex-shrink-0 mt-0.5" />
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Guidelines & Download Card */}
          <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs flex flex-col justify-between">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-950 mb-5 flex items-center gap-2">
                <span className="w-2 h-5 bg-blue-600 rounded-full inline-block"></span>
                투고 규정 및 일정
              </h3>
              <ul className="space-y-3 mb-6">
                {cfp.guidelines.map((guide, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed">
                    <span className="text-purple-700 font-bold">•</span>
                    <span>{guide}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Template Download Buttons */}
            <div className="pt-4 border-t border-slate-200 space-y-2.5">
              <div className="text-xs font-bold text-slate-600 mb-2">초록 작성 공식 양식 다운로드</div>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => handleDownload('HWP')}
                  className="py-2.5 px-3 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-xs font-bold text-slate-800 flex items-center justify-center gap-1.5 transition-colors shadow-2xs"
                >
                  <Download className="w-3.5 h-3.5 text-purple-700" />
                  한글 양식 (.hwp)
                </button>
                <button
                  onClick={() => handleDownload('DOCX')}
                  className="py-2.5 px-3 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-xs font-bold text-slate-800 flex items-center justify-center gap-1.5 transition-colors shadow-2xs"
                >
                  <Download className="w-3.5 h-3.5 text-purple-700" />
                  워드 양식 (.docx)
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-purple-900 via-purple-800 to-blue-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl">
          <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
            KAMALL 2026 연례학술대회 발표 신청하기
          </h3>
          <p className="text-xs sm:text-sm text-purple-100 mb-6 max-w-xl mx-auto">
            발표 제목 신청 마감: <span className="font-bold text-amber-300 font-mono">2026년 7월 31일(금)까지</span>
          </p>
          <a
            href={cfp.submitFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white hover:bg-purple-50 text-purple-900 font-black text-sm sm:text-base shadow-lg hover:scale-105 transition-all"
          >
            <Send className="w-4 h-4 text-purple-700" />
            <span>구글 폼으로 발표 신청 바로가기</span>
            <ExternalLink className="w-4 h-4 text-purple-700" />
          </a>
        </div>

      </div>
    </section>
  );
}
