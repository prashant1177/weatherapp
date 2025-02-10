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
          <div className="title">
            <h1>Search Your City</h1>
          </div>
          <SearchBox updateInfo={updateInfo} />
          <InfoBox info={weatherInfo} />
          {/* {showInfo && (
          <>
            <InfoBox info={weatherInfo} />{" "}
          </>
        )} */}
          {/* <div className="windData">
          <NavigationIcon
            sx={{ fontSize: 160 }}
            id="windRotation"
            style={{
              transform: `rotate(${weatherInfo.windDirection}deg)`,
              color: "white",
            }}
          />{" "}
          <h2 style={{ color: "white" }}>Wind Direction</h2>
        </div> */}
        </div>
      </div>
    </>
  );
}

export default App;
