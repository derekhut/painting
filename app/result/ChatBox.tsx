"use client";

import React, { useState } from 'react';
import axios from 'axios';

const ChatBox: React.FC = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleButtonClick = async () => {
    try {
      const result = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
        prompt: input,
        max_tokens: 150,
      }, {
        headers: {
          Authorization: "Bearer sk-jibgukztqcikgxvqkhdhtemocygarrnmgljzcgajcxarkask",
          "Content-Type": "application/json",
        },
      });

      setResponse(result.data.choices[0].text);
    } catch (error) {
      console.error('Error fetching AI response:', error);
      if (axios.isAxiosError(error)) {
        console.error('Axios error message:', error.message);
        console.error('Axios error response:', error.response);
      }
      setResponse('Sorry, something went wrong.');
    }
  };

  return (
    <div style={styles.container}>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        style={styles.input}
        placeholder="Ask me anything..."
      />
      <button onClick={handleButtonClick} style={styles.button}>
        Ask AI
      </button>
      <div style={styles.response}>
        {response}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    padding: '20px',
  },
  input: {
    width: '300px',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px 20px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#007bff',
    color: 'white',
    cursor: 'pointer',
  },
  response: {
    marginTop: '20px',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    width: '300px',
    textAlign: 'left' as const,
  },
};

export default ChatBox;