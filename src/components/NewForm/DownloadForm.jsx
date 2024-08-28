import React, { useState } from 'react';
import './Modal.css'; // Add your modal CSS styles here

const DownloadForm = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', { name, email });

    try {
      const response = await fetch('https://68.178.172.247:2083/cpsess3578156677/frontend/jupiter/filemanager/process_form.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          name,
          email,
        }),
      });

      const result = await response.json();
      console.log('Response received:', result);

      if (result.success) {
        alert('Form submitted successfully. Downloading brochure...');
        window.location.href = result.brochure_url;
        onClose();
      } else {
        alert('There was an error submitting the form. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error submitting the form. Please check the console for more details.');
    }
  };

  if (!isOpen) {
    return null;
  }


  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Download Brochure</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <br /><br />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br /><br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default DownloadForm;
