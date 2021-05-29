const { createSlice } = require('@reduxjs/toolkit');

const INIT_STATE = {
  userName: '',
  password: '',
  repeatPassword: '',
  avatar: null,
  birthDate: '',
  gender: '',
  address: '',
};

const user = createSlice({
  name: 'user',
  initialState: INIT_STATE,
  reducers: {
    updateUser: (state, action) => ({ ...state, ...action.payload }),
  },
});

export const { updateUser } = user.actions;

export default user.reducer;
