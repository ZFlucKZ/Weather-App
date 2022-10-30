import '../styles/Navbar.css';
import LoadingNavbar from './LoadingNavbar';

function Navbar(props) {
  // console.log(props);
  let loading = props.loading;
  const weather = props.weather;
  return (
    <nav className="navbar">
      {loading ? (
        <LoadingNavbar />
      ) : (
        <p>
          {weather.location}, {weather.country}
        </p>
      )}
      <div>
        {loading ? (
          <LoadingNavbar />
        ) : (
          <img src={weather.icon_url} alt="Icon Weather"></img>
        )}
        <p>{weather.condition}</p>
      </div>
      {loading ? (
        <LoadingNavbar />
      ) : (
        <p>Temperature: {weather.temp_c} &#8451;</p>
      )}
      {loading ? <LoadingNavbar /> : <p>{weather.local_time}</p>}
    </nav>
  );
}

export default Navbar;
