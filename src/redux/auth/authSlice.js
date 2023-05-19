import { createSlice } from '@reduxjs/toolkit';
import { register } from './authThunk';
//logIn, logOut, refreshUser;

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      //   singup
      .addCase(register.pending, (state, action) => {
        console.log('pending ====> ');
      })
      .addCase(register.fulfilled, (state, action) => {
        console.log(action.payload);
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, (state, action) => {
        console.log('rejected ====> ');
      });
  },
});

export default authSlice.reducer;

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   extraReducers: builder => {
//     //   singup
//     builder
//       // .addCase(register.pending, (state, action) => state)
//       .addCase(register.fulfilled, (state, action) => {
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//         state.isLoggedIn = true;
//       })
//       // .addCase(register.rejected, (state, action) => state)
//       //   logIn
//       // .addCase(logIn.pending, (state, action) => state)
//       .addCase(logIn.fulfilled, (state, action) => {
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//         state.isLoggedIn = true;
//       })
//       //   logOut
//       .addCase(logOut.fulfilled, state => {
//         state.user = { name: null, email: null };
//         state.token = null;
//         state.isLoggedIn = false;
//       })
//       //   refresh
//       .addCase(refreshUser.pending, state => {
//         state.isRefreshing = true;
//       })
//       .addCase(refreshUser.fulfilled, (state, action) => {
//         state.user = action.payload;
//         state.isLoggedIn = true;
//       })
//       .addCase(refreshUser.rejected, state => {
//         state.isRefreshing = false;
//       });
//   },
// });
