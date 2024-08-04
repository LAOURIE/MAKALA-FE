import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <Container className="py-5">
      <Row className="align-items-center">
        <Col md={12}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="about-card">
              <Card.Body>
                <Card.Title className="about-title">About Us</Card.Title>
                <Card.Text className="about-description">
                  <h2>Mission</h2>
                  <p>
                    Our mission is to provide innovative and efficient software solutions that empower businesses and individuals to achieve their goals and succeed in the digital age.
                  </p>
                  <h2>Vision</h2>
                  <p>
                    Our vision is to be a leading software development company recognized for our commitment to quality, innovation, and customer satisfaction.
                  </p>
                  <h2>Founder</h2>
                  <p>
                    Makala TechCo was founded by Grace Njau, a passionate software developer with a vision to revolutionize the technology industry by providing top-notch software solutions that cater to the unique needs of each client.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
