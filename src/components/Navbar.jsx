import React from "react";
import "./navbar.css";
const Navbar = () => {
  return (
    <div>
      <div className="container nav">
        <div className="left"> Portfolio</div>
      <div className="rightt">
        <a href="#Home" className="nav-item"> Home</a>
        <a href="#Skills" className="nav-item"> Skills</a>
        <a href="#exprince" className="nav-item">Projects</a>
        <a href="#contant" className="nav-item"> Contant</a>
      </div>
      </div>
    </div>
  );
};

export default Navbar;
