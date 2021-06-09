import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  getFormData,
  updateFormData as dbUpdateFormData,
  clearFormData as dbClearFormData,
} from '../db';

const initialUserData = {
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
  lastStep: '',
};

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

export const clearFormData = createAsyncThunk('form/clearFormData', async () => {
  await dbClearFormData();
});

export const checkFormDataStep = createAsyncThunk('form/checkFormDataStep', async () => {
  const { lastStep } = await getFormData();
  return lastStep;
});

const form = createSlice({
  name: 'form',
  initialState: {
    user: initialUserData,
    hasUnsavedData: false,
  },
  reducers: {
    setHasUnsavedData: (state, action) => ({ ...state, hasUnsavedData: action.payload }),
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
    [clearFormData.fulfilled]: (state) => ({
      ...state,
      user: initialUserData,
      hasUnsavedData: false,
    }),
    [checkFormDataStep.fulfilled]: (state, action) => ({
      ...state,
      user: { ...state.user, lastStep: action.payload },
      hasUnsavedData: !!action.payload,
    }),
  },
});

export const { setHasUnsavedData } = form.actions;

export default form.reducer;
