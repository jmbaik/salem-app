import React from 'react';
import Wrapper from '../assets/wrappers/RegisterPage';
import Logo from '../components/Logo';

const Register = () => {
  return (
    <Wrapper className="full-page">
      <form className="form">
        <Logo />
        <h3>Login</h3>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input type="text" name="name" className="form-input" />
        </div>
        <button type="submit" className="btn btn-block">
          로그인
        </button>
      </form>
    </Wrapper>
  );
};

export default Register;
