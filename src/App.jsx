import { useState } from "react";
import SearchBox from "./SearchBox.jsx";
import InfoBox from "./InfoBox.jsx";
import React from "react";

function App() {
  const [weatherInfo, setweatherInfo] = useState({
    city: 'Pune',
    temp: '30',
  });

  let updateInfo = (result)=>{
    setweatherInfo(result);
  };
  return (
    <>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo} />
    </>
  );
}

export default App;
