import { useState } from "react";
import SearchBox from "./SearchBox.jsx";
import InfoBox from "./InfoBox.jsx";
import React from "react";
import NavigationIcon from '@mui/icons-material/Navigation';
import { SvgIcon } from "@mui/material";
import "./App.css";

function App() {
  const [weatherInfo, setweatherInfo] = useState({});
  const [showInfo, setShowInfo] = useState(false);
  let [wind, setWind] = useState("45deg");

  let updateInfo = (result) => {
    setweatherInfo(result);
    setWind(weatherInfo.windDirection);
    console.log(wind);
    setShowInfo(true);
  };

  return (
    <div className="bodyContainer">
      <div className="containerMain">
        <SearchBox updateInfo={updateInfo} />
        {showInfo && (
          <>
            <InfoBox info={weatherInfo} />{" "}
          </>
        )}
<div className="windData">
        <NavigationIcon
          sx={{ fontSize: 200 }}
          id="windRotation"
          style={{ transform: `rotate(${wind}deg)`, color: "white"}}
        /> <h2 style={{color: "white"}}>Wind Direction</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
