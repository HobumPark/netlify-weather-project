
import '../css/WeatherResult.css'

function WeatherResult(props) {
    const {cityEng,cityKor,temp,weather,tempFeels,humidity,wind}=props.weatherInfo;
    const celsiusTemp = (temp-273.15).toFixed(1)
    const celsiusTempFeels = (tempFeels-273.15).toFixed(1)
    return (
        <div id='weather-result'>
            {
                (cityKor !=='')?
                <div id='weather-info'>
                    <div id='weather-info-header'>
                        <span>현재 <b>{cityKor}</b> 날씨</span>
                    </div>
                    <div id='weather-info-main'>
                        <div id='weather-info-main-top'>
                            <img src={`/images/${weather}.svg`}></img>
                            <span>{celsiusTemp}°</span>
                        </div>
                        <div id='weather-info-main-mid'>
                            <span>
                                체감:<b>{celsiusTempFeels}°</b>
                            </span>
                            <span>
                                습도:<b>{humidity}%</b>
                            </span>
                            <span>
                                바람:<b>{wind}m/s</b>
                            </span>
                        </div>
                        
                    </div>
                    <div id='weather-info-footer'>

                    </div>
                </div>:
                ''
            }
        </div>
    )
}

export default WeatherResult;