import React from "react";
import Navbar from "./Navbar/Navbar.jsx";
import LandingPage from "./Landing/LandingPage.jsx";
import AboutMe from "./AboutMe/AboutMe.jsx";
import Project from "./Project/Project.jsx";
import Contact from "./Contact/Contact.jsx";
import "./App.css"
import {useState, createContext} from "react"; 
const data = createContext();
function App() {
  const [lightMode, DarkMode] = useState(true);
  return (
    <>
    <data.Provider value = {lightMode}>
      <Navbar lightMode = {lightMode} DarkMode = {DarkMode} />
      <LandingPage/>
      <AboutMe />
      <Project/>
      <Contact/>
      </data.Provider>
    </>
      
    
  );
}
export default App;
export {data};
