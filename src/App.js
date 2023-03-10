import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import Home from './pages/Home';
import Profile from './dashboard/Profile';
import ErrorPage from './pages/ErrorPage';
import Register from './pages/Register';
import Login from './pages/Login';
import Layout from './layouts/Layout';
import PrivateRoute from './privateRoute/PrivateRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

function Root() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default Root;