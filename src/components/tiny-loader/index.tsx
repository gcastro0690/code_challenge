import React from 'react';
import { hot } from 'react-hot-loader';
import './index.scss';

const TinyLoader: React.FC = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 100 100'
    xmlSpace='preserve'
    className='tiny-loader'
  >
    <path fill='#757abf' d='M20 50h4v10h-4z'>
      <animateTransform
        attributeType='xml'
        attributeName='transform'
        type='translate'
        values='0 0; 0 20; 0 0'
        begin={0}
        dur='0.6s'
        repeatCount='indefinite'
      />
    </path>
    <path fill='#757abf' d='M30 50h4v10h-4z'>
      <animateTransform
        attributeType='xml'
        attributeName='transform'
        type='translate'
        values='0 0; 0 20; 0 0'
        begin='0.2s'
        dur='0.6s'
        repeatCount='indefinite'
      />
    </path>
    <path fill='#757abf' d='M40 50h4v10h-4z'>
      <animateTransform
        attributeType='xml'
        attributeName='transform'
        type='translate'
        values='0 0; 0 20; 0 0'
        begin='0.4s'
        dur='0.6s'
        repeatCount='indefinite'
      />
    </path>
  </svg>
);

export default hot(module)(TinyLoader);
