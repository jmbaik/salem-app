import { atom } from 'recoil';

export const adminUserState = atom({
  key: 'adminUserState',
  default: {
    email: '',
    phone: '',
    password: '',
    name: '',
    userId: '',
    cCode: '',
    adminLevel: '',
    churchName: '',
    regDate: '',
    updDate: '',
    token: '',
  },
});
