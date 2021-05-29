const { createSlice } = require('@reduxjs/toolkit');

const INIT_STATE = {
  finishedSteps: [],
};

const wizard = createSlice({
  name: 'wizard',
  initialState: INIT_STATE,
  reducers: {
    setStep: (state, action) => ({
      ...state,
      finishedSteps: [...state.finishedSteps, action.payload],
    }),
  },
});

export const { setStep } = wizard.actions;

export default wizard.reducer;
