import React from 'react';
import { Link } from 'react-router-dom';
const SignIn = () => {
  return (
    <div>
      <h1>Login</h1>
      <Link to='/auth/register'>
        Login
      </Link>
    </div>
  );
};

export default SignIn;