import React from 'react';
import { Container } from 'react-bootstrap';
import Zoom from 'react-reveal/Zoom';

const About = () => {
    return (
        <Zoom>
        <Container className="py-5">
            <h2> About Us</h2>
            <p> Makala TechCo is dedicated to providing top-notch web development services to our clients. </p>
        </Container>
        </Zoom>
    )
}


export default About;