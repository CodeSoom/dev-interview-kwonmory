const mockInterviews = require('../fixtures/interviews');

Feature('Interviews Problem Page');

Before((I) => {
  I.amOnPage('/interviews');

  I.click('도전하기');

  I.wait(1);

  I.click('해볼래요');

  I.wait(1);

  I.click('알겠습니다');

  I.wait(1);

  I.click('시작하기');
});

Scenario('인터뷰 문제 페이지를 보여준다.', (I) => {
  I.see('다음문제');

  I.see('나가기');

  I.see('step');

  I.see(mockInterviews[0].title);

  I.see(mockInterviews[0].problems[0].title);
});

Scenario('다음 문제를 버튼을 누르면 피드백 페이지로 넘어간다.', (I) => {
  I.click('다음문제');

  I.seeInCurrentUrl('/interviews/quiz/problem/feedback');
});
