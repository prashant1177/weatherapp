import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./App.css";

export default function InfoBox({info}) {
 
  return (
    <>
    <hr/>
      <Card className="cardContainer">
        <CardContent>
          <div className="CityTemp">
          <Typography gutterBottom variant="h3" component="div">{info.city}
          </Typography>
          <Typography gutterBottom variant="h3" component="div">
         {info.temp}&deg;C
          </Typography>
          </div>
          <Typography variant="body2" color="text.secondary">
          Feels like: {info.feels_like}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          temp_max: {info.temp_max}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          temp_min: {info.temp_min}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          humidity: {info.humidity}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
