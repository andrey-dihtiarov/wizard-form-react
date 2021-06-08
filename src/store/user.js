import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  addUser as dbAddUser,
  updateUser as dbUpdateUser,
  deleteUser as dbDeleteUser,
  getUsers,
  getUserById,
} from '../db';

export const addUser = createAsyncThunk('user/addUser', async (user) => {
  const addedUser = await dbAddUser(user);
  const users = await getUsers();
  return { user: addedUser, users };
});

export const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
  const data = await getUsers();
  return data;
});

export const fetchUser = createAsyncThunk('user/fetchUser', async (userId) => {
  const data = await getUserById(userId);
  return data;
});

export const updateUser = createAsyncThunk('user/updateUser', async (user) => {
  const data = await dbUpdateUser(user);
  return data;
});

export const deleteUser = createAsyncThunk('user/deleteUser', async (userId) => {
  const data = await dbDeleteUser(userId);
  return { data, userId };
});

const user = createSlice({
  name: 'user',
  initialState: {
    users: [],
    user: null,
  },
  extraReducers: {
    [addUser.fulfilled]: (state, action) => {
      const { users } = action.payload;
      return { ...state, users: [...users] };
    },
    [fetchUsers.fulfilled]: (state, action) => ({ ...state, users: action.payload }),
    [fetchUser.fulfilled]: (state, action) => ({ ...state, user: action.payload }),
    [updateUser.fulfilled]: (state, action) => {
      const { userId } = action.payload;
      const newUsers = [...state.users].map((u) => (u.userId === userId ? action.payload : user));
      return { ...state, user: action.payload, users: newUsers };
    },
    [deleteUser.fulfilled]: (state, action) => {
      const { userId: id, data } = action.payload;
      const { userId } = state.user || {};
      return { ...state, user: userId === id ? null : state.user, users: data };
    },
  },
});

export default user.reducer;
