import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getFormData, updateFormData as dbUpdateFormData } from '../db';

export const updateFormData = createAsyncThunk('form/updateFormData', async (form) => {
  const data = await dbUpdateFormData(form);
  return data;
});

export const fetchFormData = createAsyncThunk('form/fetchFormData', async () => {
  const data = await getFormData();
  if (data) {
    return data;
  }
  return null;
});

const form = createSlice({
  name: 'form',
  initialState: {
    user: {
      userId: '',
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
