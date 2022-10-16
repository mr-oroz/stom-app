import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import SignIn from './components/auth/sign-in/sign-in';
import Register from './components/auth/resister/register';
import './App.css';
import Cookies from 'js-cookie';
import { authServices } from './http/auth-services';
const App = () => {
  const [username, setUsername] = useState('')
  const loadUser = async () => {
    const data = await authServices.getMe()
    setUsername(data.data.username)
  }
  useEffect(() => {
    loadUser()
  }, [])

  const logout = async () => {
    const data = await authServices.logout()
    console.log(data)
    Cookies.remove('stom-token')
    setUsername('')
  }
  return (
    <BrowserRouter>
      <div className='App'>
        Auth
        {username ? <div>
          <h1>{username}</h1>
          <button onClick={logout}>logout</button>
        </div> : <div>
          <Link to='/auth/login'>login</Link>
          <Link to='/auth/register'>Register</Link>
        </div>}
        <div className='auth'>
          <Routes>
            <Route path='/auth/login' element={<SignIn loadUser={loadUser} />} />
            <Route path='/auth/register' element={<Register />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;