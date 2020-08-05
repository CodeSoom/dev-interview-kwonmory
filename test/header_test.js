Feature('Header Area');

Scenario('헤더는 로고 클래스를 가지고 있다', (I) => {
  I.amOnPage('/');

  I.seeElement('.logo');
});
