import React,{useContext}from "react";
import {data} from '../App.js'
import "./ProjectStyle.css";
export default function Project() {
  const lightMode = useContext(data);

  return (
    <div
      className={`project-section ${lightMode ? "" : "project-section-dark"}`}
      id="projects"
    >
      <div className="project-header">
        <h1>My Projects</h1>
      </div>

      <div className="scroll">
        <div className="cards-wrap">
          <div className={`card ${lightMode ? "" : "card-dark"}`}>
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
            <button className="btn">
              <a
                href="https://react-projects-15-cocktails.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Live
              </a>
            </button>
          </div>
          <div className={`card ${lightMode ? "" : "card-dark"}`}>
            <div className="card-topic">Movie Finder</div>
            <div className="card-des">
              <p>Languages used: Javascript, Bootstrap</p>
              <br />
              <p>
                • Finds your favorite movie and displays its imdb rating,
                overview and posters.
              </p>
              <br />
              <p>• used Tailwand CSS for the responsive design. </p>
            </div>
            <button className="btn">
              <a
                href="https://lencybhalodiya.github.io/moviefinderjs/"
                target="_blank"
                rel="noreferrer"
              >
                Live
              </a>
            </button>
          </div>
          <div className={`card ${lightMode ? "" : "card-dark"}`}>
            <div className="card-topic">Block sites</div>
            <div className="card-des">
              <p>Technology used: JavaScript</p>
              <br />
              <p>
                fetch Real time cocktail of your choice and display its
                ingredients through API call by using fetchAPI.
              </p>
              <br />
              <p>• Used Bootstrap and material UI for responsive design.</p>
            </div>
            <button className="btn">
              <a href="#d" target="_blank" rel="noreferrer">
                Live
              </a>
            </button>
          </div>
          <div className={`card ${lightMode ? "" : "card-dark"}`}>
            <div className="card-topic">Movie API</div>
            <div className="card-des">
              <p>Technology used: React.js</p>
              <br />
              <p>
                • Search Movie by fetching IMDB API using UseEffect Hook in
                React.
              </p>
              <br />
              <p>• used Bootstrap and CSS for the responsive design. </p>
            </div>
            <button className="btn">
              <a
                href="https://react-projects-21-movie-db.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Live
              </a>
            </button>
          </div>
          <div className={`card ${lightMode ? "" : "card-dark"}`}>
            <div className="card-topic">Stock Photos API</div>
            <div className="card-des">
              <p>Technology used: React.js</p>
              <br />
              <p>
                • Fetch the photos of stock photos Website API and Create a
                unlimited scroll Effect by loading images when scrolling by use
                of window scroll height
              </p>
              <br />
              <p>
                • Also displays likes and Photographer of every photo displayed
              </p>
            </div>
            <button className="btn">
              <a
                href="https://react-projects-19-stock-photos.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Live
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
