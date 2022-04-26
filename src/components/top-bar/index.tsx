import React from 'react';
import { hot } from 'react-hot-loader';
import './index.scss';

const TopBar: React.FC = () => (
  <header className='topBar container-flow'>
    <div className='container d-flex justify-content-center align-items-center pt-3 pb-3 position-relative'>
      <img
        className='position-absolute'
        alt='logo'
        src='assets/images/logo.png'
      ></img>
      <h1 className='m-0'>The Weather App</h1>
    </div>
  </header>
);

export default hot(module)(TopBar);
