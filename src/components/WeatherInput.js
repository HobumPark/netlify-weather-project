
import '../css/WeatherInput.css'
import { useState,useRef } from 'react'
import search from '../images/image__header-search.png';
import city_json from '../file/city.json';

function WeatherInput(props) {
    const [city, setCity] = useState('');
    const inputInfo = useRef();

    const inputCity = (e) => {
        console.log(e.target.value)
        setCity(e.target.value)
    }

    const searchWheater = () => {
        //alert('날씨 검색!')
        if(city===''){
            alert('도시를 입력하세요!')
            return
        }
        console.log(city_json.cityList)
        const cityList = city_json.cityList
        for(var i=0; i<cityList.length; i++){
            if(cityList[i].kor === city){
                //alert("find!")
                //alert(cityList[i].eng)

                const cityEng = cityList[i].eng
                const cityKor = cityList[i].kor

                props.searchWeather(cityEng,cityKor)   
            }
        }

        inputInfo.current.value=''//input clear
        setCity('')
    }

    const onKeyPress=(e)=>{
        if(e.key==='Enter'){
            searchWheater()
        }
    }

    return (
        <div id='weather-input'>
            <input type='text' placeholder='도시 입력' 
            onChange={inputCity} onKeyDown={onKeyPress}
            ref={inputInfo}/>
            <button onClick={searchWheater}>
                <img src={search}/>
            </button>
        </div>
    )
}

export default WeatherInput;