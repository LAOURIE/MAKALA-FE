import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { motion } from 'framer-motion';
import '../styles/Home.css';

const Home = () => {
  return (
    <Container fluid className="home-container">
      <Row className="align-items-center justify-content-center text-center">
        <Col md={8} lg={6}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="home-title">Makala TechCo</h1>
            <p className="home-description">
              At Makala TechCo, we offer top-notch software development services to solve any problem you have. Our expertise ranges from website development, mobile app development, to custom software solutions. Let us help you bring your ideas to life with innovative and efficient solutions tailored to your needs.
            </p>
          </motion.div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image src="/path/to/your/image.jpg" fluid className="home-image" />
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
