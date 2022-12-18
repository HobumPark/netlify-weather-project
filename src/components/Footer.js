
import '../css/Footer.css'
import icon_facebook from '../images/icon_facebook.png';
import icon_twitter from '../images/icon_twitter.png';
import icon_linkedin from '../images/icon_linkedin.png';
import icon_medium from '../images/icon_medium.png';
import icon_telegram from '../images/icon_telegram.png';
import icon_github from '../images/icon_github.png';

function Footer() {
    return (
        <div id='footer'>
            <div id='footer-left'>
                <span>
                    Supplier of Achilles UVDB community
                </span>
                <span>
                    © 2012 — 2022 OpenWeather ® All rights reserved    
                </span>       
            </div>
            <div id='footer-right'>
                <ul>
                    <li>
                        <a href="https://www.facebook.com/groups/270748973021342/?mibextid=6NoCDW">
                            <img src={icon_facebook}/>
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/OpenWeatherMap">
                            <img src={icon_twitter}/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/uas/login?session_redirect=%2Fcompany%2F9816754">
                            <img src={icon_linkedin}/>
                        </a>
                    </li>
                    <li>
                        <a href="https://openweathermap.medium.com/">
                            <img src={icon_medium}/>
                        </a>
                    </li>
                    <li>
                        <a href="https://t.me/openweathermap">
                            <img src={icon_telegram}/>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/search?q=openweathermap&ref=cmdform">
                            <img src={icon_github}/>
                        </a>
                    </li>
                </ul>
            </div>
            
        </div>
    )
}

export default Footer;