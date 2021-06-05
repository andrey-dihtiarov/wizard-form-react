const { createSlice } = require('@reduxjs/toolkit');

const form = createSlice({
  name: 'form',
  initialState: {
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
  },
  reducers: {
    updateFormData: (state, action) => ({ ...state, ...action.payload }),
  },
});

export const { updateFormData } = form.actions;

export default form.reducer;
