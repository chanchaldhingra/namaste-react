import { useState } from "react";
import logoImage from "../../assets/logo-image.png";
import {Link} from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

    const [loginBtn, setLoginBtn] = useState("Login");

    const onlineStatus = useOnlineStatus();

    return (
        <div className="header">
            <div className="logo-container">
                <Link to="/"><img className="logo" src={logoImage} alt="logo" /></Link>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Online Status: {onlineStatus ? '🟢' : '🔴'}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li><button className="login-btn" onClick={() => {
                        loginBtn==='Login' ? setLoginBtn('Logout') : setLoginBtn('Login');
                    }}>{loginBtn}</button></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;