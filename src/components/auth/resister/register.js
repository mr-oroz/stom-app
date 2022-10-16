import React, { useState } from 'react';
import './register.scss';
import Logo from '../../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { clearError, showLoading, showError, hideLoading } from '../../../redux/actions/global-action';
import { registerServices } from '../../../redux/services/auth-services';

const Register = () => {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { loading, error } = useSelector(state => state.globalReducer)
  const dispatch = useDispatch()

  console.log(loading)

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(showLoading())
    dispatch(clearError)
    try {
      await registerServices({email, username, password})
      setEmail('')
      setPassword('')
      setUsername('')
    } catch (e) {
      dispatch(showError('ой что то не так!'))
    } finally {
      dispatch(hideLoading())
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
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            placeholder='Имя пользователя' 
            type="text" />
        </div>
        <div className="auth__password">
          <input 
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder='Пароль' 
            type="password" />
        </div>
        <div className="auth__password">
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder='Email'
            type="text" />
        </div>
        <div className="auth__remember">
          <input type="checkbox" />
          <span>Запомнить меня</span>
        </div>
        <div className="auth__btn">
          <button type='submit'>{loading ? 'Загрузка...' : 'Зарегистрироваться'}</button>
        </div>
        <div className='auth__route'>
          <span>Нет ещё аккаунта?</span> <Link to='/auth/login'>Зарегистрируйтесь</Link>
        </div>
      </form>
    </div>
  );
};

export default Register;