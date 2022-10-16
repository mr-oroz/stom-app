import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './register.css'
import { authServices } from '../../../http/auth-services';
const SignIn = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const data = await authServices.register({email, username, password})
      console.log(data)
      setUsername('')
      setPassword('')
      setEmail('')
    } catch(e) {
      console.log(e)
    }
  }
  return (
    <div className='container__auth'>
      <h1 className='title__register'>Register</h1>
      <form className='form-control' onSubmit={handleSubmit} action="#">
      <label htmlFor="">email</label>
        <input
          onChange={e => setEmail(e.target.value)}
          value={email}
          type="text"
          placeholder='email' />
        <label htmlFor="">name</label>
        <input
          onChange={e => setUsername(e.target.value)}
          value={username}
          type="text"
          placeholder='name' />
        <label htmlFor="">password</label>
        <input
          onChange={e => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder='password' />
        <button type='submit'>Войти</button>
        <Link to='/auth/login'>login</Link>
        <Link to='/'>Home</Link>
      </form>

    </div>
  );
};

export default SignIn;