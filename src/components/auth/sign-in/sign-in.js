import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authServices } from '../../../http/auth-services';
import Cookies from 'js-cookie';
const SignIn = ({loadUser}) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
    
      const data = await authServices.signIn({username, password})
      Cookies.set('stom-token', data.data.auth_token)
      loadUser()
      setUsername('')
      setPassword('')
      navigate('/')
    } catch(e) {
      console.log(e)
      setLoading(false)
    } finally{
      setLoading(false)
    }
  }
  return (
    <div className='container__auth'>
      <h1>Login</h1>
      <form className='form-control' onSubmit={handleSubmit} action="#">
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
        <button type='submit'>{loading ? 'loading': 'sign in'}</button>
        <Link to='/auth/register'>register</Link>
        <Link to='/'>Home</Link>
      </form>
    </div>
  );
};

export default SignIn;