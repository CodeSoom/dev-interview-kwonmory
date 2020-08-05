const depthOfQuestion = ['하', '중', '상'];

const interviewQuestions = [
  {
    id: 1,
    title: '인덱스(Index)란 무엇인가?',
    categories: ['Database'],
    reviews: ['리뷰', '리뷰'],
    depthOfQuestion: depthOfQuestion[0],
    relatedCompany: ['쿠팡'],
  },
  {
    id: 2,
    title: '왜 index 를 생성하는데 b-tree 를 사용하나요?',
    categories: ['Database'],
    reviews: ['리뷰'],
    depthOfQuestion: depthOfQuestion[2],
    relatedCompany: [],
  },
  {
    id: 3,
    title: '멀티 스레딩의 장점은 무엇인가요?',
    categories: ['Operation'],
    reviews: [],
    depthOfQuestion: depthOfQuestion[0],
    relatedCompany: [],
  },
  {
    id: 4,
    title: 'SJF(Shortest - Job - First)의 문제점은 무엇이 있나요?',
    categories: ['Operation'],
    reviews: ['리뷰', '리뷰', '리뷰', '리뷰', '리뷰'],
    depthOfQuestion: depthOfQuestion[1],
    relatedCompany: ['우아한형제들'],
  },
  {
    id: 5,
    title: 'Hoisting에 대해서 설명해주세요.',
    categories: ['Javascript'],
    reviews: [],
    depthOfQuestion: depthOfQuestion[0],
    relatedCompany: ['Kakao', 'Naver'],
  },
];

export default interviewQuestions;
