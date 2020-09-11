Feature('Main Page');

Scenario('메인 페이지가 렌더링 된다.', (I) => {
  I.amOnPage('/');

  I.seeElement('.logo');

  I.see('데브-인터뷰');

  I.see('Interview');

  I.see('You');

  I.see('2020');
});

Scenario('시작하기를 누르면 다음 페이지로 넘어간다.', (I) => {
  I.amOnPage('/');

  I.see('시작하기');

  I.click('시작하기');

  I.see('프론트엔드 면접 문제 은행 시리즈1');
});
