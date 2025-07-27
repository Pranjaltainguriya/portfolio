import React from "react";
import "./navbar.css";
const Navbar = () => {
  return (
    <div>
      <div className="container nav">
        <div className="left"> Portfolio</div>
      <div className="rightt">
        <a href="#Home" className="nav-item"> home</a>
        <a href="#Skills" className="nav-item"> skills</a>
        <a href="#exprince" className="nav-item">exprince</a>
        <a href="" className="nav-item"> projects</a>
        <a href="#contant" className="nav-item"> contant</a>
      </div>
      </div>
    </div>
  );
};

export default Navbar;
