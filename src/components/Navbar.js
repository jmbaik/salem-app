import Wrapper from '../assets/wrappers/Navbar';
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa';
import Logo from './Logo';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { sidebarState } from '../atoms/pageState';
import { adminUserState } from '../atoms/adminUserState';
import { removeUserFromLocalStorage } from '../bundles/localStorage';
import { toast } from 'react-toastify';
import { Avatar, Stack } from '@mui/material';

const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useRecoilState(sidebarState);
  const [user, setUser] = useRecoilState(adminUserState);

  const toggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const clearStore = (payload) => {
    removeUserFromLocalStorage();
    toast.success(payload);
    setTimeout(() => {
      setUser(null);
    }, 1000);
  };

  return (
    <Wrapper>
      <div className="nav-center">
        <button type="button" className="toggle-btn" onClick={toggle}>
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <Stack direction="row">
            <Avatar
              alt={user.churchName}
              src={user.pic}
              sx={{ width: 50, height: 50 }}
            />
            <h3 className="logo-text"> {user.churchName}</h3>
          </Stack>
        </div>
        <div className="btn-container">
          <button
            type="button"
            className="btn"
            onClick={() => setShowLogout(!showLogout)}
          >
            <FaUserCircle />
            {user?.name}
            <FaCaretDown />
          </button>
          <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
            <button
              type="button"
              className="dropdown-btn"
              onClick={() => clearStore('Logging out...')}
            >
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Navbar;
