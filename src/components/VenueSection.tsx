'use client';

import React from 'react';
import { conferenceConfig } from '@/config/conferenceConfig';
import { MapPin, Navigation, Train, Bus, Car, ExternalLink, Sparkles } from 'lucide-react';

export default function VenueSection() {
  const { venue } = conferenceConfig;

  return (
    <section id="venue" className="py-20 bg-white text-slate-900 relative border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-800 text-xs font-bold mb-3">
            <MapPin className="w-3.5 h-3.5 text-purple-700" />
            VENUE & TRANSPORTATION
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            행사장 및 오시는 길
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            건국대학교 글로컬캠퍼스(충주)는 판교역에서 KTX로 1시간 거리에 위치해 있어 수도권 및 전국에서 편리하게 오실 수 있습니다.
          </p>
        </div>

        {/* Venue Information Card */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs max-w-5xl mx-auto mb-12">
          
          {/* Top Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-200">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-purple-900 bg-purple-100 px-3 py-1 rounded-lg border border-purple-200 mb-2">
                <Sparkles className="w-3.5 h-3.5 text-purple-700" />
                <span>{venue.locationHighlight}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-950">
                {venue.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 flex items-center gap-1.5">
                <Navigation className="w-3.5 h-3.5 text-rose-500 flex-shrink-0" />
                <span>{venue.address}</span>
              </p>
            </div>

            {/* Map Link Buttons */}
            <div className="flex items-center gap-3">
              <a
                href={`https://map.kakao.com/?q=${encodeURIComponent(venue.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs sm:text-sm font-bold flex items-center gap-1.5 shadow-2xs transition-colors"
              >
                <span>카카오맵 길찾기</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href={`https://map.naver.com/v5/search/${encodeURIComponent(venue.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold flex items-center gap-1.5 shadow-2xs transition-colors"
              >
                <span>네이버지도 길찾기</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Embedded Google / Interactive Campus Map Frame */}
          <div className="my-6 w-full h-72 sm:h-96 rounded-2xl overflow-hidden border border-slate-300 relative shadow-xs">
            <iframe
              title="건국대학교 글로컬캠퍼스 지도"
              src="https://maps.google.com/maps?q=Konkuk%20University%20Glocal%20Campus%20Chungju&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
            />
            <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-slate-200 shadow-sm text-xs font-bold text-slate-800 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-rose-600" />
              <span>건국대학교 GLOCAL캠퍼스 (충청북도 충주시 충원대로 268)</span>
            </div>
          </div>

          {/* Transit Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
            
            {/* KTX Info */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-2xs">
              <div className="flex items-center gap-2 mb-3 text-purple-800 font-bold text-sm">
                <Train className="w-4 h-4 text-purple-700" />
                고속열차 (KTX-이음)
              </div>
              <ul className="space-y-2 text-xs text-slate-700 leading-relaxed">
                {venue.ktxInfo.map((k, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-purple-700 font-bold">•</span>
                    <span>{k}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Express Bus */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-2xs">
              <div className="flex items-center gap-2 mb-3 text-blue-800 font-bold text-sm">
                <Bus className="w-4 h-4 text-blue-700" />
                시외 / 고속버스
              </div>
              <ul className="space-y-2 text-xs text-slate-700 leading-relaxed">
                {venue.expressBus.map((b, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-blue-700 font-bold">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Car & Free Parking */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-2xs">
              <div className="flex items-center gap-2 mb-3 text-emerald-800 font-bold text-sm">
                <Car className="w-4 h-4 text-emerald-700" />
                자가용 & 무료 주차
              </div>
              <ul className="space-y-2 text-xs text-slate-700 leading-relaxed">
                {venue.carAndParking.map((p, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-700 font-bold">•</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
