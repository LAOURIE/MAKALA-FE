import React from 'react';
import { Container, Fade } from 'react-bootstrap';


const Home = () => {
    return (
      <Fade>
        <Jumbotron fluid className="text-center bg-light">
            <Container>
                <h1>Welcome To Makala TechCo</h1>
                <p> We build beautiful and functional websites.</p>
                <Button variant="primary">Learn More</Button>
            </Container>
        </Jumbotron>
        
      </Fade>

    );
};




export default Home