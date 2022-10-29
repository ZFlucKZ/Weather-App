import '../styles/Forecast.css';

function Forecast(props) {
  // console.log(props);
  let condition = props.forecast.condition.split(' ');
  let conditionFilter = condition.filter(
    (word) =>
      word.toLowerCase() === 'rain' ||
      word.toLowerCase() === 'sunny' ||
      word.toLowerCase() === 'cloudy' ||
      word.toLowerCase() === 'clear'
  );
  // console.log(conditionFilter);
  conditionFilter = conditionFilter[0].toLowerCase();

  return (
    <div
      className={'forecast ' + (conditionFilter ? conditionFilter : 'default')}
    >
      <h3>{props.forecast.date}</h3>
      <img src={props.forecast.icon_url} alt="Icon Weather"></img>
      <span>{props.forecast.condition}</span>
      <span>rain: {props.forecast.chance_of_rain} %</span>
      <p>
        Temp.: {props.forecast.min_temp_c} - {props.forecast.max_temp_c} &#8451;
      </p>
      <p>Wind: {props.forecast.max_wind_kph} km/hr</p>
    </div>
  );
}

export default Forecast;
