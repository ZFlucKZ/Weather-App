import '../styles/Weather.css';

function Weather(props) {
  // console.log(props);
  const weather = props.weather;

  return (
    <div className="weather-container">
      <h1>
        {weather.location}, {weather.country}
      </h1>
      <div className="weather weather-default">
        <h3>{weather.local_time}</h3>
        <img src={weather.icon_url} alt="Icon Weather"></img>
        <span>{weather.condition}</span>
        <p>{weather.temp_c} &#8451;</p>
        <p>Wind: {weather.wind_kph} km/hr</p>
      </div>
    </div>
  );
}

export default Weather;
