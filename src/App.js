import './App.css';
import './styles/Sidebar.css';
import Navbar from './components/Navbar';
import WeatherDisplay from './components/WeatherDisplay';
import Todolist from './components/Todolist';
import { useState, useEffect, useRef } from 'react';
import logo from './images/logo.png';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  const inputRef = useRef(null);
  const userCountry = Intl.DateTimeFormat()
    .resolvedOptions()
    .timeZone.split('/')[1];

  const [country, setCountry] = useState(userCountry);
  const [weather, setWeather] = useState('');
  const [forecast, setForecast] = useState('');
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(true);

  const m3o = require('m3o').default(process.env.REACT_APP_M3O_API_TOKEN);

  async function weatherAPI(country) {
    setErr('');
    let res = await m3o.weather.now({
      location: country,
    });
    // console.log('Now', res);
    setWeather(res);

    let rsp = await m3o.weather.forecast({
      days: 7,
      location: country,
    });
    rsp.forecast.shift();
    // console.log('Forecast', rsp.forecast);
    setForecast(rsp);
    setLoading(false);
  }

  useEffect(() => {
    weatherAPI(country).catch((e) => setErr(e.detail));
  }, [country]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setCountry(inputRef.current.value);
    setLoading(true);
  };

  return (
    <Router>
      <div className="App">
        <aside className="Aside-container">
          <div>
            <h1>Weathy</h1>
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;plan
              for future
            </span>
          </div>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/todo">To do List</Link>
              </li>
            </ul>
          </div>
          <div className="form-container">
            <form onSubmit={handleSubmit} className="input-form">
              <label htmlFor="country">City:</label>
              <input type="text" id="country" ref={inputRef}></input>
              <button>Submit</button>
            </form>
            {err ? <small>{err}</small> : <br />}
          </div>
          <footer>
            <img src={logo} alt="My logo"></img>
            <br />
            <small>© 2022 Pajjaphon Whanchid. All Rights Reserved.</small>
          </footer>
        </aside>
        <div className="right-side">
          <Routes>
            <Route
              path="/"
              element={
                <WeatherDisplay
                  weather={weather}
                  forecasts={forecast}
                  loading={loading}
                />
              }
            />
            <Route
              path="/todo"
              element={<Todolist weather={weather} loading={loading} />}
            />
          </Routes>
          {/* <WeatherDisplay weather={weather} forecasts={forecast} /> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
