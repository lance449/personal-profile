import React from 'react';
import { Card } from 'react-bootstrap';
import '../styles/Components.css'; 

const Skills = () => (
  <Card className="text-center skills-card">
    <Card.Body>
      <h1>My Skills</h1>
      <ul className="skills-list">
        <li>JavaScript</li>
        <li>React</li>
        <li>Video Editor</li>
        <li>Videographer</li>
        <li>HTML</li>
        <li>CSS</li>
      </ul>
    </Card.Body>
  </Card>
);

export default Skills;
