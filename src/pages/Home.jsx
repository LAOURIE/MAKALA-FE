import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Container fluid className="text-center bg-light py-5">
        <h1>Welcome to Makala TechCo</h1>
        <p>We build beautiful and functional websites.</p>
        <Button variant="primary">Learn More</Button>
      </Container>
    </motion.div>
  );
};

export default Home;
