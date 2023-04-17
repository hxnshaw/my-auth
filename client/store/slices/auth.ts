import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { notify } from "@/helpers";
import { login, register } from "@/services/auth";

export const _login = createAsyncThunk(
  `login`,
  async (payload: { email: string; password: string }, thunkApi) => {
    try {
      const response = await login(payload);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const _register = createAsyncThunk(
  `register`,
  async (
    payload: { email: string; password: string; username: string },
    thunkApi
  ) => {
    try {
      const response = await register(payload);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

interface authState {
  user: string | null;
  loading: boolean;
  error: boolean;
}

const initialState: authState = {
  user: null,
  loading: false,
  error: false,
};

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: (state) => {
      state.user = null;
      state.loading = false;
      state.error = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(_login.pending, (state) => {
        state.user = null;
        state.loading = true;
        state.error = false;
      })
      .addCase(_login.rejected, (state, { payload }: any) => {
        state.user = null;
        state.loading = false;
        state.error = true;
        notify(payload.response.data, "error");
      })
      .addCase(_login.fulfilled, (state, { payload }) => {
        state.user = payload.data.data;
        state.loading = false;
        state.error = false;
      });
    builder
      .addCase(_register.pending, (state) => {
        state.user = null;
        state.loading = true;
        state.error = false;
      })
      .addCase(_register.rejected, (state, { payload }: any) => {
        state.user = null;
        state.loading = false;
        state.error = true;
        console.log(payload);
        notify(payload.response.data.message, "error");
      })
      .addCase(_register.fulfilled, (state, { payload }) => {
        state.user = payload.data.user;
        state.loading = false;
        state.error = false;
      });
  },
});

export const { logOut } = auth.actions;
export default auth.reducer;
