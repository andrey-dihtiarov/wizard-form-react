import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import UserDB from '../db/UserDB';

export const addUser = createAsyncThunk('user/addUser', async (user) => {
  const data = await UserDB.addUser(user);
  return data;
});

export const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
  const data = await UserDB.getUsers();
  return data;
});

export const fetchUser = createAsyncThunk('user/fetchUser', async (id) => {
  const data = await UserDB.getUser(id);
  return data;
});

export const updateUser = createAsyncThunk('user/updateUser', async (user) => {
  const { id } = user;
  const data = await UserDB.updateUser(user, id);
  return data;
});

export const deleteUser = createAsyncThunk('user/deleteUser', async (id) => {
  const data = await UserDB.deleteUser(id);
  return { data, id };
});

const user = createSlice({
  name: 'user',
  initialState: {
    users: [],
    user: null,
  },
  extraReducers: {
    [addUser.fulfilled]: (state, action) => ({ ...state, user: action.payload }),
    [fetchUsers.fulfilled]: (state, action) => ({ ...state, users: action.payload }),
    [fetchUser.fulfilled]: (state, action) => ({ ...state, user: action.payload }),
    [updateUser.fulfilled]: (state, action) => {
      const { id } = action.payload;
      const newUsers = [...state.users].map((u) => (u.id === id ? action.payload : user));
      return { ...state, user: action.payload, users: newUsers };
    },
    [deleteUser.fulfilled]: (state, action) => {
      const { id, data } = action.payload;
      const { id: userId } = state.user || {};
      return { ...state, user: userId === id ? null : state.user, users: data };
    },
  },
});
export default user.reducer;
