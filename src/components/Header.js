import { useState } from "react";

const HeaderComp = () => {
    const [login, setLogin] = useState('Login');

    const toggleLogin = () => {
        if (login === 'Login') setLogin('Logout');
        else setLogin('Login')
    }

    return (
        <div className="header">
            <div className="logo-container">
                <img src={require("../assets/images/logo.png")} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={toggleLogin}>{login}</button>
                </ul>
            </div>
    
        </div>
    )
};

const toggleLogin = () => {

}

export default HeaderComp;