import React, { useState } from 'react';
import './sign-in.scss';
import Logo from '../../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { loginServices, getMeServices } from '../../../redux/services/auth-services';
import { useSelector, useDispatch } from 'react-redux';
import { clearError, hideLoading, showLoading } from '../../../redux/actions/global-action';
import {useNavigate} from 'react-router-dom';
const SignIn = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { loading, error } = useSelector(state => state.globalReducer)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(showLoading())
    dispatch(clearError())
    try {
      getMeServices()
      await loginServices({ username, password })
      setPassword('')
      setUsername('')
    } catch (e) {
      console.log(e)
    } finally {
      dispatch(hideLoading())
      navigate('/')
    }
  }
  return (
    <div className='auth'>
      <div className='logo'>
        <img src={Logo} alt="" />
        <h1>Здравствуйте</h1>
      </div>
      <form onSubmit={handleSubmit} className='form-control' action="">
        <div className="auth__login">
          <input
            onChange={e => setUsername(e.target.value)}
            value={username}
            placeholder='Имя пользователя'
            type="text" />
        </div>
        <div className="auth__password">
          <input
            onChange={e => setPassword(e.target.value)}
            value={password}
            placeholder='Пароль'
            type="password" />
        </div>
        <div className="auth__remember">
          <input type="checkbox" />
          <span>Запомнить меня</span>
        </div>
        <div className="auth__btn">
          <button type='submit'>{loading ? 'Загрузка...' : 'Войти'}</button>
        </div>
        <div className='auth__route'>
          <span>Уже есть аккаунт? </span> <Link to='/auth/register'>Войдите</Link>
        </div>
      </form>
    </div>
  );
};

export default SignIn;