import { atom } from 'recoil';
// import { recoilPersist } from 'recoil-persist';
import { getUserFromLocalStorage } from '../bundles/localStorage';

// const { persistAtom } = recoilPersist();

export const adminUserState = atom({
  key: 'adminUserState',
  default: getUserFromLocalStorage(),
  /*
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
  effects_UNSTABLE: [persistAtom],
  */
});
