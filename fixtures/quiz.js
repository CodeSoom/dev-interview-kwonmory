const mockQuiz = {
  id: 1,
  title: '주니어 프론트엔드 개발자라면!',
  description: '주니어 개발자분들께서 도전할만한 인터뷰 문제입니다.',
  image: {
    id: 1,
    url: 'https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/02/Blog_Front-End-Dev.jpg.webp',
    alt: '이미지',
  },
  tags: [
    {
      id: 1,
      title: 'frontend',
    },
    {
      id: 2,
      title: 'junior',
    },
  ],
  default_limit_second: 30,
  problems: [
    {
      id: 1,
      title: 'wow1',
      limit_second: 40,
    },
    {
      id: 2,
      title: 'hoho1',
    },
  ],
};

export default mockQuiz;
