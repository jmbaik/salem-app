import Wrapper from '../assets/wrappers/SmallSidebar';
import { FaTimes } from 'react-icons/fa';
import Logo from './Logo';
import NavLinks from './NavLinks';
import { useRecoilState } from 'recoil';
import { sidebarState } from '../atoms/pageState';

const SmallSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useRecoilState(sidebarState);

  const toggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <Wrapper>
      <div
        className={
          isSidebarOpen ? 'sidebar-container show-sidebar' : 'sidebar-container'
        }
      >
        <div className="content">
          <button className="close-btn" onClick={toggle}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <NavLinks toggleSidebar={toggle} />
        </div>
      </div>
    </Wrapper>
  );
};
export default SmallSidebar;
