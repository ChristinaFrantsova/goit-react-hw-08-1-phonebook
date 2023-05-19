import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getContactsApi,
  addContactsApi,
  deleteContactsApi,
  // setAuthHeader,
} from 'api/Api';

//  варіант з токеном авторизації
// export const fetchContactsThunk = createAsyncThunk(
//   'contacts/fetchAll',
//   async (_, thunkAPI) => {
//     try {
//       const responce = await getContactsApi();
//       setAuthHeader(responce.data.token);
//       return responce.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

export const fetchContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      return await getContactsApi();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContactsThunk = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      return await addContactsApi(contact);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContactsThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      return await deleteContactsApi(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
