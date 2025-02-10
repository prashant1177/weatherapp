
import { useState } from "react";
import "./App.css";

export default function SearchBox({updateInfo}) {
    let [error, setError] = useState(false);
    let [city, setCity] = useState("");
    let [visibility, setvisibility] = useState("100");
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "15f7824839b1dd07ca942458fd27692c";

    let getWeatherInfo = async()=>{
      try{
       let response =  await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
       let jsonResponse = await response.json();
       console.log(jsonResponse);
       let result ={
        city: jsonResponse.name,
        weather: jsonResponse.weather[0].main,
        weatherDesc: jsonResponse.weather[0].description,
        country: jsonResponse.sys.country,
        temp: jsonResponse.main.temp,
        feels_like: jsonResponse.main.feels_like,
        temp_max: jsonResponse.main.temp_max,
        temp_min: jsonResponse.main.temp,
        humidity: jsonResponse.main.humidity,
        windDirection: jsonResponse.wind.deg,
        windSpeed: jsonResponse.wind.speed,
        visibility: jsonResponse.visibility,
       }
       setError(false);
       return result;
      }catch(err){
        throw err;
      }
    };
    let handleChange = (evt) =>{
        setCity(evt.target.value);
    };
    let handleSubmit = async(evt) =>{
      try{
        evt.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await getWeatherInfo();
        imageBG(newInfo);
        updateInfo(newInfo);
        setvisibility(newInfo.visibility/100);
        console.log(visibility);
        setError(false);
      }
        catch(err){
          console.log(err);
          setError(true);
        }
    };
    const [bgImage, setbgImage] = useState(
      "https://cdn.pixabay.com/photo/2024/04/24/08/02/ai-generated-8716913_960_720.jpg"
    );
    function imageBG(newInfo) {
      if (newInfo.humidity > 75) {
        setbgImage(
          "https://cdn.pixabay.com/photo/2023/09/10/05/12/ai-generated-8244282_960_720.png"
        );
      } else {
        if (newInfo.temp > 28) {
          setbgImage(
            "https://cdn.pixabay.com/photo/2024/04/24/08/02/ai-generated-8716913_960_720.jpg"
          );
        } else if (newInfo.temp < 28 && newInfo.temp > 15) {
          setbgImage(
            "https://cdn.pixabay.com/photo/2024/04/27/19/35/ai-generated-8724273_960_720.png"
          );
        } else {
          setbgImage(
            "https://cdn.pixabay.com/photo/2020/01/04/18/40/trees-4741364_960_720.png"
          );
        }
      }
      console.log(bgImage);
    }

  return (
    <>
      {/* <img className="bgImages" src={bgImage} style={{opacity: `${visibility}`}}/> */}
    <div className="searchBoxContainer cardContainer" >
      <form onSubmit={handleSubmit} className="formContainer" >
        <input  margin="normal" className="tfSearch" id="outlined-basic" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
        <button className="btnSearch" variant="contained" type="submit">Search</button>
        {error && <p>No Such city found</p>}
      </form>
    </div>
    </>
    
  );
}
 

// #ffdef2	(255,222,242)
// #f2e2ff	(242,226,255)
// #e2eeff	(226,238,255)
// #ddfffc	(221,255,252)
// #ffffe3	(255,255,227)