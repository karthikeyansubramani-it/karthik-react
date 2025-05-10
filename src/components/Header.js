import { useState } from "react";
import { LOGO_URL } from "../Utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../Utils/useOnlineStatus.js";

const Header = () => {

    console.log("Header Component Recalled");

    const [btnName , setBtnName] = useState("Login");
    
    const isOnline = useOnlineStatus();

    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" 
                src = {LOGO_URL}
                ></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Online Status {isOnline? "✅" : "🔴" }</li>
                    <li><Link to ="/">Home</Link></li>
                    <li><Link to="/about">About Us </Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li>Cart</li>
                    <button id="login" className ="login-btn" onClick={() => {
                       btnName === "Login" ?  setBtnName("Logout") : setBtnName("Login");
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    );
};
export default Header;