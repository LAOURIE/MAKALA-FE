import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

const projects = {
  HTML: [
    { title: 'Project 1', description: 'Description of Project 1' },
    { title: 'Project 2', description: 'Description of Project 2' },
  ],
  CSS: [
    { title: 'Project 3', description: 'Description of Project 3' },
    { title: 'Project 4', description: 'Description of Project 4' },
  ],
  React: [
    { title: 'Project 5', description: 'Description of Project 5' },
    { title: 'Project 6', description: 'Description of Project 6' },
  ],
};

const ProjectSection = ({ title, projects }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h2>{title}</h2>
    <Row>
      {projects.map((project, index) => (
        <Col key={index} md={4} className="mb-4">
          <Card className="project-card">
            <Card.Body>
              <Card.Title>{project.title}</Card.Title>
              <Card.Text>{project.description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </motion.div>
);

const Portfolio = () => {
  return (
    <Container className="py-5">
      {Object.keys(projects).map((key) => (
        <ProjectSection key={key} title={key} projects={projects[key]} />
      ))}
    </Container>
  );
};

export default Portfolio;
