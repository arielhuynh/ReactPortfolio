import React from 'react';
import ariel from "../assets/images/ariel.JPG";
import Hero from '../components/Hero';
import Content from '../components/Content';
import resume from '../assets/images/Resume .pdf'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ContactPage(props) {

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
                 Email: <a href="mailto:arielhuynh@ymail.com">arielhuynh@ymail.com</a><br></br>
                 Phone#: 253-737-8882<br></br>
                 <a href="https://github.com/arielhuynh">GitHub Page</a><br></br>
                 <a href="https://www.linkedin.com/in/ariel-huynh-694272b6/">LinkedIn</a><br></br>
                 <a href= {resume} >Resume</a>
                 
            </Col>
        </Row>   
      </Content>
        </div>
    );

}

export default ContactPage;