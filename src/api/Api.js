import axios from 'axios';

// axios.defaults.baseURL = 'https://64634fc94dca1a661359d866.mockapi.io';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// Utility to add JWT
export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

// // ======= Contacts ======

export const getContactsApi = async () => {
  const responce = await axios.get('/contacts');
  // setAuthHeader(responce.data.token);
  return responce.data;
};

export const addContactsApi = async contact => {
  const responce = await axios.post('/contacts', contact);
  console.log(responce.data);
  return responce.data;
};

export const deleteContactsApi = async id => {
  const responce = await axios.delete(`/contacts/${id}`);
  return responce.data;
};

// // export const updateContactsAPI = async id => {
// //   const { data } = await axios.patch(`/contacts/${id}`);
// //   return data;
// // };

// // ======= User authorization ======

export const signUpUserApi = async userInfo => {
  try {
    const responce = await axios.post('/users/signup', userInfo);
    // console.log(responce.data);
    return responce.data;
  } catch (error) {
    console.log('Sing up Api request error ==>', error);
  }
};

export const logInUserApi = async userInfo => {
  try {
    const responce = await axios.post('/users/login', userInfo);
    return responce.data;
  } catch (error) {
    console.log('LogIn Api request  error ==>', error);
  }
};

export const logOutUserApi = async () => {
  const responce = await axios.post('/users/logout');
  return responce.data;
};

// getCurrentUser використовуємо для рефреша сторінки, щоб дані юзера підтягувались
export const getCurrentUser = async () => {
  const responce = await axios.get('/users/current');
  return responce.data;
};
