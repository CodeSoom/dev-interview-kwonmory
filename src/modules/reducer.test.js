import reducer, { setAccessToken } from './reducer';

describe('reducer', () => {
  const initialState = {
    accessToken: given.accessToken || '',
  };

  context('without state', () => {
    it('returns inistialState', () => {
      const state = reducer(undefined, { type: 'action' });

      expect(state).toEqual(initialState);
    });
  });

  describe('setAccessToken', () => {
    const ACCESS_TOKEN = 'ACCESS_TOKEN';

    const state = reducer(initialState, setAccessToken(ACCESS_TOKEN));

    expect(state.accessToken).toBe(ACCESS_TOKEN);
  });
});
