import React, { useState } from 'react';

function Booking() {
  const [clientName, setClientName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Prepare the email content
    const emailContent = `Booking Request:
    Client Name: ${clientName}
    Subject: ${subject}
    Message: ${message}
    `;
    
    // You can use a library like 'emailjs' to send the email
    // Example: https://www.emailjs.com/docs/tutorial/react/

    // For demonstration purposes, alert the email content
    alert('Booking Request Email Content:\n' + emailContent);
  };

  return (
    <div>
      <h2>Intuitive Healer</h2>
      <h3>Book a session with Ruta</h3>

      <div>
        <h4>Individual session</h4>
        <p>1 hour - $120</p>
        <button onClick={() => alert('Booked an individual session.')}>Book</button>
        <p>60 min individual session done in person or online via Zoom</p>
      </div>

      <div>
        <h4>30 min session</h4>
        <p>$60</p>
        <button onClick={() => alert('Booked a 30-minute session.')}>Book</button>
      </div>

      <div>
        <h3>Contact Ruta</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Client Name:
            <input
              type="text"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
            />
          </label>

          <label>
            Subject:
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </label>

          <label>
            Message:
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>

          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Booking;
