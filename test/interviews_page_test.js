const mockInterviews = require('../fixtures/interviews');

Feature('Interviews Page');

Scenario('인터뷰즈 페이지를 렌더링한다.', (I) => {
  I.amOnPage('/interviews');
  const interview = mockInterviews[0];

  I.see(interview.title);

  I.see(interview.description);

  interview.tags.forEach((tag) => {
    I.see(tag.title.toLocaleUpperCase());
  });

  I.see('도전하기');

  I.see('출처링크');

  I.dontSee('시작하기');
});

Scenario('도전하기를 누르고 해볼래요를 누르면 다음 페이지로 넘어간다.', (I) => {
  I.amOnPage('/interviews');

  I.see('도전하기');

  I.click('도전하기');

  I.wait(1);

  I.see('해볼래요');

  I.see('안할래요');

  I.click('해볼래요');

  I.seeInCurrentUrl('/interviews/quiz');
});

Scenario('도전하기 누르고 안할래요를 누르면 페이지를 유지한다.', (I) => {
  I.amOnPage('/interviews');

  I.click('도전하기');

  I.wait(1);

  I.see('안할래요');

  I.click('안할래요');

  I.dontSeeInCurrentUrl('/interviews/quiz');
});
