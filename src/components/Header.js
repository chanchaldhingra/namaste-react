import { useState } from "react";
import logoImage from "../../assets/logo-image.png";
import {Link} from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

    const [loginBtn, setLoginBtn] = useState("Login");

    const onlineStatus = useOnlineStatus();

    return (
        <div className="flex justify-between items-center bg-pink-200 p-2">
            <div className="w-30 h-30">
                <Link to="/"><img className="logo" src={logoImage} alt="logo" /></Link>
            </div>
            <div>
                <ul className="flex items-center p-4 m-4">
                    <li className="px-4">Online Status: {onlineStatus ? '🟢' : '🔴'}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About Us</Link></li>
                    <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4">Cart</li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4"><button className="p-2 bg-[#f0f0f0] rounded-lg" onClick={() => {
                        loginBtn==='Login' ? setLoginBtn('Logout') : setLoginBtn('Login');
                    }}>{loginBtn}</button></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;