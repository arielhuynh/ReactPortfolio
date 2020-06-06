import React from "react";


function ProjectCard(props){




  return (
    <div className="col m12 l6">
      <div className="card">
        <div className="card-image">
          <img src={props.images[0]} alt=""></img>
        </div>
        <div className="card-content">
    
          <span className="card-title">{props.title}</span>
          <p>{props.short}</p>
          <a className="project-link" 
          href={props.github} 
          alt={props.github} 
          target="_blank" 
          rel="noopener noreferrer">
          Github Repository
        </a><br></br>
          <a className="project-link" 
            href={props.deployed} 
            alt={props.deployed} 
            target="_blank" 
            rel="noopener noreferrer">
            Deployed Application
          </a>
        </div>
       
      </div>
    </div>
  );
};

export default ProjectCard;