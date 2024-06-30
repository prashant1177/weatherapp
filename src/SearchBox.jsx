import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import { useState } from "react";

export default function SearchBox({updateInfo}) {
    let [error, setError] = useState(false);
    let [city, setCity] = useState("");
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "15f7824839b1dd07ca942458fd27692c";

    let getWeatherInfo = async()=>{
      try{
       let response =  await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
       let jsonResponse = await response.json();
       console.log(jsonResponse);
       let result ={
        city: city,
        temp: jsonResponse.main.temp,
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
        updateInfo(newInfo);
        setError(false);}
        catch(err){
          setError(true);
        }
    };

  return (
    <>
      <h3>Search for the weather </h3>
      <form onSubmit={handleSubmit}>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" required value={city} onChange={handleChange}/>
        <Button variant="contained" type="submit">Search</Button>
        {error && <p>No Such city found</p>}
      </form>
    </>
  );
}
 