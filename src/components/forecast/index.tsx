import React from 'react';
import { hot } from 'react-hot-loader';
import { Forecast, ForecastInfo } from '@src/utils/types';
import ForecastCard from './partials/forecast-card';
import './index.scss';

type Props = {
  forecast: Forecast;
};

const Forecast: React.FC<Props> = ({ forecast }) => (
  <div className='forecast d-flex flex-wrap justify-content-around'>
    {forecast &&
      forecast.properties.periods.map((forecast: ForecastInfo) => (
        <ForecastCard key={forecast.number} {...forecast} />
      ))}
  </div>
);

export default hot(module)(Forecast);
