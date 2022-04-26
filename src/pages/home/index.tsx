import Input from '@src/components/input';
import {
  fetchForecastInfo,
  fetchStates,
  fetchCities,
} from '@src/utils/helpers';
import React, { useEffect, useState } from 'react';
import { hot } from 'react-hot-loader';
import { TopBar, TinyLoader, Loader, Forecast } from '@src/components';
import { State } from '@src/utils/types';
import Select from '@src/components/select';

const Main: React.FC = () => {
  const [street, setStreet] = useState('');
  const [city, setCity] = useState(null);
  const [state, setState] = useState(null);
  const [states, setStates] = useState(null);
  const [cities, setCities] = useState(null);
  const [zip, setZip] = useState('');
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [loadingCities, setLoadingCities] = useState(false);

  useEffect(() => {
    fetchStates(setStates, setError, setLoading);
  }, []);

  useEffect(() => {
    fetchCities(state, setCities, setError, setLoadingCities);
  }, [state]);

  const handleSubmit = () => {
    fetchForecastInfo(
      street,
      city,
      state.state_code,
      zip,
      setForecast,
      setError,
      setLoading,
    );
  };

  return (
    <>
      <TopBar />

      <div className='container d-flex flex-column align-items-center'>
        <div className='mt-4 mw-50 d-flex flex-column align-items-center'>
          <Input onChange={setStreet} value={street} />
          <div className='mt-2 mb-2 position-relative'>
            <Select
              withEmptyOption
              onChange={(e) =>
                setState(
                  states.find(
                    (i: { state_code: string }) =>
                      i.state_code === e.target.value,
                  ),
                )
              }
              name='states'
              id='states'
              value={state ? state.state_code : ''}
              className='form-control w-100'
              options={
                states
                  ? states.map((state: State) => ({
                      name: state.name,
                      value: state.state_code,
                    }))
                  : []
              }
            />

            {loadingCities && <TinyLoader />}
          </div>
          {state && !loadingCities && (
            <Select
              withEmptyOption
              onChange={(e) => setCity(e.target.value)}
              name='cities'
              id='cities'
              value={city || ''}
              className='form-control m-2 w-100'
              options={
                cities
                  ? cities.map((city: string) => ({
                      name: city,
                      value: city,
                    }))
                  : []
              }
            />
          )}
          {city && <Input onChange={setZip} value={zip} />}
          {street && state && city && zip && (
            <button
              type='button'
              className='btn btn-primary mt-4'
              onClick={handleSubmit}
            >
              Go for it!
            </button>
          )}
        </div>
        <br />
        {loading ? (
          <Loader />
        ) : error ? (
          error
        ) : (
          <Forecast forecast={forecast} />
        )}
      </div>
    </>
  );
};

export default hot(module)(Main);
