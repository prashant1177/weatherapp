
import { useState } from "react";
import "./App.css";

export default function SearchBox({updateInfo}) {
    let [error, setError] = useState(false);
    let [city, setCity] = useState("");
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "15f7824839b1dd07ca942458fd27692c";
    
    let getWeatherInfo = async()=>{
      try{
       let response =  await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
       let jsonResponse = await response.json();
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
        setCity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
        setError(false);
      }
        catch(err){
          setError(true);
        }
    };
   

  return (
    <>
    <div className="searchBoxContainer cardContainer" >
      <form onSubmit={handleSubmit} className="formContainer" >
        <input  margin="normal" className="tfSearch" id="outlined-basic" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
        <button className="btnSearch" variant="contained" type="submit">Search</button>
        {error && <p className="error">No Such city found</p>}
      </form>
    </div>
    </>
    
  );
}
 
