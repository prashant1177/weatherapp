import "./App.css";

export default function InfoBox({ info }) {
  return (
    <>
      <div className="infocardContainer">
        <div className="cityname">
          <h1>{info.city ? info.city : "Mumbai"}, {info.country ? info.country : "IN"}</h1>
        </div>
        <div className="infoGrid">
          <div className="infoContainer"><span className="info"> {info.weather ? info.weather : "25"}</span><p>{info.weatherDesc}</p></div>
          <div className="infoContainer"><span className="info"> {info.temp ? info.temp : "25"}&deg;</span><p>Temperature</p></div>
        
          <div className="infoContainer"><span className="info"> {info.feels_like ? info.feels_like : "25"}&deg; </span><p>Feels Like</p></div>
          <div className="infoContainer"><span className="info"> {info.windSpeed ? info.windSpeed : "25"} </span><p>Wind (km/h)</p></div>

          <div className="infoContainer"><span className="info"> {info.humidity ? info.humidity : "25"} </span><p>Humidity</p></div>
          <div className="infoContainer"><span className="info"> {info.visibility ? (info.visibility/100) : "25"}</span><p>Visibility</p></div>
        </div>
      </div>
    </>
  );
}
