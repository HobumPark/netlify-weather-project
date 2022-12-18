
import {useState,useEffect} from 'react'
import axios from 'axios';
import Header from './components/Header.js';
import WeatherInput from './components/WeatherInput.js';
import WeatherResult from './components/WeatherResult.js';
import Footer from './components/Footer.js';
import './App.css';

function App(){

  const [weatherInfo,setWeatherInfo]=useState( { 
    cityEng:'',cityKor:'',
    temp:'',tempFeels:'',
    humidity:'',weather:'',wind:''
  })

  useEffect(() => {
   
  }, []);

  const searchWeather=async(cityEng,cityKor)=>{
    const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityEng}&APPID=7dcf3a3bb5e04228b5a4249f1823dbf4`)
    console.log(result)
    console.log(result.data.main)
    console.log(result.data.main.temp)//온도
    console.log(result.data.main.feels_like)//체감온도
    console.log(result.data.main.humidity)//습도
    console.log(result.data.weather)//날씨정보
    console.log(result.data.weather[0].main)//Clouds,Sunny...
    console.log(result.data.name)//도시이름

    const temp = result.data.main.temp
    const feelsLike = result.data.main.feels_like
    const humidity = result.data.main.humidity
    const weather = result.data.weather[0].main
    const wind = result.data.wind.speed

    const weatherInfo 
    = { 
        cityEng:cityEng,cityKor:cityKor,
        temp:temp,tempFeels:feelsLike,
        humidity:humidity,weather:weather,wind:wind
      }

    setWeatherInfo(weatherInfo)
  }

  return(
    <div className='App'>
      <Header />
      <WeatherInput searchWeather={searchWeather} />
      <WeatherResult weatherInfo={weatherInfo}/>
      <Footer /> 
    </div>
  )
}

export default App;
 