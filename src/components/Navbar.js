import '../styles/Navbar.css';

function Navbar(props) {
  const weather = props.weather;
  return (
    <nav className="navbar">
      <p>
        {weather.location}, {weather.country}
      </p>
      <div>
        <img src={weather.icon_url} alt="Icon Weather"></img>
        <p>{weather.condition}</p>
      </div>
      <p>Temperature: {weather.temp_c} &#8451;</p>
      <p>{weather.local_time}</p>
    </nav>
  );
}

export default Navbar;
