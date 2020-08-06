import { get } from './utils';

test('get', () => {
  const state = {
    name: '테스트',
  };

  const name = get('name');
  const age = get('age');

  expect(name(state)).toBe(state.name);
  expect(age(state)).toBeUndefined();
});
