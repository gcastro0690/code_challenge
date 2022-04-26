import React from 'react';
import { hot } from 'react-hot-loader';

type Props = {
  value: string;
  onChange: (text: string) => void;
};

const Input: React.FC<Props> = ({ value, onChange }) => (
  <input
    type='text'
    className='form-control m-2'
    value={value}
    onChange={(event) => onChange(event.target.value)}
  />
);

export default hot(module)(Input);
