import React from "react";
import "./style.css";

function About(){
  return (
    <main>
      <div className="container main-view">
        <div className="row">
          <div className="col s12">
            <h1>Let's break the ice ⛏️ </h1>
            <img src = "/assets/images/ariel.JPG" className ="headshot" alt="ariel"/>  
            <p className="flow-text">
            <p>I currently work as a Team Lead, ESC for a medical device company called Spacelabs Healthcare.</p>
            <p>I was working with our IT team to implement new changes for the application we used in my department and was getting impatient with the lack of progress. At that point, I was wondering what the hold up was, it couldn't be that hard, let me enroll in coding bootcamp so I can try to create something on my own. Lesson learned- it's very hard.</p>
            <p>I live by this saying I made up, "Perfection is not attainable, but is something you should strive for". So I'm constantly trying to make things as perfect as possible, and unfortunately I am also impatient so it makes a bad combination when I am unable to produce the vision I see in my head and cannot make the deadline.</p>
         <p>HOWEVER, coding bootcamp is really helping me with becoming more patient and to step away when I get frustrated for not being able to figure something out. I'm learning that there is no right answer and sometimes you have to look at it with fresh eyes.</p>
      
          </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;