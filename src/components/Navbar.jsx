// Navbar.js
import React from 'react';
import { PiLegoSmileyDuotone } from "react-icons/pi";

const Navbar = () => {
    return (
        <nav className="navbar">
            <PiLegoSmileyDuotone size={60} />
            <h1>Todo List</h1>
            
            <ul>
                <li><a href="#Contact Us">Contact Us</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
