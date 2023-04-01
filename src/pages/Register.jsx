import { useMutation } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import Wrapper from '../assets/wrappers/RegisterPage';
import FormRow from '../components/FormRow';
import Logo from '../components/Logo';
import { loginApi } from './../api/adminUserApi';
import { useRecoilState } from 'recoil';
import { adminUserState } from '../atoms/adminUserState';
import { useNavigate } from 'react-router-dom';
import { addUserToLocalStorage } from '../bundles/localStorage';

const Register = () => {
  const navigate = useNavigate();
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

  const [adminUserInfo, setAdminUserInfo] = useRecoilState(adminUserState);
  const { isLoading, mutate } = useMutation(['login', userData], loginApi);
  const onLogin = (e) => {
    e.preventDefault();
    mutate(userData, {
      onSuccess: (data) => {
        setAdminUserInfo(data);
        addUserToLocalStorage(data);
        console.log(adminUserInfo);
      },
      onError: (error) => {
        console.log(error);
      },
    });
  };
  useEffect(() => {
    if (adminUserInfo) {
      setTimeout(() => {
        navigate('/');
      }, 1000);
    }
  }, [adminUserInfo]);
  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onLogin}>
        <Logo />
        <h3>Login</h3>
        <FormRow type="email" name="email" handleChange={handleChange} />
        <FormRow type="text" name="phone" handleChange={handleChange} />
        <FormRow type="password" name="password" handleChange={handleChange} />
        <button type="submit" className="btn btn-block" disabled={isLoading}>
          로그인
        </button>
      </form>
    </Wrapper>
  );
};

export default Register;
