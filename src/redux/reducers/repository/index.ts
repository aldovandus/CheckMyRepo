import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface RepositoryState {
  user: string | null;
  repoName: string | null;
  error: number | null;
  isChecked: boolean;
  isSent: boolean;
  isConnected: boolean;
}

const initialState: RepositoryState = {
  user: null,
  repoName: null,
  error: null,
  isChecked: false,
  isSent: false,
  isConnected: true,
};

export const repositorySlice = createSlice({
  name: 'respository',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
      state.isChecked = false;
      if (state.error !== null) {
        state.error = null;
      }
    },

    setRepoName: (state, action: PayloadAction<string>) => {
      state.repoName = action.payload;
      state.isChecked = false;

      if (state.error !== null) {
        state.error = null;
      }
    },
    setError: (state, action: PayloadAction<number>) => {
      state.error = action.payload;
    },

    setCheckedStatus: (state, action: PayloadAction<boolean>) => {
      state.isChecked = action.payload;
      if (state.error) {
        state.error = null;
      }
    },
    setIsSent: (state, action: PayloadAction<boolean>) => {
      state.isSent = action.payload;
    },
    setIsConnected: (state, action: PayloadAction<boolean>) => {
      state.isConnected = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setUser,
  setRepoName,
  setError,
  setCheckedStatus,
  setIsSent,
  setIsConnected,
} = repositorySlice.actions;

export default repositorySlice.reducer;
