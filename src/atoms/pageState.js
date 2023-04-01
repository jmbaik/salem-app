import { atom } from 'recoil';
// import { recoilPersist } from 'recoil-persist';

// const { persistAtom } = recoilPersist();

export const sidebarState = atom({
  key: 'sidebarState',
  default: false,
  // effects_UNSTABLE: [persistAtom],
});
