export interface KeynoteSpeaker {
  id: string;
  name: string;
  affiliation: string;
  role: string;
  title: string;
  abstract: string;
  bio: string;
  speakerType: 'keynote' | 'plenary';
  imageUrl: string;
}

export interface ImportantDate {
  id: string;
  title: string;
  dateStr: string;
  isoDate: string;
  status: 'upcoming' | 'open' | 'closed';
  description: string;
}

export interface ProgramSession {
  time: string;
  title: string;
  location: string;
  type: 'keynote' | 'plenary' | 'oral' | 'poster' | 'workshop' | 'panel' | 'ceremony' | 'break';
  speakers?: string;
  chair?: string;
  description?: string;
}

export interface ProgramTrack {
  trackName: string;
  sessions: ProgramSession[];
}

export interface ProgramDay {
  day: number;
  date: string;
  dayLabel: string;
  tracks: ProgramTrack[];
}

export interface FeeItem {
  category: string;
  earlyBird: number;
  regular: number;
  onSite: number;
  note?: string;
}

export interface CommitteeMember {
  role: string;
  roleEng: string;
  name: string;
  affiliation: string;
  duties?: string;
}

export const conferenceConfig = {
  // 기본 학술대회 정보
  meta: {
    title: "2026 한국멀티미디어언어교육학회(KAMALL) 연례학술대회",
    shortTitle: "KAMALL 2026",
    englishTitle: "2026 KAMALL Annual International Conference",
    theme: "AI for All: Establishing Practical AI Infrastructure for Inclusive Language Learning",
    themeKo: "모두를 위한 인공지능: 포용적 언어 학습을 위한 실용적 AI 인프라 구축",
    themeSub: "Establishing Practical AI Infrastructure for Inclusive Language Learning",
    dateRange: "2026년 10월 17일(토) 10:00 ~ 16:30",
    startDateIso: "2026-10-17T10:00:00+09:00",
    venueName: "건국대학교 글로컬캠퍼스 (충청북도 충주시)",
    venueShort: "건국대학교 글로컬캠퍼스",
    venueAddress: "충청북도 충주시 충원대로 268 건국대학교 GLOCAL(글로컬)캠퍼스",
    venueNotice: "판교역에서 KTX-이음 탑승 시 충주역까지 약 1시간 소요 (교통 편리)",
    host: "한국멀티미디어언어교육학회 (KAMALL)",
    coHosts: ["건국대학교 글로컬캠퍼스"],
    logoUrl: "/images/kamall-logo.png",
    posterUrl: "/images/kamall-2026-poster.jpg",
  },

  // 퀵 통계/하이라이트
  stats: [
    { label: "예상 참가인원", value: "300+ 명" },
    { label: "기조 / 플래너리", value: "3개 세션" },
    { label: "구두 / 포스터 발표", value: "40+ 편" },
    { label: "판교-충주 소요시간", value: "KTX 1시간" },
  ],

  // 10월 가을 학회장 환영사 (신동광 회장님)
  welcomeMessage: {
    presidentName: "신동광 교수",
    presidentTitle: "한국멀티미디어언어교육학회(KAMALL) 회장",
    affiliation: "광주교육대학교 영어교육과",
    imageUrl: "/images/president-shindongkwang.png",
    paragraphs: [
      "존경하는 한국멀티미디어언어교육학회(KAMALL) 회원 여러분, 그리고 국내외 언어교육 및 에듀테크 연구자 여러분, 안녕하십니까.",
      "청명한 가을 하늘과 오곡백과가 무르익는 결실의 계절 10월을 맞이하여, 회원 여러분의 가정과 연구실에 늘 건강과 행복이 가득하기를 기원합니다. 🍁🍂",
      "올해 2026년 KAMALL 연례학술대회는 'AI for All: Establishing Practical AI Infrastructure for Inclusive Language Learning (모두를 위한 인공지능: 포용적 언어 학습을 위한 실용적 AI 인프라 구축)'이라는 시의적절하고 뜻깊은 대주제로 10월 17일(토) 건국대학교 글로컬캠퍼스에서 개최됩니다.",
      "생성형 AI와 초거대 언어모델의 급속한 확산은 언어 교육의 교수법, 학습자 상호작용, 평가 체계 전반에 패러다임 전환을 이끌고 있습니다. 그러나 이러한 기술적 혁신이 소수의 특권이 아닌 모든 학습자에게 공평하고 실질적인 교육적 혜택으로 전달되기 위해서는 학교와 교육 현장에 적합한 '실용적 AI 인프라'의 확립이 무엇보다 필수적입니다.",
      "이번 학술대회는 국내외 최고의 연구자들과 교육 전문가, 에듀테크 기업이 함께 모여 AI 기반 언어 교육의 포용성과 실천적 대안을 심도 있게 모색하는 지혜의 장이 될 것입니다. 가을의 정취가 아름다운 건국대 글로컬캠퍼스에서 회원 여러분을 반갑게 뵙기를 고대합니다.",
    ],
  },

  // 중요 일정 (D-Day 타임라인)
  importantDates: [
    {
      id: "cfp-open",
      title: "발표 제목 신청 마감",
      dateStr: "2026년 7월 31일 (금)",
      isoDate: "2026-07-31",
      status: "open",
      description: "구글 폼을 통한 발표 제목 및 연구 개요 신청 마감",
    },
    {
      id: "cfp-deadline",
      title: "초록 접수 마감",
      dateStr: "2026년 8월 15일 (금)",
      isoDate: "2026-08-15",
      status: "upcoming",
      description: "국/영문 공식 발표 초록 파일 온라인 제출 마감",
    },
    {
      id: "notification",
      title: "초록 채택 심사 결과 발표",
      dateStr: "2026년 8월 30일 (일)",
      isoDate: "2026-08-30",
      status: "upcoming",
      description: "개별 이메일 안내 및 학회 홈페이지 공지",
    },
    {
      id: "early-reg",
      title: "사전등록(Early-Bird) 마감",
      dateStr: "2026년 9월 25일 (금) 18:00",
      isoDate: "2026-09-25",
      status: "upcoming",
      description: "사전등록 할인 마감",
    },
    {
      id: "conference-day",
      title: "2026 KAMALL 학술대회 개최",
      dateStr: "2026년 10월 17일(토) 10:00 ~ 16:30",
      isoDate: "2026-10-17",
      status: "upcoming",
      description: "건국대학교 글로컬캠퍼스 본 행사 개최",
    },
  ] as ImportantDate[],

  // 기조연설 및 플래너리 연사 (사진 포함)
  keynoteSpeakers: [
    {
      id: "spk-keynote",
      name: "이장호 교수",
      affiliation: "중앙대학교 (Chung-Ang University)",
      role: "기조연설 | Keynote Speaker",
      speakerType: "keynote",
      imageUrl: "/images/speaker-lee-jangho.jpg",
      title: "Reconceptualizing L2 Instruction in the GenAI Era: A GenAI-Mediated Activity Theory Framework",
      abstract: "생성형 AI의 급부상에 따라 제2언어(L2) 교수학습의 이론적 틀을 활동이론(Activity Theory) 관점에서 재개념화하고, 인간 교사와 AI가 상호보완적으로 공존하는 새로운 언어 교수·학습 모델과 실천적 교육 프레임워크를 제안합니다.",
      bio: "중앙대학교 영어교육과 교수로서 생성형 AI, 코퍼스 언어학 및 테크놀로지 매개 언어교육(MALL) 분야에서 다수의 국내외 최우수 논문을 발표하며 학계를 선도하고 있습니다.",
    },
    {
      id: "spk-plenary-1",
      name: "이성용 교수",
      affiliation: "University College London (UCL), UK",
      role: "플래너리 | Plenary Speaker",
      speakerType: "plenary",
      imageUrl: "/images/speaker-lee-seongyong.jpg",
      title: "Rethinking Language Learning with Agentic AI: From Multimodal to Intercultural and Inclusive Learning",
      abstract: "스스로 판단하고 상호작용하는 에이전틱 AI(Agentic AI) 기술을 바탕으로, 멀티모달 학습 환경에서 상호문화적(Intercultural) 역량과 모든 학습자를 포용하는 포용적 언어 교육의 새로운 지평을 탐색합니다.",
      bio: "영국 University College London (UCL) 교육연구소(IOE) 교수로 재직 중이며, 디지털 미디어, 인터랙티브 테크놀로지 및 글로벌 다문화 언어 교육 연구 분야의 세계적 석학입니다.",
    },
    {
      id: "spk-plenary-2",
      name: "권서경 교수",
      affiliation: "서울교육대학교 (Seoul National Univ. of Education)",
      role: "플래너리 | Plenary Speaker",
      speakerType: "plenary",
      imageUrl: "/images/speaker-kwon-seokyeong.jpg",
      title: "정답의 시대에서 질문의 시대: AI 시대 영어 능력의 새로운 정의",
      abstract: "단순 지식 암기와 정답 도출 중심의 과거 교육에서 벗어나, 정교한 프롬프트 엔지니어링과 비판적 사고를 통해 좋은 질문을 생성하고 AI와 협업하는 '질문의 시대'에서 요구되는 미래형 영어 능력을 새롭게 정의합니다.",
      bio: "서울교육대학교 영어교육과 교수로서 초·중등 영어교육 혁신, AI 융합 교수학습 설계 및 미래형 언어 평가 체계 개발을 선도하고 있습니다.",
    },
  ] as KeynoteSpeaker[],

  // 프로그램 타임테이블 (10월 17일 토요일 10:00 ~ 16:30)
  programSchedule: [
    {
      day: 1,
      date: "2026년 10월 17일 (토)",
      dayLabel: "2026 KAMALL 연례학술대회 (본대회)",
      tracks: [
        {
          trackName: "메인홀: 개회식 & 기조연설 / 플래너리 세션",
          sessions: [
            { time: "09:30 - 10:00", title: "현장 등록 및 자료 배포 / 네트워킹", location: "행사장 로비", type: "ceremony" },
            { time: "10:00 - 10:20", title: "개회식 및 환영사 (신동광 KAMALL 회장 / 건국대 축사)", location: "대강당", type: "ceremony" },
            { 
              time: "10:20 - 11:20", 
              title: "기조연설: Reconceptualizing L2 Instruction in the GenAI Era", 
              location: "대강당", 
              type: "keynote", 
              speakers: "이장호 교수 (중앙대)",
              chair: "이혜진 학술대회위원장 (원광대)" 
            },
            { 
              time: "11:30 - 12:20", 
              title: "플래너리 I: Rethinking Language Learning with Agentic AI", 
              location: "대강당", 
              type: "plenary", 
              speakers: "이성용 교수 (University College London)",
              chair: "임재현 프로그램체어 (대구교대)" 
            },
            { time: "12:20 - 13:30", title: "점심 오찬 및 포스터 세션 관람 / 후원사 부스 전시 투어", location: "교내 식당 & 전시홀", type: "break" },
            { 
              time: "13:30 - 14:20", 
              title: "플래너리 II: 정답의 시대에서 질문의 시대: AI 시대 영어 능력의 새로운 정의", 
              location: "대강당", 
              type: "plenary", 
              speakers: "권서경 교수 (서울교대)",
              chair: "황요한 프로시딩즈체어 (전북대)" 
            },
          ]
        },
        {
          trackName: "오후 분과 세션: 트랙 A (AI 인프라 & 교수법)",
          sessions: [
            { time: "14:30 - 15:50", title: "구두발표 A: 생성형 AI 기반 교실 수업 설계 및 학습자 평가 실증 연구 (4편)", location: "세미나실 101", type: "oral", chair: "분과 좌장" },
            { time: "16:00 - 16:30", title: "종합 토론 및 폐회식 / 우수논문상 시상 / KAMALL 정기총회", location: "대강당", type: "ceremony" },
          ]
        },
        {
          trackName: "오후 분과 세션: 트랙 B (포용적 언어학습 & 에듀테크)",
          sessions: [
            { time: "14:30 - 15:50", title: "구두발표 B: 다문화·취약계층을 위한 포용적 AI 언어 학습 도구 개발 및 적용 (4편)", location: "세미나실 102", type: "oral", chair: "분과 좌장" },
            { time: "16:00 - 16:30", title: "종합 토론 및 폐회식 / KAMALL 정기총회", location: "대강당", type: "ceremony" },
          ]
        }
      ]
    }
  ] as ProgramDay[],

  // 논문 투고 (Call for Papers)
  cfp: {
    theme: "AI for All: Establishing Practical AI Infrastructure for Inclusive Language Learning",
    topics: [
      "모두를 위한 포용적 인공지능(Inclusive AI) 기반 언어 교수·학습 모델",
      "실용적 AI 교육 인프라 구축 및 교실 현장 적용 사례",
      "생성형 AI(LLM) 및 에이전틱 AI(Agentic AI)를 활용한 개별 맞춤형 언어 교육",
      "멀티모달 및 상호문화적(Intercultural) 언어 학습 환경 설계",
      "질문 중심 학습과 AI 시대의 새로운 언어 평가 및 리터러시",
      "디지털 격차 해소를 위한 취약계층 및 다문화 언어 학습자 지원 AI 솔루션",
      "MALL(멀티미디어언어교육)과 AI 윤리, 데이터 프라이버시 및 교사 역량 개발",
    ],
    submissionTypes: [
      {
        title: "구두 발표 (Oral Presentation)",
        duration: "발표 15분 + 질의응답 5분",
        format: "완성 연구 또는 심층 사례 연구 (국문 또는 영문 초록 500자 내외)",
      },
      {
        title: "포스터 발표 (Poster Presentation)",
        duration: "점심 및 지정 포스터 세션",
        format: "진행 중인 연구, 시스템 데모, 현장 실천 사례 (A0 규격 포스터)",
      },
      {
        title: "에듀테크 워크숍 (Workshop)",
        duration: "에듀테크 실습형 세션",
        format: "교실 수업 적용 가능한 실습 도구 및 프롬프트 엔지니어링 활용 실습",
      },
    ],
    guidelines: [
      "발표자는 KAMALL 정회원이어야 합니다 (비회원은 접수 전/후 회원가입 가능).",
      "발표 제목 신청 마감: 2026년 7월 31일(금)까지 구글 폼으로 접수",
      "초록 접수 마감: 2026년 8월 15일(금)까지 공식 양식 파일 작성 후 제출",
      "학술위원회 심사를 거쳐 채택된 논문은 2026 KAMALL 학술대회 논문집에 수록됩니다.",
      "우수 발표 논문은 본 학회 등재학술지인 『멀티미디어 언어교육』 투고 시 신속 심사 혜택이 주어집니다.",
    ],
    templateHwpUrl: "#download-hwp",
    templateDocxUrl: "#download-docx",
    submitFormUrl: "https://forms.gle/Je4w9vQ2iZ2hkykU6",
  },

  // 사전 등록 안내 (환불 삭제)
  registration: {
    bankInfo: {
      bankName: "국민은행",
      accountNumber: "123-45-678901",
      accountHolder: "한국멀티미디어언어교육학회",
      depositGuide: "입금자명은 반드시 '등록자성명+소속' (예: 홍길동건국대)으로 기재해 주시기 바랍니다.",
    },
    feeTable: [
      { category: "일반 회원 (전임교원/연구원)", earlyBird: 50000, regular: 60000, onSite: 70000, note: "논문집, 기념품, 오찬 및 다과 제공" },
      { category: "학생 회원 (대학원생/학부생)", earlyBird: 25000, regular: 30000, onSite: 35000, note: "학생증 확인 필요" },
      { category: "비회원 (일반 참가자)", earlyBird: 70000, regular: 80000, onSite: 90000, note: "학술대회 준회원 자격 부여" },
    ] as FeeItem[],
    policyNotice: "※ 학술대회 준비 및 프로시딩 인쇄 관계로 등록비 납부 후에는 환불이 불가하오니 신중한 등록을 부탁드립니다.",
    registerFormUrl: "https://forms.gle/Je4w9vQ2iZ2hkykU6",
  },

  // 행사장 및 오시는 길
  venue: {
    name: "건국대학교 글로컬(GLOCAL)캠퍼스",
    address: "충청북도 충주시 충원대로 268 건국대학교 글로컬캠퍼스",
    locationHighlight: "판교역에서 KTX-이음으로 충주역까지 약 1시간 소요!",
    mapEmbedQuery: "건국대학교+글로컬캠퍼스",
    ktxInfo: [
      "KTX-이음 (판교역 ↔ 충주역): 판교역에서 충주역까지 약 60분 소요 (직통 고속열차)",
      "KTX 충주역 하차 후 건국대 글로컬캠퍼스까지 택시로 약 10~15분 (약 7,000원 내외)",
      "학술대회 당일 충주역 ↔ 건국대 글로컬캠퍼스 간 무료 셔틀버스 운행 예정",
    ],
    expressBus: [
      "서울 센트럴시티(강남) / 동서울터미널 → 충주공용버스터미널 (약 1시간 30분 소요)",
      "충주시외버스터미널 앞에서 시내버스(100번대, 300번대) 탑승 또는 택시 이용 (약 10분)",
    ],
    carAndParking: [
      "네비게이션 '건국대학교 글로컬캠퍼스' 검색",
      "학술대회 참가 차량은 교내 전 구역 무료 주차가 가능하도록 지원됩니다.",
    ],
  },

  // 학술대회 조직위원회 (업무분장표 실제 데이터)
  committee: {
    conferenceChair: {
      role: "학술대회 위원장 (Conference Chair)",
      name: "이혜진 교수",
      affiliation: "원광대학교",
    },
    president: {
      role: "학회장 (President)",
      name: "신동광 교수",
      affiliation: "광주교육대학교",
    },
    members: [
      { role: "프로그램 체어", roleEng: "Program Chair", name: "임재현", affiliation: "대구교대", duties: "초록/발표자 명단 확인, 일정표 작성, 발표 세션 구성, 좌장 섭외" },
      { role: "프로시딩즈 체어", roleEng: "Proceedings Chair", name: "황요한", affiliation: "전북대", duties: "초록 취합 및 편집, 프로시딩즈 최종본 제작, PDF/QR코드 제작" },
      { role: "사이트 체어", roleEng: "Site Chair", name: "이효신", affiliation: "건국대 글로컬", duties: "장소·강의실 확보 및 배치, 발표장 기자재 확인, 당일 현장 운영 총괄" },
      { role: "국제협력", roleEng: "International Affairs", name: "강주훈", affiliation: "한국교통대", duties: "해외 발표자·참가자 연락 및 영문 안내, 초청연사 일정 관리" },
      { role: "총무", roleEng: "General Affairs", name: "임관혁", affiliation: "건국대 글로컬", duties: "전체 준비 일정 관리, 사전등록 명단 관리, 명찰 제작, 등록데스크 운영" },
      { role: "재무", roleEng: "Financial Affairs", name: "안유영", affiliation: "전남대", duties: "등록비 책정 및 입금자 관리, 수입·지출 관리 및 정산" },
      { role: "다과", roleEng: "Refreshment", name: "김미숙", affiliation: "경희대", duties: "다과·음료·중식 구성 및 업체 선정, 현장 다과 배치 및 관리" },
      { role: "후원", roleEng: "Fundraising", name: "백지운", affiliation: "중부대", duties: "후원기관·출판사 섭외 및 후원 요청, 부스 배치 협의, 로고 취합" },
      { role: "홈페이지 관리", roleEng: "Website Management", name: "조규희", affiliation: "경인교대", duties: "학술대회 공식 웹사이트 제작 및 최신 정보 실시간 업데이트" },
      { role: "홍보", roleEng: "Public Relations", name: "권은비", affiliation: "한양여대", duties: "홍보문 작성 및 회원·자매학회 홍보, 사전등록 독려" },
      { role: "기획·조정", roleEng: "Planning & Coordination", name: "이송은 · 이가영", affiliation: "동의대 · 숭실대", duties: "사회·좌장·토론자 섭외 및 연락, 초록 사전 전달, 업무 일정 조율" },
    ] as CommitteeMember[],
  },

  // 후원/협찬 업체 (SponsorStatusTable 실제 데이터)
  sponsors: [
    { name: "플랭 (Plang)", category: "발표 & 전시 부스 후원", tier: "골드 파트너" },
    { name: "AIONA-AI 플랫폼", category: "발표 세션 후원", tier: "골드 파트너" },
    { name: "비긴즈 (Begins)", category: "전시 부스 후원", tier: "실버 파트너" },
    { name: "하이퍼러닝 (Hyper Learning)", category: "전시 부스 후원", tier: "실버 파트너" },
    { name: "투폰즈 (TwoPonds)", category: "학술대회 홍보영상 후원", tier: "미디어 파트너" },
    { name: "커넥트에듀 (Connect Edu)", category: "에듀테크 솔루션 후원", tier: "협력 파트너" },
    { name: "마이티쳐코리아 (My Teacher Korea)", category: "어학교육 콘텐츠 후원", tier: "협력 파트너" },
    { name: "ePublic (이퍼블릭)", category: "영어교육 출판 후원", tier: "협력 파트너" },
    { name: "건국대학교 GLOCAL캠퍼스", category: "행사장 및 인프라 지원", tier: "공동 주관" },
    { name: "한국연구재단 (NRF)", category: "등재학술지 학술 활동 지원", tier: "학술 후원" },
  ],

  // 문의 및 사무국
  contact: {
    secretariat: "한국멀티미디어언어교육학회(KAMALL) 학술대회 준비위원회",
    email: "kamall2026@gmail.com",
    academicEmail: "academic.kamall@gmail.com",
    homepage: "https://kamall.or.kr",
    address: "충청북도 충주시 충원대로 268 건국대학교 글로컬캠퍼스 & KAMALL 사무국",
    operatingHours: "평일 10:00 ~ 17:00 (학술대회 당일 현장 등록데스크 운영)",
  }
};
