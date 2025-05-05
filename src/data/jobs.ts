export interface Job {
  id: string;
  title: string;
  company: string;
  type: string;
  team: string;
  tags?: string[];
  responsibilities: string[];
  qualifications: string[];
}

export const jobs: Job[] = [
  {
    id: '1',
    title: 'Commerce Operations Specialist',
    company: '토스',
    type: '계약직',
    team: 'Commerce Business Team',
    tags: ['서비스', '운영', '검수', '프로세스개선', '제품'],
    responsibilities: [
      '토스의 Commerce Operations Specialist는 Commerce Business Team에 속해 있어요.',
      'Commerce Business Team은 토스쇼핑, 토스 브랜드콘 등 커머스 관련 사업을 담당합니다.',
      '팀 목표는 커머스 관련 매출 증가 및 동반 성장 지원입니다.',
    ],
    qualifications: [
      '토스쇼핑 전반 운영 및 노출 관리 경험',
      '효과적인 광고 노출을 위한 데이터 분석 능력',
      '고객 문의 응대 및 소통 경험',
      '판매 성과 데이터 관리 및 분석 역량',
    ],
  },
  {
    id: '2',
    title: 'Content Marketing Assistant',
    company: '토스',
    type: '정규직',
    team: 'Content Team',
    tags: ['콘텐츠', '에디터', '크리에이터', '마케팅', 'B2B'],
    responsibilities: [
      '블로그 및 소셜 미디어 콘텐츠 기획·작성',
      '콘텐츠 퍼포먼스 모니터링 및 개선 제안',
    ],
    qualifications: [
      '콘텐츠 제작 경험 (블로그, SNS 등)',
      '글쓰기 및 커뮤니케이션 능력',
    ],
  },
  {
    id: '3',
    title: 'Executive Assistant',
    company: '토스',
    type: '인턴',
    team: 'Executive Office',
    tags: ['3D Graphic', '그래픽 디자인', '일러스트'],
    responsibilities: [
      '경영진 스케줄 관리 및 회의 지원',
      '자료 조사 및 프레젠테이션 제작 지원',
    ],
    qualifications: [
      '오피스 툴 활용 능숙',
      '꼼꼼한 문서 작성 능력',
    ],
  },
]