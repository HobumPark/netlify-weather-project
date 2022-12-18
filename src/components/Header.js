
import '../css/Header.css'
import logo from '../images/logo_white_cropped.png';

function Header() {
    return (
        <div id='header'>
            <div id='logo'>
                <a href="https://openweathermap.org/api">
                    <img src={logo}/>
                </a>
            </div>
            <div id='nav'>
                <h1>Open WeaterMap API 날씨 검색</h1>
            </div>
        </div>
    )
}

export default Header;