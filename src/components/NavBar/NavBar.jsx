import React, { useState} from "react";
import { NavLink } from "react-router-dom";
import Logo from '../../assets/img/3.png';
import "./_navbar.scss";


const NavBar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        const isSmallScreen = window.innerWidth <= 769;

        setMenuOpen(!menuOpen);

        if (isSmallScreen) {
            if (!menuOpen) {
              document.body.classList.add("menu-open"); // Désactive le défilement
            } else {
              document.body.classList.remove("menu-open"); // Réactive le défilement
            }
          }
    }


    return (
        <nav className="navbar">
            <img className="logo" src={Logo} alt=""/>
           <button className={`menu-btn ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            
            <ul className={`nav-links ${menuOpen ? "open" : ""}`}> 
                <li className="menu-item">
                    <NavLink to="/" activeclassname="active">ACCUEIL</NavLink>
                </li>
                <li className="menu-item">
                    <NavLink to="/about" activeclassname="active">À PROPOS</NavLink>
                </li>
                <li className="menu-item">
                    <NavLink to="/projets" activeclassname="active">PROJECTS</NavLink>
                </li>
                <li className="menu-item">
                    <NavLink to="/contact" activeclassname="active">CONTACT</NavLink>
                </li>
            </ul>
        
            
        </nav>
    )

}

export default NavBar;