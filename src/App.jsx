import { useState } from "react";
import SearchBox from "./SearchBox.jsx";
import InfoBox from "./InfoBox.jsx";
import React from "react";
import "./App.css";

function App() {
  const [weatherInfo, setweatherInfo] = useState({});
  const [showInfo, setShowInfo] = useState(false);

  let updateInfo = (result) => {
    setweatherInfo(result);
    setShowInfo(true);
  };

  return (
    <>
      <div className="bodyContainer">
        <div className="containerMain">
          
          <SearchBox updateInfo={updateInfo} />
          {showInfo ? (
            <InfoBox info={weatherInfo} />
          ) : (
            <div className="title">
              <h1>Search Your City</h1>
            </div>
          )}
        </div>
        <a className="logoTitle" href="https://github.com/prashant1177/weatherapp" target="_blank">
            <img src="./falcon.png" alt="falcon"/>
            <h2>Weather App - Github &#8599;</h2>
            
          </a>
      </div>
    </>
  );
}

export default App;
