import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addUser as dbAddUser, getUsers, getUserById, clearFormData } from '../db';

export const addUser = createAsyncThunk('user/addUser', async (user) => {
  const data = await dbAddUser(user);
  await clearFormData();
  return data;
});

export const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
  const data = await getUsers();
  return data;
});

export const fetchUser = createAsyncThunk('user/fetchUser', async (userId) => {
  const data = await getUserById(userId);
  return data;
});

const user = createSlice({
  name: 'user',
  initialState: {
    users: [],
    user: null,
  },
  // reducers: {
  //   addUser: (state, action) => ({ ...state, users: [...state.users, action.payload] }),
  // },
  extraReducers: {
    [addUser.fulfilled]: (state, action) => ({ ...state, users: [...state.users, action.payload] }),
    [fetchUsers.fulfilled]: (state, action) => ({ ...state, users: action.payload }),
    [fetchUser.fulfilled]: (state, action) => ({ ...state, user: action.payload }),
  },
});

// export const { addUser } = user.actions;

export default user.reducer;
