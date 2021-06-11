import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import UserDB from '../db/UserDB';
import { setError } from './form';

export const addUser = createAsyncThunk(
  'user/addUser',
  async (user, { rejectWithValue, dispatch }) => {
    try {
      const data = await UserDB.addUser(user);
      const { error } = data;
      if (error) {
        dispatch(setError(error));
        return rejectWithValue(error);
      }
      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  },
);

export const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
  const data = await UserDB.getUsers();
  return data;
});

export const fetchUser = createAsyncThunk('user/fetchUser', async (id, { rejectWithValue }) => {
  try {
    const data = await UserDB.getUser(id);
    const { error } = data;
    if (error) {
      return rejectWithValue(error);
    }
    return data;
  } catch (e) {
    return rejectWithValue(e);
  }
});

export const updateUser = createAsyncThunk(
  'user/updateUser',
  async (user, { rejectWithValue, dispatch }) => {
    const { id } = user;
    try {
      const data = await UserDB.updateUser(user, id);
      const { error } = data;
      if (error) {
        dispatch(setError(error));
        return rejectWithValue(error);
      }
      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  },
);

export const deleteUser = createAsyncThunk('user/deleteUser', async (id, { rejectWithValue }) => {
  try {
    const data = await UserDB.deleteUser(id);
    const { error } = data;
    if (error) {
      return rejectWithValue(error);
    }
    return id;
  } catch (e) {
    return rejectWithValue(e);
  }
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
    [fetchUser.rejected]: (state, action) => {
      const { message } = action.payload;
      toast.error(message);
      return { ...state };
    },
    [updateUser.fulfilled]: (state, action) => {
      const { id } = action.payload;
      const newUsers = [...state.users].map((u) => (u.id === id ? action.payload : user));
      toast.success('User is updated successfully');
      return { ...state, user: action.payload, users: newUsers };
    },
    [updateUser.rejected]: (state, action) => {
      const { message } = action.payload;
      toast.error(message);
      return { ...state };
    },
    [deleteUser.fulfilled]: (state, action) => {
      const { id } = action.payload;
      const { id: userId } = state.user || {};
      const filteredUsers = state.users.filter((u) => u.id !== id);
      toast.success('User deleted successfully');
      return { ...state, user: userId === id ? null : state.user, users: filteredUsers };
    },
    [deleteUser.rejected]: (state, action) => {
      const { message } = action.payload;
      toast.error(message);
      return { ...state };
    },
  },
});
export default user.reducer;
