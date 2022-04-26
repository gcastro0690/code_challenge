import { ForecastInfo } from '@src/utils/types';
import React from 'react';
import { hot } from 'react-hot-loader';

const ForecastCard: React.FC<ForecastInfo> = ({
  name,
  icon,
  shortForecast,
  detailedForecast,
}) => (
  <div key={name} className='forecast__forecastCard'>
    <img src={icon} alt={name} />
    <h2>{name}</h2>
    <h3>{shortForecast}</h3>
    <p>{detailedForecast}</p>
  </div>
);

export default hot(module)(ForecastCard);
