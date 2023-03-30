import React from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/images/not-found.svg';
import Wrapper from './../assets/wrappers/SharedLayout';

const Error = () => {
  return (
    <Wrapper>
      <div>
        <img src={img} alt="not found" />
        <h3>OHH !! Page not found</h3>
        <p>We cant'g seem to find the page your'e looking for</p>
        <Link to="/">back home</Link>
      </div>
    </Wrapper>
  );
};

export default Error;
