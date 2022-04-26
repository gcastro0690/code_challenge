import { Option } from '@src/utils/types';
import React from 'react';
import { hot } from 'react-hot-loader';

type Props = {
  value: string;
  name: string;
  id: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: [Option];
  className: string;
  withEmptyOption?: boolean;
};

const Select: React.FC<Props> = ({
  value,
  onChange,
  options,
  name,
  id,
  className,
  withEmptyOption,
}) => (
  <select
    name={name}
    id={id}
    value={value || ''}
    className={className}
    onChange={onChange}
  >
    <>
      {withEmptyOption && (
        <option key={`_empty_${name}`} value={''}>
          {'Select...'}
        </option>
      )}
      {options.map((item: Option) => (
        <option key={item.value} value={item.value}>
          {item.name}
        </option>
      ))}
    </>
  </select>
);

export default hot(module)(Select);
