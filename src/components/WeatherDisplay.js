import '../styles/WeatherDisplay.css';
import Weather from './Weather';
import Forecast from './Forecast';

function WeatherDisplay(props) {
  // console.log(props);
  return (
    <div className="content-container">
      <Weather weather={props.weather} />
      <Forecast forecast={props.forecast} />
    </div>
  );
}

export default WeatherDisplay;
