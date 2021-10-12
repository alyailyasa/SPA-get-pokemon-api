import React from "react";
import { Link } from "react-router-dom";
import './index';

const Navbar = () => {
  return (
      <div className="App-container">
            <nav className="navbar">
                <h1 className="navbar-h1"> Welcome to Pokemon Web App</h1>
                <div className="navbar links">
                    <Link to="/">Explore Pokemon</Link>
                    <Link to="/my-pokemon">My Pokemon List</Link>
                </div>
            </nav>
      </div>
    
  );
};

export default Navbar;
