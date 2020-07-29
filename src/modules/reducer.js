import { createSlice } from '@reduxjs/toolkit';

const { actions, reducer } = createSlice({
  name: 'application',
  initialState: {
    accessToken: '',
  },
  reducers: {
    setAccessToken(state, { payload: accessToken }) {
      return {
        ...state,
        accessToken,
      };
    },
  },
});

export const { setAccessToken } = actions;
export default reducer;
