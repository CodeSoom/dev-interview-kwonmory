Feature('Interviews Feedback Page');

Before((I) => {
  I.amOnPage('/interviews');

  I.click('도전하기');

  I.wait(1);

  I.click('해볼래요');

  I.wait(1);

  I.click('알겠습니다');

  I.wait(1);

  I.click('시작하기');

  I.wait(1);

  I.click('다음문제');
});

Scenario('인터뷰 피드백 페이지를 보여준다.', (I) => {
  I.see('다음문제');

  I.see('나가기');

  I.see('step');

  I.see('방금 질문에 대해 어떻게 대답을 했나요?');
});
