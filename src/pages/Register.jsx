import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react';
import Wrapper from '../assets/wrappers/RegisterPage';
import FormRow from '../components/FormRow';
import Logo from '../components/Logo';
import { loginApi } from './../api/adminUserApi';

const Register = () => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
    phone: '',
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
    // console.log(userData);
  };
  const login = useMutation(loginApi);
  const onLogin = (e) => {
    e.preventDefault();
    login.mutate(userData, {
      onSuccess: (data) => {
        console.log('mutate result ----------');
        console.log(data);
      },
      onError: (error) => {
        console.log(error);
      },
    });
  };
  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onLogin}>
        <Logo />
        <h3>Login</h3>
        <FormRow type="email" name="email" handleChange={handleChange} />
        <FormRow type="text" name="phone" handleChange={handleChange} />
        <FormRow type="password" name="password" handleChange={handleChange} />
        <button type="submit" className="btn btn-block">
          로그인
        </button>
      </form>
    </Wrapper>
  );
};

export default Register;
