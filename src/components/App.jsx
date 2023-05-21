import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy } from 'react';
// import { selectIsRefreshing } from 'redux/auth/selectors';
import { useDispatch } from 'react-redux';
// useSelector
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/authThunk';
import RestrictedRoute from './RestrictedRoute';
import PrivateRoute from './PrivateRoute';

import Layout from './Layout/Layout';

// import HomePage from 'pages/HomePage';
// import LoginPage from 'pages/LoginPage';
// import RegisterPage from 'pages/RegisterPage';
// import ContactsPage from 'pages/ContactsPage';

const HomePage = lazy(() => import('pages/HomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));

export const App = () => {
  const dispatch = useDispatch();
  // const isRefreshing = useSelector(selectIsRefreshing);
  // console.log(isRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    // isRefreshing ? (
    //   <p>'Fething user data..'</p>
    // ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />}></Route>
        <Route
          path="/contacts"
          element={
            <PrivateRoute component={<ContactsPage />} redirectTo="/login" />
          }
        ></Route>
        <Route
          path="/login"
          element={
            <RestrictedRoute component={<LoginPage />} redirectTo="/contacts" />
          }
        ></Route>
        <Route
          path="/register"
          element={
            <RestrictedRoute
              component={<RegisterPage />}
              redirectTo="/contacts"
            />
          }
        ></Route>
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
    // );
  );
};
