# 2026 KAMALL 학술대회 공식 웹사이트

> **한국멀티미디어언어교육학회 (Korea Association of Multimedia-Assisted Language Learning)**  
> 2026년 정기 학술대회 공식 웹사이트

---

## 📌 주요 특징

- **중앙 집중형 데이터 관리**: `src/config/conferenceConfig.ts` 파일 하나로 학술대회 기본 정보, 기조연사, 세션 시간표, 등록비 및 계좌 정보, 오시는 길 등을 간편하게 수정할 수 있습니다.
- **모던 UI/UX**: 에듀테크/AI 감성의 블루-네이비 테마, 다이내믹 D-Day 카운트다운 타이머, 인터랙티브 탭 기반 일정표 지원.
- **반응형 디자인**: 모바일, 태블릿, 데스크톱 모든 디바이스에 최적화된 반응형 레이아웃.

---

## 🛠 실행 방법

### 1. 의존성 설치
```bash
npm install
```

### 2. 로컬 개발 서버 실행
```bash
npm run dev
```
브라우저에서 `http://localhost:3000` 접속

### 3. 프로덕션 빌드
```bash
npm run build
npm run start
```

---

## ⚙️ 학술대회 정보 수정 가이드

모든 학술대회 콘텐츠는 [`src/config/conferenceConfig.ts`](src/config/conferenceConfig.ts)에서 수정하실 수 있습니다:

- `meta`: 학술대회 타이틀, 대주제, 개최 일자, 장소명, 주최/주관 기관
- `importantDates`: 초록 접수 마감, 사전등록 마감 등 D-Day 타임라인
- `keynoteSpeakers`: 기조강연자 성명, 소속, 강연 주제, 초록 및 약력
- `programSchedule`: 일자별(Day 1, Day 2), 트랙별(트랙 A, B, 메인홀) 세션 타임테이블
- `cfp`: 논문/초록 모집 분야(Topics), 발표 유형, 투고 규정, 접수 링크
- `registration`: 등록 구분별(회원, 학생, 비회원) 참가비 테이블, 입금 계좌번호, 환불 규정
- `venue`: 행사장 주소, 대중교통(지하철, 버스), 주차 안내, 인근 숙박 정보
- `committee`: 학회장, 부회장단, 분과위원장 명단 및 후원/스폰서사 목록
- `contact`: 학회 사무국 이메일, 홈페이지, 문의처
