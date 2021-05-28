import { configureStore, combineReducers } from '@reduxjs/toolkit';

import user from './user';

const reducer = combineReducers({
  user,
});

const store = configureStore({
  reducer,
});

export default store;