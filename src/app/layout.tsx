import type { Metadata } from 'next';
import './globals.css';
import { conferenceConfig } from '@/config/conferenceConfig';

export const metadata: Metadata = {
  title: `${conferenceConfig.meta.shortTitle} 학술대회 | ${conferenceConfig.meta.title}`,
  description: `${conferenceConfig.meta.theme} - ${conferenceConfig.meta.dateRange}, ${conferenceConfig.meta.venueName}`,
  keywords: [
    'KAMALL',
    '한국멀티미디어언어교육학회',
    '멀티미디어언어교육',
    'AI 영어교육',
    '생성형 AI 언어교육',
    '2026 학술대회',
    '에듀테크',
    'LLM 교육',
  ],
  openGraph: {
    title: `${conferenceConfig.meta.shortTitle} 학술대회`,
    description: `${conferenceConfig.meta.theme} (${conferenceConfig.meta.dateRange})`,
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin=""
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
        {children}
      </body>
    </html>
  );
}
