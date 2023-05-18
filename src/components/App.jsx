import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';

import HomePage from 'pages/HomePage';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import ContactsPage from 'pages/ContactsPage';

export const App = () => {
  return (
    <>
      {/* <div>Hello</div> */}

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="/contacts" element={<ContactsPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
        </Route>
      </Routes>
    </>
  );
};
