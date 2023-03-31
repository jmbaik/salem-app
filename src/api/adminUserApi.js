import apiFetch from './../bundles/axios';

export const loginApi = async (userData) => {
  const response = await apiFetch.post('/admin-user/login', userData);
  console.log('loginApi result -----------');
  console.log(response.data);
  return response.data.result;
};
