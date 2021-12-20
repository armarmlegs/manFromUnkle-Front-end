import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        
        <div className="navbar-container">
        <h1 className="logo">Unkle</h1>
          <ul className="nav-menu">
            <li className="nav-items">Locataires</li>
            <li className="nav-items">Propriétaires</li>
            <button className='btn'>Contact</button>
           
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
