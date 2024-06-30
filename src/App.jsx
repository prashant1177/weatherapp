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
    <div className="bodyContainer">
      <div className="containerMain">
          <SearchBox updateInfo={updateInfo} />
          {showInfo && (
            <>
              <InfoBox info={weatherInfo} />{" "}
            </>
          )}
        </div>
    </div>
  );
}

export default App;
