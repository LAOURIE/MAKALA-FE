import React from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Container className="py-5">
        <h2>About Us</h2>
        <p>
          Makala TechCo is dedicated to providing top-notch web development services to our clients.
        </p>
      </Container>
    </motion.div>
  );
};

export default About;
