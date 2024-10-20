import React from 'react';
import { Card } from 'react-bootstrap';
import '../styles/Components.css';

const Home = () => (
  <div className="home-header text-center">
    <h1>Lance Melendrez</h1>
    <h2>CS Student, Video Editor, and Photographer</h2>
    
    <Card className="text-center mt-4">
      <Card.Body>
        <p>Welcome!</p>
        <p>My career goal is to excel in tech industry.</p>
      </Card.Body>
    </Card>
  </div>
);

export default Home;
