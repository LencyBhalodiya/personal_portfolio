import React from 'react'
import "./Aboutstyle.css"
import  me from "./me.png"
export default function AboutMe({lightMode}) {
  return (
    <section id= "about" className={lightMode? "" : "section-dark"}>
      <div className={`about-card ${lightMode? "": "about-card-dark"} `}>
       <div className={`about-desc ${lightMode? "": "about-desc-dark"} `}>
        <h1 className={lightMode? "" : "h1-dark"}>Hey there, I'm Lency Bhalodiya!</h1>
        <p className={lightMode? "" : "p-dark"}>Am a Computer Science student at Parul University who knows Web Development, includes languages Javascript, React.js, Jquery, CSS, MySQl and HTML. Built many websites which contains the Use of API's, React Router, Hooks, Reducer, ES6+ Javascript,Responsive Design. Started my journey by learning C and C++ and build small projects like ATM, number guessing app etc. Beside am also learning Data Structures and Algorithm to improve Logic building and Problem solving skills.</p>
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
