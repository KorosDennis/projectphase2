import React from "react";
import { Link, } from "react-router-dom";
import "../index.css"



function NavBar() {

  return (
    <nav className="navbar" >
      <ul>
      <Link className="nav" to="/" > <h2>Home</h2> </Link>
      <Link className="nav" to= "/Comments" ><h2>Comments</h2> </Link>
      <Link className="nav" to= "/Search" ><h2>Search</h2> </Link>
      <Link className="nav" to= "/Favorites" ><h2>Favorites</h2> </Link>

      </ul>
      </nav>
  );
};

export default NavBar;
