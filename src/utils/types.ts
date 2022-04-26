export type Forecast = {
  properties: { periods: [ForecastInfo] };
};

export type ForecastInfo = {
  number: string;
  name: string;
  icon: string;
  shortForecast: string;
  detailedForecast: string;
};

export type State = {
  name: string;
  state_code: string;
};

export type Option = {
  name: string;
  value: string;
};
