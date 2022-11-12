import React from 'react'
import "./Landingstyle.css"
import officeMan from "./officeman.png"
export default function LandingPage({lightMode}) {
  return (
    <div className={`main-1 ${lightMode  ? "main-lightcolor" : "main-darkcolor"}`} id = "home">
        <div className="left">
          <h1>Hello I'm Web Developer</h1>
        </div>
        <div className="right">
          <img src={officeMan} alt="a Man " id ="officeMan"/>
         </div>
        </div>
  )
}
