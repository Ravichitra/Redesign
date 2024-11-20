'use client'
import { useState } from 'react';
import styles from '../page.module.css';
import { ClientPageRoot } from 'next/dist/client/components/client-page';

export default function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('Message sent successfully!');
      } else {
        setStatus('Something went wrong, please try again.');
      }
    } catch (error) {
      setStatus('An error occurred, please try again.');
    }
  };

  return (
    
    <div className={styles.cards}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className='d-flex flex-column '>
        <div className='p-2 d-flex justify-content-center'><input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleInputChange}
          required
        /></div>
        <div className='p-2 d-flex justify-content-center'> <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleInputChange}
          required
        /></div>
        <div className='p-2 d-flex justify-content-center'><textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleInputChange}
          required
        /></div>
        <div className='p-2 d-flex justify-content-center'> <button type="submit">Send Message</button></div></div>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
}
