Feature('Interviews Finish Page');

Before((I) => {
  I.amOnPage('/interviews');

  I.click('도전하기');

  I.wait(1);

  I.click('해볼래요');

  I.wait(1);

  I.click('알겠습니다');

  I.wait(1);

  I.click('시작하기');

  for (let i = 0; i < 14; i += 1) {
    I.wait(1);

    I.see('다음문제');

    I.click('다음문제');
  }
});

Scenario('인터뷰 피니쉬 페이지를 보여준다.', (I) => {
  I.see('수고하셨습니다');

  I.see('모든 피드백 보기');
});

Scenario('모든 피드백 보기 버튼을 누르면 모든 피드백 페이지로 이동한다.', (I) => {
  I.click('모든 피드백 보기');

  I.seeInCurrentUrl('/interviews/quiz/problem/check');
});
