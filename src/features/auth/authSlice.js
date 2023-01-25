import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: undefined,
  refreshToken: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { refreshToken, accessToken } = action.payload;
      state.token = accessToken;
      state.refreshToken = refreshToken;
    },
    logOut: (state, action) => {
      state.token = undefined;
      state.refreshToken = undefined;
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;
export default authSlice.reducer;
