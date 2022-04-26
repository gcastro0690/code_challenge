import axios from 'axios';
import { Forecast } from './types';
/**
 * Checks if process NODE_ENV in 'development' mode
 */
export function inDev(): boolean {
  return process.env.NODE_ENV == 'development';
}

export function fetchForecastInfo(
  street: string,
  city: string,
  state: string,
  zip: string,
  callback: (response: Forecast) => void,
  error: (response: string) => void,
  setLoading: (loading: boolean) => void,
): void {
  setLoading(true);
  error(null);
  callback(null);
  axios
    .get(
      `https://geocoding.geo.census.gov/geocoder/locations/address?street=${street}&benchmark=2020&format=json&city=${city}&state=${state}&zip=${zip}`,
    )
    .then((response) => {
      axios
        .get(
          `https://api.weather.gov/points/${response.data.result.addressMatches[0].coordinates.y},${response.data.result.addressMatches[0].coordinates.x}`,
        )
        .then((response) => {
          axios.get(response.data.properties.forecast).then((response) => {
            callback(response.data);
          });
          setLoading(false);
        });
    })
    .catch(() => {
      error('The address is invalid');
      setLoading(false);
    });
}

export function fetchStates(
  callback: (response: string) => void,
  error: (response: string) => void,
  setLoading: (loading: boolean) => void,
): void {
  axios
    .post('https://countriesnow.space/api/v0.1/countries/states', {
      country: 'United States',
    })
    .then((response) => {
      setLoading(false);
      callback(response.data.data.states);
    })
    .catch(() => error('Error retrieving states'));
}

export function fetchCities(
  state: { name: string },
  callback: (response: string) => void,
  error: (response: string) => void,
  setLoading: (loading: boolean) => void,
): void {
  if (state) {
    setLoading(true);
    axios
      .post('https://countriesnow.space/api/v0.1/countries/state/cities', {
        country: 'United States',
        state: state.name,
      })
      .then((response) => {
        console.log(response);
        setLoading(false);
        callback(response.data.data);
      })
      .catch(() => {
        error('Error retrieving cities');
        setLoading(false);
      });
  }
}
