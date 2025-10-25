import React, { useState } from 'react'

function weatherApp() {
  const apiKey = "9effe9efbce8cac93228414c5c121915";
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const [search, setSearch] = useState(null);


  async function loadWeatherData(cityName){
    try{
      var response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apikey}");
      var weatherData = await response.json();
      setData(weatherData)
      console.log(weatherData);
    } catch (error) {
      
    }
  }
  return (
    <>
      <div className="weather-container">
        <div className="weather-box">

          <div className="search-bar">
            <input type="text" name='' placeholder='Search City' value={city} onChange={(input) => {setcity(input.target.value)}}/>
            <button onClick={()=> {setSearch(city)}}>Search</button>
          </div>

          {
            data == null
            ? <div><p>Loading...</p></div> : 
            <div className="weather-stats">
              <h1>{data.name}, {data.sys.country}</h1>

              <img src="https://openweathermap.org/img/w/10d@2x.png" alt="icon" />
            </div>
          }
        </div>
      </div>
    </>
  )
}

export default weatherApp