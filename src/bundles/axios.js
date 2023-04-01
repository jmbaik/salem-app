import axios from 'axios';
import { getUserFromLocalStorage } from './localStorage';

const apiFetch = axios.create({
  baseURL: 'http://localhost:8080/api',
});

apiFetch.interceptors.request.use((config) => {
  const user = getUserFromLocalStorage();
  if (user?.email) {
    config.headers['Authorization'] = `Bearer ${user?.token}`;
  }
  return config;
});

export default apiFetch;
