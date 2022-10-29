import './App.css';
import './styles/Sidebar.css';
import Navbar from './components/Navbar';
import WeatherDisplay from './components/WeatherDisplay';
import { useState, useEffect, useRef } from 'react';

function App() {
  const inputRef = useRef(null);
  const userCountry = Intl.DateTimeFormat()
    .resolvedOptions()
    .timeZone.split('/')[1];

  const [country, setCountry] = useState(userCountry);
  const [weather, setWeather] = useState('');
  const [forecast, setForecast] = useState('');

  const m3o = require('m3o').default(process.env.REACT_APP_M3O_API_TOKEN);

  useEffect(() => {
    async function weather(country) {
      let res = await m3o.weather.now({
        location: country,
      });
      // console.log('Now', res);
      setWeather(res);
      return;
    }
    async function forecast(country) {
      let rsp = await m3o.weather.forecast({
        days: 6,
        location: country,
      });
      // console.log('Forecast', rsp);
      setForecast(rsp);
      return;
    }

    weather(country);
    forecast(country);
  }, [country]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setCountry(inputRef.current.value);
  };

  return (
    <div className="App">
      <aside className="Aside-container">
        <h1>
          Weathy
          <br />
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;plan for future</span>
        </h1>
        <div>
          <form onSubmit={handleSubmit}>
            <label for="country">City : </label>
            <input type="text" id="country" ref={inputRef}></input>
            <button>Submit</button>
          </form>
        </div>
      </aside>
      <div className="right-side">
        <WeatherDisplay weather={weather} forecasts={forecast} />
      </div>
    </div>
  );
}

export default App;
