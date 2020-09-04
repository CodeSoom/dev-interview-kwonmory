const mockInterviews = require('../fixtures/interviews');

Feature('Interviews Intro Page');

Before((I) => {
  I.amOnPage('/interviews');

  I.see('도전하기');

  I.click('도전하기');

  I.wait(1);

  I.see('해볼래요');

  I.click('해볼래요');

  I.seeInCurrentUrl('/interviews/quiz');
});

Scenario('인터뷰즈 인트로 페이지를 렌더링한다.', (I) => {
  I.see('진행안내');

  I.see('활용안내');

  I.see('주의사항');

  I.see('알겠습니다');

  I.see('나가기');

  I.see(mockInterviews[0].title);

  I.see(mockInterviews[0].description);

  I.see(mockInterviews[0].problems.length);
});

Scenario('인터뷰즈 인트로 페이지의 나가기 버튼을 눌렀을 때, 알겠습니다 누르면 다른 페이지로 이동한다.', (I) => {
  I.click('나가기');

  I.wait(1);

  I.see('나가시겠습니까?');

  I.see('예');

  I.see('아니요');

  I.click('예');

  I.dontSeeInCurrentUrl('/interviews/quiz');
});

Scenario('인터뷰즈 인트로 페이지의 알겠습니다 버튼을 누르고 시작하기를 누르면 다른 페이지로 이동한다.', (I) => {
  I.click('알겠습니다');

  I.wait(1);

  I.see('시작시 시간 초는 흘러갑니다');

  I.see('시작하기');

  I.see('대기대기!');

  I.click('시작하기');

  I.seeInCurrentUrl('/interviews/quiz/problem');
});

Scenario('인터뷰즈 인트로 페이지의 알겠습니다 버튼을 누르고 대기대기 버튼을 누르면 다른 페이지로 이동하지 않는다.', (I) => {
  I.wait(1);

  I.click('알겠습니다');

  I.wait(1);

  I.click('대기대기!');

  I.seeInCurrentUrl('/interviews/quiz');
});
