import React from "react";
import {Link} from 'react-router-dom'; 
import  "./Navbar.css";

function NavBar() {
    return (
        <div className="NavBarContainer">
            <ul>
                <li>
                    <Link to="/"></Link>
                </li>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="..//About">About</Link>
                </li>
                <li>
                    <Link to="/services">Services</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                
            </ul>
        </div>
        
    );

}
export default NavBar;