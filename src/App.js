import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './components/auth/sign-in/sign-in';
import Register from './components/auth/resister/register';
const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        Auth
        <Routes>
          <Route path='/auth/login' element={<SignIn/>}/>
          <Route path='/auth/register' element={<Register/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;