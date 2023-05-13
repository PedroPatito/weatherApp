import axios from "axios";
import React, { useState } from "react";

function App() {
  const [data, setdata] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=f8c4ccc810e2a51f29525d4d481160cf&units=metric`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setdata(response.data);
        console.log(response.data);
      });
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="search">
          <input
            className="input"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            onKeyPress={searchLocation}
            placeholder="Enter location"
            type="text"
          />
        </div>

        <section className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div>{data.main ? <h1>{data.main.temp}ºC</h1> : null}</div>
          <div className="description">
            <div className="innerDivDescription">
              {data.weather ? (
                <img
                  src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                  alt="icon"
                />
              ) : null}
              {data.weather ? <p>{data.weather[0].main}</p> : null}
            </div>
          </div>
        </section>
        <section className="bottom">
          <div className="feels">
            {data.main ? <p>{data.main.feels_like}ºC</p> : null}
            <p>feels like</p>
          </div>
          <div className="humidity">
            {data.main ? <p>{data.main.humidity}%</p> : null}
            <p>humidity</p>
          </div>
          <div className="wind">
            {data.main ? <p>{data.wind.speed}KM/H</p> : null}
            <p>wind speed</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
