const depthOfQuestion = ['하', '중', '상'];

const interviewQuestions = [
  {
    id: 1,
    title: '인덱스(Index)란 무엇인가?',
    categories: [{ id: 1, name: 'Database' }],
    reviews: ['리뷰', '리뷰'],
    depthOfQuestion: depthOfQuestion[0],
    relatedCompany: [{ id: 1, name: '쿠팡' }],
  },
  {
    id: 2,
    title: '왜 index 를 생성하는데 b-tree 를 사용하나요?',
    categories: [{ id: 1, name: 'Database' }],
    reviews: ['리뷰'],
    depthOfQuestion: depthOfQuestion[2],
    relatedCompany: [],
  },
  {
    id: 3,
    title: '멀티 스레딩의 장점은 무엇인가요?',
    categories: [{ id: 2, name: 'Operation' }],
    reviews: [],
    depthOfQuestion: depthOfQuestion[0],
    relatedCompany: [],
  },
  {
    id: 4,
    title: 'SJF(Shortest - Job - First)의 문제점은 무엇이 있나요?',
    categories: [{ id: 3, name: 'Operation' }],
    reviews: ['리뷰', '리뷰', '리뷰', '리뷰', '리뷰'],
    depthOfQuestion: depthOfQuestion[1],
    relatedCompany: [{ id: 2, name: '우아한형제들' }],
  },
  {
    id: 5,
    title: 'Hoisting에 대해서 설명해주세요.',
    categories: [{ id: 4, name: 'Javascript' }],
    reviews: [],
    depthOfQuestion: depthOfQuestion[0],
    relatedCompany: [{ id: 3, name: '카카오' }, { id: 4, name: '네이버' }],
  },
];

export default interviewQuestions;
