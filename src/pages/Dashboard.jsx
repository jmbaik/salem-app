import React from 'react';
import { useRecoilValue } from 'recoil';
import { adminUserState } from '../atoms/adminUserState';

const Dashboard = () => {
  const userInfo = useRecoilValue(adminUserState);
  // console.log(userInfo?.email);
  return <div>Dashboard</div>;
};

export default Dashboard;
