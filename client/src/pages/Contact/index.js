import React from "react";
import "./style.css";




function Contact(){
  return (
    <main>
      <div className="container main-view">
        <div className="row">
          <div className="col s12 flow-text">
            <h1>Contact</h1>
            <img src = "assets/images/ariel.JPG" className ="headshot" alt="ariel"/>  
            <div className="contact-link">
            <img src= "assets/images/linkedin.png" alt="linkedin logo"></img>
              <a href="https://www.linkedin.com/in/ariel-huynh-694272b6/" 
                alt="LinkedIn Profile" 
                target="_blank" 
                rel="noopener noreferrer">
                Ariel Huynh
              </a>
            </div>
            <div className="contact-link">
              <img src= "assets/images/github.png" alt="github logo"></img>
              <a href="https://github.com/arielhuynh"
                alt="Github Profile"
                target="_blank" 
                rel="noopener noreferrer">
                arielhuynh
              </a>
              </div>
            <div className="contact-link">
              <i className="material-icons">email</i>
              <a href="mailto:arielhuynh@ymail.com">arielhuynh@ymail.com</a>
            </div>
            <div className="contact-link">
            <i className="material-icons">phone</i>
              <a href="tel:253-737-8882">253-737-8882</a>
            </div>
            <div className="contact-link">
              <i className="material-icons">file_download</i>
              <a href="assets/images/Resume .pdf"alt="Resume" target="_blank" rel="noopener noreferrer">Resume</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;