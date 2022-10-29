import '../styles/Weather.css';

function Weather(props) {
  console.log(props);
  const weather = props.weather;

  return (
    <div className="weather-container">
      <h1>
        {weather.location}, {weather.country}
      </h1>
      <div>
        <h2>Today</h2>
        <p>description</p>
        <p>temperature</p>
        <p>wind</p>
      </div>
    </div>
  );
}

export default Weather;
