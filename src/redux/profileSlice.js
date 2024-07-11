
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: localStorage.getItem('profileName') || '',
  email: localStorage.getItem('profileEmail') || '',
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    saveProfile: (state, action) => {
      const { name, email } = action.payload;
      state.name = name;
      state.email = email;
      localStorage.setItem('profileName', name);
      localStorage.setItem('profileEmail', email);
    },
  },
});

export const { saveProfile } = profileSlice.actions;
export default profileSlice.reducer;
