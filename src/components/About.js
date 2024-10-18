import React from 'react';
import { Card } from 'react-bootstrap';
import '../styles/Components.css';

const About = () => (
    <Card className="text-center about-card">
      <Card.Body>
        <h1>About Me</h1>
        <p><strong>Lance Melendrez</strong></p>
        <p>I am a Computer Science student who loves making videos and taking photos.</p>
      </Card.Body>
    </Card>
);

export default About;
