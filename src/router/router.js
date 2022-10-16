import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignIn from '../components/auth/sign-in/';
import Register from '../components/auth/resister';
import Header from '../components/header';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Header/>}/>
      <Route path='/auth/login' element={<SignIn/>}/>
      <Route path='/auth/register' element={<Register/>}/>
    </Routes>
  );
};

export default Router;