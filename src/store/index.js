import { configureStore, combineReducers } from '@reduxjs/toolkit';

import user from './user';
import wizard from './wizard';

const reducer = combineReducers({
  user,
  wizard,
});

const store = configureStore({
  reducer,
});

export default store;
