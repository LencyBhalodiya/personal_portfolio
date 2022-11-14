import React from "react";
import "./ProjectStyle.css";
export default function Project({lightMode}) {
  console.log(lightMode);
  return (
    <div className={`project-section ${lightMode  ? "" : "project-section-dark"}`} id="projects">
      <div className="project-header">
        <h1>My Projects</h1>
      </div>

      <div className="scroll">
        <div className="cards-wrap">
          <div className={`card ${lightMode  ? "" : "card-dark"}`}>
            <div className= "card-topic" >Cocktail Receipt</div>
            <div className="card-des">
              <p>Technology used: React.js, Material UI</p>
              <br />
              <p>
                • fetch Real time cocktail of your choice and display its
                ingredients through API call by using fetchAPI.{" "}
              </p>
              <br />
              <p>• Used Bootstrap and material UI for responsive design.</p>
            </div>
            <button className="btn">Live</button>
          </div>
          <div className={`card ${lightMode  ? "" : "card-dark"}`}>
            <div className="card-topic">Cocktail Receipt</div>
            <div className="card-des">
              <p>Technology used: React.js, Material UI</p>
              <br />
              <p>
                • fetch Real time cocktail of your choice and display its
                ingredients through API call by using fetchAPI.{" "}
              </p>
              <br />
              <p>• Used Bootstrap and material UI for responsive design.</p>
            </div>
            <button className="btn">Live</button>
          </div>
          <div className={`card ${lightMode  ? "" : "card-dark"}`}>
            <div className="card-topic">Cocktail Receipt</div>
            <div className="card-des">
              <p>Technology used: React.js, Material UI</p>
              <br />
              <p>
                • fetch Real time cocktail of your choice and display its
                ingredients through API call by using fetchAPI.{" "}
              </p>
              <br />
              <p>• Used Bootstrap and material UI for responsive design.</p>
            </div>
            <button className="btn">Live</button>
          </div>
          <div className={`card ${lightMode  ? "" : "card-dark"}`}>
            <div className="card-topic">Cocktail Receipt</div>
            <div className="card-des">
              <p>Technology used: React.js, Material UI</p>
              <br />
              <p>
                • fetch Real time cocktail of your choice and display its
                ingredients through API call by using fetchAPI.{" "}
              </p>
              <br />
              <p>• Used Bootstrap and material UI for responsive design.</p>
            </div>
            <button className="btn">Live</button>
          </div>
          <div className={`card ${lightMode  ? "" : "card-dark"}`}>
            <div className="card-topic">Cocktail Receipt</div>
            <div className="card-des">
              <p>Technology used: React.js, Material UI</p>
              <br />
              <p>
                • fetch Real time cocktail of your choice and display its
                ingredients through API call by using fetchAPI.{" "}
              </p>
              <br />
              <p>• Used Bootstrap and material UI for responsive design.</p>
            </div>
            <button className="btn">Live</button>
          </div>
          
        </div>
      </div>
    </div>
  );
}
