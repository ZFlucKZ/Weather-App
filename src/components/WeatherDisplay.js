import '../styles/WeatherDisplay.css';
import Weather from './Weather';
import Forecast from './Forecast';
import Loading from './Loading';

function WeatherDisplay(props) {
  // console.log(props.weather.condition);
  let loading = props.loading;
  let conditionFilter;

  if (props.weather.condition != undefined) {
    let condition = props.weather.condition.split(' ');
    conditionFilter = condition.filter(
      (word) =>
        word.toLowerCase() === 'rain' ||
        word.toLowerCase() === 'sunny' ||
        word.toLowerCase() === 'cloudy' ||
        word.toLowerCase() === 'clear' ||
        word.toLowerCase() === 'overcast'
    );

    conditionFilter = conditionFilter[0].toLowerCase() + '-cloud';
  }

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
      <div className="center-1">
        <div
          className={
            'cloud ' + (conditionFilter ? conditionFilter : 'default-cloud')
          }
        ></div>
      </div>
      <div className="center-2">
        <div
          className={
            'cloud ' + (conditionFilter ? conditionFilter : 'default-cloud')
          }
        ></div>
      </div>
      <div className="center-3">
        <div
          className={
            'cloud ' + (conditionFilter ? conditionFilter : 'default-cloud')
          }
        ></div>
      </div>
      <div className="center-4">
        <div
          className={
            'cloud ' + (conditionFilter ? conditionFilter : 'default-cloud')
          }
        ></div>
      </div>
      <div className="center-5">
        <div
          className={
            'cloud ' + (conditionFilter ? conditionFilter : 'default-cloud')
          }
        ></div>
      </div>
      <div className="center-6">
        <div
          className={
            'cloud ' + (conditionFilter ? conditionFilter : 'default-cloud')
          }
        ></div>
      </div>
      <div className="center-7">
        <div
          className={
            'cloud ' + (conditionFilter ? conditionFilter : 'default-cloud')
          }
        ></div>
      </div>
    </div>
  );
}

export default WeatherDisplay;
