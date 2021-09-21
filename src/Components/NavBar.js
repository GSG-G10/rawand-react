import React from "react";
import Header from "./Header";
import './NavBar.css'
function NavBar(){
    return(
        <div className="header">
        <div className="navBar">
            <h1 className="logo">Food</h1>
            <ul className="nav-bar">
                <li>
                 Home
                </li>
                <li>
                 About
                </li>
                <li>
                 Recipe food
                </li>
            </ul>
            
        </div>
      <Header />
         </div>
    )
}
export default NavBar;