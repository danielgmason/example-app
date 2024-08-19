// File: pages/index.js

import React, { useState } from 'react';
import { WebSdk } from "@actionbase/web-action-sdk";

export default function Home() {
  const [recipient, setRecipient] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const sdk = new WebSdk(process.env.NEXT_PUBLIC_ACTIONBASE_API_KEY);
      await sdk.linkedin.messages.send(recipient, message);
      setStatus('Message sent successfully!');
      setRecipient('');
      setMessage('');
    } catch (error) {
      console.error('Error:', error);
      setStatus('Failed to send message. Please try again.');
    }
  };

  return (
    <div>
      <h1>Send LinkedIn Message</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="recipient">Recipient:</label>
          <input
            type="text"
            id="recipient"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit">Send LinkedIn Message</button>
        {status && <p>{status}</p>}
      </form>
    </div>
  );
}