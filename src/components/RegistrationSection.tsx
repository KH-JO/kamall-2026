'use client';

import React, { useState } from 'react';
import { conferenceConfig } from '@/config/conferenceConfig';
import { UserCheck, CreditCard, Copy, Check, ArrowRight, AlertCircle } from 'lucide-react';

export default function RegistrationSection() {
  const { registration } = conferenceConfig;
  const [copied, setCopied] = useState(false);

  const handleCopyAccount = () => {
    navigator.clipboard.writeText(`${registration.bankInfo.bankName} ${registration.bankInfo.accountNumber} ${registration.bankInfo.accountHolder}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const formatKrw = (amount: number) => {
    return new Intl.NumberFormat('ko-KR').format(amount) + '원';
  };

  return (
    <section id="registration" className="py-20 bg-slate-50 text-slate-900 relative border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-800 text-xs font-bold mb-3">
            <UserCheck className="w-3.5 h-3.5 text-purple-700" />
            REGISTRATION
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            참가 등록 및 등록비 안내
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            사전 등록을 통해 할인 혜택을 받으시고 원활한 학술대회 운영에 동참해 주시기 바랍니다.
          </p>
        </div>

        {/* Fee Table Card */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs max-w-5xl mx-auto mb-10 overflow-x-auto">
          <h3 className="text-lg font-black text-slate-950 mb-4 flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-purple-700" />
            <span>등록 구분별 참가비</span>
          </h3>

          <table className="w-full text-left border-collapse min-w-[550px]">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-xs font-bold text-slate-600 uppercase tracking-wider">
                <th className="py-3.5 px-4 rounded-l-xl">구분 (Category)</th>
                <th className="py-3.5 px-4 text-purple-800">사전등록 (Early-Bird)</th>
                <th className="py-3.5 px-4">일반등록 (Regular)</th>
                <th className="py-3.5 px-4">현장등록 (On-site)</th>
                <th className="py-3.5 px-4 rounded-r-xl">비고</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
              {registration.feeTable.map((row, idx) => (
                <tr key={idx} className="hover:bg-purple-50/30 transition-colors">
                  <td className="py-4 px-4 font-bold text-slate-900">{row.category}</td>
                  <td className="py-4 px-4 font-extrabold text-purple-800 font-mono">
                    {formatKrw(row.earlyBird)}
                  </td>
                  <td className="py-4 px-4 font-semibold text-slate-700 font-mono">
                    {formatKrw(row.regular)}
                  </td>
                  <td className="py-4 px-4 font-semibold text-slate-500 font-mono">
                    {formatKrw(row.onSite)}
                  </td>
                  <td className="py-4 px-4 text-xs text-slate-500">{row.note || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <span>* 등록비에는 프로시딩(논문집), 기념품, 오찬 및 다과가 포함되어 있습니다.</span>
            <span className="text-purple-800 font-bold">사전등록 마감: 2026년 9월 25일</span>
          </div>
        </div>

        {/* Bank Transfer Box + Non-Refundable Notice */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs">
            <h4 className="text-base sm:text-lg font-bold text-slate-950 mb-3 flex items-center gap-2">
              <span className="w-2 h-4 bg-purple-700 rounded-full inline-block"></span>
              등록비 입금 계좌 안내
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <div className="text-xs text-slate-500 mb-1">입금 계좌번호</div>
                <div className="text-base sm:text-lg font-black text-slate-900 font-mono tracking-tight flex items-center justify-between">
                  <span>{registration.bankInfo.bankName} {registration.bankInfo.accountNumber}</span>
                  <button
                    onClick={handleCopyAccount}
                    className="p-1.5 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-950 transition-colors shadow-2xs"
                    title="계좌번호 복사"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                <div className="text-xs text-purple-800 font-bold mt-1">
                  예금주: {registration.bankInfo.accountHolder}
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-slate-600">
                <p className="font-semibold text-slate-800">• {registration.bankInfo.depositGuide}</p>
                <div className="flex items-start gap-2 text-amber-800 bg-amber-50 border border-amber-200 p-3 rounded-xl">
                  <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <p className="text-xs font-semibold">
                    {registration.policyNotice}
                  </p>
                </div>
              </div>
            </div>

            {copied && (
              <div className="mt-3 text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 p-2 rounded-lg text-center">
                계좌 정보가 클립보드에 복사되었습니다.
              </div>
            )}
          </div>
        </div>

        {/* Primary Register CTA Button */}
        <div className="text-center">
          <a
            href={registration.registerFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-9 py-4 rounded-2xl bg-gradient-to-r from-purple-700 to-blue-600 hover:from-purple-800 hover:to-blue-700 text-white font-black text-base sm:text-lg shadow-md shadow-purple-700/20 hover:scale-105 active:scale-95 transition-all"
          >
            <UserCheck className="w-5 h-5" />
            <span>온라인 사전등록 신청서 작성하기</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

      </div>
    </section>
  );
}
