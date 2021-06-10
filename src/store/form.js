import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import TempDB from '../db/TempDB';

export const updateFormData = createAsyncThunk('form/updateFormData', async (form) => {
  const data = await TempDB.updateFormData(form);
  return data;
});

export const fetchFormData = createAsyncThunk('form/fetchFormData', async () => {
  const data = await TempDB.getFormData();
  if (data) {
    return data;
  }
  return null;
});

export const clearFormData = createAsyncThunk('form/clearFormData', async () => {
  await TempDB.clearFormData();
});

const form = createSlice({
  name: 'form',
  initialState: {
    user: {
      id: '',
      userName: '',
      password: '',
      repeatPassword: '',
      avatar: null,
      firstName: '',
      lastName: '',
      email: '',
      birthDate: '',
      gender: '',
      address: '',
      company: '',
      githubLink: '',
      facebookLink: '',
      mainLanguage: '',
      fax: '',
      phoneNumbers: [''],
      skills: [],
      additionalInfo: '',
      myHobbies: [],
    },
  },
  extraReducers: {
    [updateFormData.fulfilled]: (state, action) => ({
      ...state,
      user: { ...state.user, ...action.payload },
    }),
    [fetchFormData.fulfilled]: (state, action) => ({
      ...state,
      user: { ...state.user, ...action.payload },
    }),
  },
});
export default form.reducer;
