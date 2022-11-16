import React,{useContext} from 'react'
import "./Aboutstyle.css"
import  me from "./me.png"
import {data} from '../App.js'
export default function AboutMe() {
  const lightMode = useContext(data);
  return (
    <section id= "about" className={lightMode? "" : "section-dark"}>
      <div className={`about-card ${lightMode? "": "about-card-dark"} `}>
       <div className={`about-desc ${lightMode? "": "about-desc-dark"} `}>
        <h1 className={lightMode? "" : "h1-dark"}>Hey there, I'm Lency Bhalodiya!</h1>
        <p className={lightMode? "" : "p-dark"}>Am a Computer Science student who knows Web Development, implemented my skills by building projects using Technologies like React.js ,Javascript, CSS and it's Frameworks. Learned Data Structures and Algorithm by solving 130+ Leetcode problems using C++. Also Familiar with Databases such as MySQL and MonogoDB and core subjects like Computer Networking </p>
       </div>
       <div className={`about-right ${lightMode? "": "about-right-dark"} `}>
        <div className="photo-div">
          <img src={me} id = "me" alt="its my photoo here" />
        </div>
        <div className={`about-shape ${lightMode? "": "about-shape-dark"} `}></div>
       </div>
      </div>
    </section>
  )
}
