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

export interface PaperPresentation {
  title: string;
  presenter: string;
  discussant: string;
}

export interface ParallelSessionRoom {
  roomNumber: string;
  roomName: string;
  sessionCode: string;
  themeKo: string;
  themeEn: string;
  moderator: string;
  papers: PaperPresentation[];
}

export interface FeeItem {
  category: string;
  earlyBird: number;
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
    dateRange: "2026년 10월 17일(토) 10:00 ~ 17:00 (등록 09:30 ~)",
    startDateIso: "2026-10-17T10:00:00+09:00",
    venueName: "충주 건국대학교 글로컬캠퍼스",
    venueShort: "건국대학교 글로컬캠퍼스",
    venueAddress: "충청북도 충주시 충원대로 268 건국대학교 GLOCAL(글로컬)캠퍼스",
    venueNotice: "판교역에서 KTX-이음 탑승 시 충주역까지 약 1시간 소요 (교통 편리)",
    host: "한국멀티미디어언어교육학회 (KAMALL)",
    coHosts: ["건국대학교 글로컬캠퍼스"],
    logoUrl: "/images/kamall-logo.png",
    posterUrl: "/images/kamall-2026-poster.jpg",
  },

  // 10월 가을 학회장 환영사 (신동광 회장님)
  welcomeMessage: {
    presidentName: "신동광 교수",
    presidentTitle: "한국멀티미디어언어교육학회(KAMALL) 회장",
    affiliation: "광주교육대학교 영어교육과",
    imageUrl: "/images/president-shindongkwang.png",
    paragraphs: [
      "존경하는 한국멀티미디어언어교육학회(KAMALL) 회원 여러분, 그리고 국내외 언어교육 및 에듀테크 연구자 여러분, 안녕하십니까.",
      "청명한 가을 하늘이 아름다운 결실의 계절 10월을 맞이하여, 회원 여러분의 가정에 늘 건강과 행복이 가득하기를 기원합니다. 🍁🍂",
      "올해 2026년 KAMALL 연례학술대회는 'AI for All: Establishing Practical AI Infrastructure for Inclusive Language Learning (모두를 위한 인공지능: 포용적 언어 학습을 위한 실용적 AI 인프라 구축)'이라는 시의적절하고 뜻깊은 대주제로 10월 17일(토) 건국대학교 글로컬캠퍼스에서 개최됩니다.",
      "생성형 AI와 초거대 언어모델의 급속한 확산은 언어 교육의 교수법, 학습자 상호작용, 평가 체계 전반에 패러다임 전환을 이끌고 있습니다. 그러나 이러한 기술적 혁신이 소수의 특권이 아닌 모든 학습자에게 공평하고 실질적인 교육적 혜택으로 전달되기 위해서는 학교와 교육 현장에 적합한 '실용적 AI 인프라'의 확립이 무엇보다 필수적입니다.",
      "이번 학술대회는 국내외 최고의 연구자들과 교육 전문가, 에듀테크 기업이 함께 모여 AI 기반 언어 교육의 포용성과 실천적 대안을 심도 있게 모색하는 지혜의 장이 될 것입니다. 가을의 정취가 아름다운 건국대 글로컬캠퍼스에서 회원 여러분을 반갑게 뵙기를 고대합니다.",
    ],
  },

  // 학술대회 위원장 환영사 (이혜진 교수님)
  chairWelcomeMessage: {
    chairName: "이혜진 교수",
    chairTitle: "2026 KAMALL 학술대회 위원장",
    affiliation: "원광대학교 영어교육과",
    imageUrl: "/images/chair-leehyejin.png",
    paragraphs: [
      "존경하는 KAMALL 회원 여러분 및 학술대회 참가자 여러분, 2026년 한국멀티미디어언어교육학회 연례학술대회에 오신 것을 진심으로 환영합니다. ✨",
      "이번 학술대회는 인공지능이 교육 현장에 깊숙이 뿌리내리는 전환점에서, '모두를 위한 AI'라는 교육적 가치를 실현하고자 총 22편의 우수 학술 연구와 심층 워크숍, 국내외 저명 석학들의 기조·플래너리 강연을 정성껏 준비하였습니다.",
      "오전의 통찰력 있는 기조 및 플래너리 강연에 이어, 오후에는 말하기·듣기, 생성형 AI 쓰기 및 피드백, 코퍼스·NLP 언어 진단, 학습자 요인과 국제교류에 이르는 4개 분과 세션에서 치열하고도 따뜻한 학문적 담론이 펼쳐질 예정입니다.",
      "전국 각지에서 충주 건국대 글로컬캠퍼스로 모여주실 연구자 및 현장 교사 여러분께 깊은 감사를 드리며, 본 대회가 서로의 지혜를 나누고 미래 언어 교육의 비전을 함께 세우는 뜻깊은 교류의 장이 되기를 소망합니다. 회원 여러분의 많은 관심과 적극적인 참여를 부탁드립니다.",
    ],
  },

  // 중요 일정 (D-Day 타임라인)
  importantDates: [
    {
      id: "cfp-open",
      title: "발표 제목 신청 마감",
      dateStr: "2026년 7월 31일 (금)",
      isoDate: "2026-07-31",
      status: "closed",
      description: "발표 제목 및 연구 개요 접수 마감 완료",
    },
    {
      id: "cfp-deadline",
      title: "초록 접수 마감",
      dateStr: "2026년 8월 15일 (금)",
      isoDate: "2026-08-15",
      status: "closed",
      description: "국/영문 공식 발표 초록 접수 마감 완료",
    },
    {
      id: "early-reg",
      title: "사전등록(Early-Bird) 기간",
      dateStr: "2026년 9월 25일 (금) 18:00까지",
      isoDate: "2026-09-25",
      status: "open",
      description: "온라인 구글폼을 통한 사전등록 할인 혜택 제공",
    },
    {
      id: "conference-day",
      title: "2026 KAMALL 학술대회 개최",
      dateStr: "2026년 10월 17일(토) 10:00 ~ 17:00",
      isoDate: "2026-10-17",
      status: "upcoming",
      description: "충주 건국대학교 글로컬캠퍼스 본 대회 개최 (등록 09:30 ~)",
    },
  ] as ImportantDate[],

  // 기조연설 및 플래너리 연사
  keynoteSpeakers: [
    {
      id: "spk-keynote",
      name: "이장호 교수",
      affiliation: "중앙대학교 (Chung-Ang University)",
      role: "기조강연 | Keynote",
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
      role: "Plenary 1 | 플래너리",
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
      role: "Plenary 2 | 플래너리",
      speakerType: "plenary",
      imageUrl: "/images/speaker-kwon-seokyeong.jpg",
      title: "정답의 시대에서 질문의 시대로: AI 시대 영어 능력의 새로운 정의",
      abstract: "단순 지식 암기와 정답 도출 중심의 과거 교육에서 벗어나, 정교한 프롬프트 엔지니어링과 비판적 사고를 통해 좋은 질문을 생성하고 AI와 협업하는 '질문의 시대'에서 요구되는 미래형 영어 능력을 새롭게 정의합니다.",
      bio: "서울교육대학교 영어교육과 교수로서 초·중등 영어교육 혁신, AI 융합 교수학습 설계 및 미래형 언어 평가 체계 개발을 선도하고 있습니다.",
    },
  ] as KeynoteSpeaker[],

  // 2부 학술발표 (온·오프라인 병행 22편 세부 데이터)
  parallelSessionsPart1: [
    {
      roomNumber: "제1발표실 (101호)",
      roomName: "제1발표실",
      sessionCode: "Session ①",
      themeKo: "AI 기반 말하기·듣기 교육",
      themeEn: "AI-Mediated Speaking & Listening",
      moderator: "강주훈 (한국교통대학교)",
      papers: [
        {
          title: "AI-Based Spoken Interaction for Listening-Oriented Learning in EFL Classrooms",
          presenter: "하종범 (국립금오공과대학교)",
          discussant: "이지영 (한양대학교)",
        },
        {
          title: "Development and Evaluation of Customized Chatbots for Elementary English Education: Deriving Instructor-Informed Prompt Design Principles",
          presenter: "서소담 · 이동주 (한국교원대학교)",
          discussant: "석소연 (전북대학교)",
        },
        {
          title: "Effect of an AI-based Application on Enhancing the L2 Listening Comprehension of Chinese EFL Students",
          presenter: "Lin Yini (이화여자대학교)",
          discussant: "Praxi Castillo (Pai Chai University)",
        },
        {
          title: "Effects of Human–AI Interaction on L2 Speaking and Oral Summarization",
          presenter: "Hye Won Shin (Sejong University)",
          discussant: "송기원 (경북대학교)",
        },
      ]
    },
    {
      roomNumber: "제2발표실 (102호)",
      roomName: "제2발표실",
      sessionCode: "Session ②",
      themeKo: "생성형 AI 활용 쓰기·피드백·교수법",
      themeEn: "GenAI-Assisted Writing, Feedback & Pedagogy",
      moderator: "김미숙 (경희대학교)",
      papers: [
        {
          title: "Negotiating AI Feedback in English Writing: Feedback Uptake and Metalinguistic Awareness among Korean EFL University Students",
          presenter: "Kwon, Eunsook (Daegu National University of Education)",
          discussant: "석소연 (전북대학교)",
        },
        {
          title: "Beyond the Prompt: GenAI Multimodal Composition and L2 Writing Development",
          presenter: "Yohan Hwang · Jeong-Eun Kim (Jeonbuk National University)",
          discussant: "Praxi Castillo (Pai Chai University)",
        },
        {
          title: "에세이 평가에서 언어 측면 평가의 총체적 평가 대체 가능성 연구",
          presenter: "최민석 · 이동주 (한국교원대학교)",
          discussant: "송기원 (경북대학교)",
        },
        {
          title: "The Differential Impact of Generative-AI and Human Feedback on Korean EFL Students' Argumentative Writing",
          presenter: "Park, Punahm (Seo Kyeong University) · Kim, Taiwon (Sogang University)",
          discussant: "장은정 (조치원대동초등학교)",
        },
      ]
    },
    {
      roomNumber: "제3발표실 (103호, 온라인 병행)",
      roomName: "제3발표실",
      sessionCode: "Session ③",
      themeKo: "코퍼스·평가·NLP 기반 언어 진단",
      themeEn: "Corpus, Assessment & NLP-Based Diagnostics",
      moderator: "이송은 (동의대학교)",
      papers: [
        {
          title: "Exploring an AI-Human Workflow for Formative Quiz Development: Learning Outcomes and Student Perceptions",
          presenter: "Kyung-Mi O (Dongduk Women's University)",
          discussant: "Praxi Castillo (Pai Chai University)",
        },
        {
          title: "왜 어떤 문제는 아는 학생만 풀리는가: 문항의 포용성과 구인무관 난이도(construct-irrelevant difficulty)를 진단하는 온톨로지 기반 AI 틀",
          presenter: "김삼유 (양영교육) · 방정선 (대전시청자미디어센터)",
          discussant: "송기원 (경북대학교)",
        },
        {
          title: "코퍼스를 활용한 언어자료 기반 학습법(Data-Driven Learning)이 초등학생의 영어 문법 학습에 미치는 효과 연구",
          presenter: "송부연 · 이동주 (한국교원대학교)",
          discussant: "장은정 (조치원대동초등학교)",
        },
        {
          title: "인공지능 기반 언어 자료 기반 학습 웹 도구(AI-DDL)의 설계와 구현",
          presenter: "이원지 · 이동주 (한국교원대학교)",
          discussant: "Jayoung Song (광주교육대학교)",
        },
      ]
    },
    {
      roomNumber: "제4발표실 (104호)",
      roomName: "제4발표실",
      sessionCode: "Session ④",
      themeKo: "학습자 요인과 교육과정·국제교류",
      themeEn: "Learner Factors, Curriculum & Intercultural Exchange",
      moderator: "안유영 (전남대학교)",
      papers: [
        {
          title: "Innovating Language Education: Integrating Generative AI into Project-Based Language Learning in South Korean Higher Education",
          presenter: "Ryan Hatcher (Hannam University)",
          discussant: "송기원 (경북대학교)",
        },
        {
          title: "지속가능한 영어교육과를 위한 새로운 가능성 탐색: 생성형 AI 기반 Project-Based Service Learning 사례",
          presenter: "이혜진 (원광대학교) · 이가영 (숭실대학교)",
          discussant: "장은정 (조치원대동초등학교)",
        },
        {
          title: "Mind Mapping for Vocabulary Learning: Modality, Delivery, and the Role of Mind Map Quality",
          presenter: "TAEYEON HWANG (Hankuk University of Foreign Studies)",
          discussant: "Jayoung Song (광주교육대학교)",
        },
        {
          title: "한국 고등학교 EFL 학습자들의 성장 마인드셋과 영어 어휘지식의 관계: 어휘학습 자기조절능력의 매개효과",
          presenter: "정다빈 · 이동주 (한국교원대학교)",
          discussant: "이지영 (한양대학교)",
        },
      ]
    },
  ] as ParallelSessionRoom[],

  parallelSessionsPart2: [
    {
      roomNumber: "제1발표실 (101호)",
      roomName: "제1발표실",
      sessionCode: "Session ⑤",
      themeKo: "AI 기반 말하기·듣기 교육",
      themeEn: "AI-Mediated Speaking & Listening",
      moderator: "백지운 (중부대학교)",
      papers: [
        {
          title: "When Does Corrective Feedback Become Mediation? On-Screen Feedback in AI-Based L2 Speaking App Interaction",
          presenter: "이지영 · 박유정 (한양대학교 / 성균관대학교)",
          discussant: "하종범 (국립금오공과대학교)",
        },
      ]
    },
    {
      roomNumber: "제2발표실 (102호)",
      roomName: "제2발표실",
      sessionCode: "Session ⑥",
      themeKo: "생성형 AI 활용 쓰기·피드백·교수법",
      themeEn: "GenAI-Assisted Writing, Feedback & Pedagogy",
      moderator: "조규희 (경인교육대학교)",
      papers: [
        {
          title: "생성형 AI 시대 영어교사의 교수 실천과 정체성 재구성: GMAT(GenAI-Mediated Activity Theory) 기반 자문화기술지 연구",
          presenter: "석소연 (전북대학교)",
          discussant: "Kwon, Eunsook (Daegu National University of Education)",
        },
        {
          title: "From Prompting to Pedagogy: A Practical Framework for Integrating Generative AI into English Language Teaching (수업시연)",
          presenter: "Praxi Castillo (Pai Chai University)",
          discussant: "Park, Punahm (Seo Kyeong University)",
        },
      ]
    },
    {
      roomNumber: "제3발표실 (103호, 온라인 병행)",
      roomName: "제3발표실",
      sessionCode: "Session ⑦",
      themeKo: "코퍼스·평가·NLP 기반 언어 진단",
      themeEn: "Corpus, Assessment & NLP-Based Diagnostics",
      moderator: "황요한 (전북대학교)",
      papers: [
        {
          title: "Evaluating Cloze-Solving Behaviour across Model Architectures: A Comparative Study of BERT, GPT-2, and Korean CSAT Readers",
          presenter: "송기원 · 문성민 (경북대학교)",
          discussant: "이원지 (한국교원대학교)",
        },
      ]
    },
    {
      roomNumber: "제4발표실 (104호)",
      roomName: "제4발표실",
      sessionCode: "Session ⑧",
      themeKo: "학습자 요인과 교육과정·국제교류",
      themeEn: "Learner Factors, Curriculum & Intercultural Exchange",
      moderator: "이혜진 (원광대학교)",
      papers: [
        {
          title: "온라인 국제교류 활동이 초등학생의 영어 의사소통 역량에 미치는 영향",
          presenter: "장은정 · 이동주 (한국교원대학교)",
          discussant: "Ryan Hatcher (Hannam University)",
        },
        {
          title: "Beyond Pages, Across Realities: Contextual and Pedagogical Factors Shaping Reading Engagement in AR and Paper-Based Environments",
          presenter: "Jayoung Song (Gwangju National University of Education)",
          discussant: "정다빈 (한국교원대학교)",
        },
      ]
    },
  ] as ParallelSessionRoom[],

  // 참가비 및 등록비 (유저 첨부 이미지 정확 반영)
  registration: {
    bankInfo: {
      bankName: "국민은행",
      accountNumber: "271401-04-180149",
      accountHolder: "한국멀티미디어언어교육학회",
      depositGuide: "입금자명은 반드시 '등록자성명+소속' (예: 홍길동원광대)으로 기재해 주시기 바랍니다.",
    },
    feeTable: [
      { category: "학부생·대학원생", earlyBird: 10000, onSite: 15000, note: "학생증 확인 필요" },
      { category: "KAMALL 회원", earlyBird: 20000, onSite: 25000, note: "학회 정회원" },
      { category: "KAMALL 비회원", earlyBird: 30000, onSite: 35000, note: "일반 참가자" },
      { category: "단체 (10인 이상)", earlyBird: 15000, onSite: 20000, note: "1인당 금액 (사전신청 필수)" },
    ] as FeeItem[],
    policyNotice: "※ 학술대회 준비 및 프로시딩 인쇄 관계로 등록비 납부 후에는 환불이 불가하오니 신중한 등록을 부탁드립니다.",
    registerFormUrl: "https://forms.gle/gWy68sMJFjQz9D5E9",
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

  // 학술대회 조직위원회
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

  // 후원사 및 협력 기업 (로고 및 티어 반영)
  sponsors: [
    { name: "건국대학교 GLOCAL캠퍼스", tier: "공동 주관", category: "행사장 및 인프라 지원", logoUrl: "/images/sponsors/konkuk.svg" },
    { name: "한국연구재단 (NRF)", tier: "학술 후원", category: "등재학술지 학술 활동 지원", logoUrl: "/images/sponsors/nrf.svg" },
    { name: "플랭 (Plang)", tier: "협력 파트너", category: "AI 영어회화 에듀테크", logoUrl: "/images/sponsors/plang.svg" },
    { name: "AIONA-AI 플랫폼", tier: "협력 파트너", category: "AI 언어교육 플랫폼", logoUrl: "/images/sponsors/aiona.svg" },
    { name: "비긴즈 (Begins)", tier: "협력 파트너", category: "에듀테크 & 교육 컨설팅", logoUrl: "/images/sponsors/begins.svg" },
    { name: "하이퍼러닝", tier: "협력 파트너", category: "미래엔 디지털 학습 플랫폼", logoUrl: "/images/sponsors/hyperlearning.svg" },
    { name: "투폰즈 (TwoPonds)", tier: "협력 파트너", category: "영어교육 전문 출판", logoUrl: "/images/sponsors/twoponds.svg" },
    { name: "커넥트에듀", tier: "협력 파트너", category: "에듀테크 교육 솔루션", logoUrl: "/images/sponsors/connectedu.svg" },
    { name: "마이티쳐코리아", tier: "협력 파트너", category: "원어민 화상영어 콘텐츠", logoUrl: "/images/sponsors/myteacher.svg" },
    { name: "ePublic (이퍼블릭)", tier: "협력 파트너", category: "영어교육 교재 출판", logoUrl: "/images/sponsors/epublic.svg" },
  ],

  // 문의처
  contact: {
    secretariat: "한국멀티미디어언어교육학회(KAMALL) 학술대회 준비위원회",
    email: "kamall2026@gmail.com",
    academicEmail: "academic.kamall@gmail.com",
    homepage: "https://kamall.or.kr",
    address: "충청북도 충주시 충원대로 268 건국대학교 글로컬캠퍼스 & KAMALL 사무국",
    operatingHours: "평일 10:00 ~ 17:00 (학술대회 당일 현장 등록데스크 운영)",
  }
};
