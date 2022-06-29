import React from "react"
import reactLogo from '../images/react-icon-small.png'; 

// <img src="../images/react-icon-small.png"/>
export default function Navbar() {
    return (
        <nav>s
            <img src={reactLogo} alt="reactlogo"/>
            <h3>ReactFacts</h3>
            <h4>React Course - Project 1</h4>
        </nav>
    )
}