import React, { useEffect } from 'react';
import './header.scss';
import { useNavigate } from 'react-router-dom';
import { getMeServices } from '../../redux/services/auth-services';
import { useDispatch, useSelector } from 'react-redux';
import { logoutAction } from '../../redux/actions/auth-action';
import Cookies from "js-cookie";

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.AuthReducer)

  const loadUser = () => {
    dispatch(getMeServices())
  }

  useEffect(() => {
    loadUser()
  }, [])
  
  const logout = () => {
    dispatch(logoutAction())
    Cookies.remove('stom-token')
  }
  return (
    <div className='header'>
      <div>
        <h1>Erdent</h1>
      </div>
      {user !== '' ?
        <><h1>{user}</h1>
          <button
            onClick={logout}>logout</button>
        </> :
        <div>
          <button onClick={() => { navigate('/auth/register') }}>Register</button>
          <button onClick={() => { navigate('/auth/login') }}>Sign in</button>
        </div>
      }
    </div>
  );
};

export default Header;