import { process } from './assetsTransformer';

test('return test', () => {
  expect(process('', 'test')).toBe(`module.exports = ${JSON.stringify('test')};`);
});
