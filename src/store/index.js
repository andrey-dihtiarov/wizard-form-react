import { configureStore, combineReducers } from '@reduxjs/toolkit';

import form from './form';

const reducer = combineReducers({
  form,
});

const store = configureStore({
  reducer,
});

export default store;
