import '../styles/LoadingNavbar.css';

function LoadingNavbar() {
  // console.log(props.forecasts.forecast);
  return (
    <div className="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default LoadingNavbar;
