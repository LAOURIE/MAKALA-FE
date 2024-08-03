import React from  'react';
import { Container, Row, Col, Card } from 'react-bootstrap';


const Services = () => {
    return (
        <Container className="py=5">
            <h2> Our Services</h2>
            <Row>
                <Col md={4}>
                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title>Website Development</Card.Title>
                            <Card.Text>
                                We build beautiful and functional websites.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title>SEO Optimization</Card.Title>
                            <Card.Text>
                                Improve your website`s visibility on search engines
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title>Consulting</Card.Title>
                            <Card.Text>
                                Get expert advice on your web projects
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
};


export default Services