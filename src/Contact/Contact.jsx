import React ,{useContext}from "react";
import "./ContactStyle.css";
import linkedln from "./linkedln.png";
import twitter from "./twitter.png";
import github from "./github.png";
import pdf from "./resume_lency.pdf"
import {data} from '../App.js'

function Contact() {
const lightMode = useContext(data);
  return (
    <footer id="contacts" className={lightMode? "": "footer-dark"}>
      <h1>Get In Touch</h1>
      <div className={`social-media ${lightMode? "":"social-media-dark"}`}>
        <div className="single-media">
          <img src={linkedln} alt="linkedln" width="45px" />
          <a href="https://www.linkedin.com/in/lency-bhalodiya/" target="_blank" rel="noreferrer">Linkedln</a>
        </div>
        <div className="single-media">
          <img src={twitter} alt="twitter" width="45px" />
          <a href="https://github.com/LencyBhalodiya" target="_blank" rel="noreferrer">Github</a>
        </div>
        <div className="single-media">
          <img src={github} alt="github" width="55px" />
          <a href="https://twitter.com/Lency_bhalodiya" target="_blank" rel="noreferrer">Twitter</a>
        </div>
          <button className="btnn"><a href={pdf} download>Resume</a></button>
      </div>
    </footer>
  );
}

export default Contact;
