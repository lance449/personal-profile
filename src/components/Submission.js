import React from 'react';

const Submission = ({ name, email, message }) => (
  <div className="submission-message">
    <h1>Thank you, {name}!</h1>
    <p>Your message has been sent.</p>
    <p>Email: {email}</p>
    <p>Message: {message}</p>
  </div>
);

export default Submission;
