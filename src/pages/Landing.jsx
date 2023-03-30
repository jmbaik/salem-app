import React from 'react';
import Logo from './../components/Logo';
import main from '../assets/images/main.svg';
import Wrapper from './../assets/wrappers/LandingPage';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            Salem <span>Admin</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ut vel
            voluptates facilis incidunt adipisci doloribus blanditiis
            praesentium. Animi non hic nostrum corrupti accusamus voluptatibus
            cupiditate repudiandae aliquam laboriosam optio.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="salem main" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
