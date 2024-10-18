import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import Submission from './Submission';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Submission name={formData.name} email={formData.email} message={formData.message} />
    );
  }

  return (
    <Card className="text-center">
      <Card.Body>
        <h1>Contact Me</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
          <textarea name="message" placeholder="Message" onChange={handleChange} required></textarea>
          <button type="submit">Submit</button>
        </form>
      </Card.Body>
    </Card>
  );
};

export default Contact;
