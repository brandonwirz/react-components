import React from "react"
import reactLogo from '../images/react-icon-small.png'; 
      
export default function Navbar() {
    return (
      <nav>
       <img src={reactLogo} className="nav-icon" alt="reactlogo"/>                     
       <h3 className="nav-logo-text">React Facts</h3>
       <h4 className="nav-title">React</h4>
      </nav>
    )
}