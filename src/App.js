import React from "react";
import Navbar from "./Navbar/Navbar.jsx";
import LandingPage from "./Landing/LandingPage.jsx";
import AboutMe from "./AboutMe/AboutMe.jsx";
import Project from "./Project/Project.jsx"
import "./App.css"
function App() {
  const [lightMode, DarkMode] = React.useState(true);
  return (
    <>
      <Navbar lightMode = {lightMode} DarkMode = {DarkMode} />
      <LandingPage lightMode = {lightMode}  />
      <AboutMe   lightMode={lightMode} />
      <Project lightMode={lightMode}/>
    </>
      
    
  );
}

export default App;
