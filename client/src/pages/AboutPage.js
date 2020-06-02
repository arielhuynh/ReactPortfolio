import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import ariel from "../assets/images/ariel.JPG";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
             <Row>
             <Col sm={4}>
                <img src = {ariel} alt="ariel"/>         
             <p class="bio">Location: Kirkland, WA</p>
             </Col>


             <Col sm={8} >
            <p>I currently work as a Team Lead, ESC for a medical device company called Spacelabs Healthcare.</p>
        <p>I was working with our IT team to implement new changes for the application we used in my department and was getting impatient with the lack of progress. At that point, I was wondering what the hold up was, it couldn't be that hard, let me enroll in coding bootcamp so I can try to create something on my own. Lesson learned- it's very hard.</p>
        <p>I live by this saying I made up, "Perfection is not attainable, but is something you should strive for". So I'm constantly trying to make things as perfect as possible, and unfortunately I am also impatient so it makes a bad combination when I am unable to produce the vision I see in my head and cannot make the deadline.</p>
        <p>HOWEVER, coding bootcamp is really helping me with becoming more patient and to step away when I get frustrated for not being able to figure something out. I'm learning that there is no right answer and sometimes you have to look at it with fresh eyes.</p>
        </Col>
        </Row>   
      </Content>
        </div>
    );

}

export default AboutPage;