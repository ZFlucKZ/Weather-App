import '../styles/WeatherDisplay.css';
import Weather from './Weather';
import Forecast from './Forecast';
import Loading from './Loading';

function WeatherDisplay(props) {
  let loading = props.loading;
  // console.log(props.forecasts.forecast);
  return (
    <div className="content-container">
      {loading ? <Loading /> : <Weather weather={props.weather} />}
      <div className="forecast-container">
        {loading ? <p></p> : <h2>Next Days..</h2>}
        {!loading &&
          props.forecasts &&
          props.forecasts.forecast.map((forecast, index) => (
            <Forecast forecast={forecast} key={index} />
          ))}
      </div>
    </div>
  );
}

export default WeatherDisplay;
