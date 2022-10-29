import '../styles/WeatherDisplay.css';
import Weather from './Weather';
import Forecast from './Forecast';

function WeatherDisplay(props) {
  // console.log(props.forecasts.forecast);
  return (
    <div className="content-container">
      <Weather weather={props.weather} />
      <div className="forecast-container">
        <h2>Next Days..</h2>
        {props.forecasts &&
          props.forecasts.forecast.map((forecast, index) => (
            <Forecast forecast={forecast} key={index} />
          ))}
      </div>
    </div>
  );
}

export default WeatherDisplay;
