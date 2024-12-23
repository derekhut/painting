"use client";

import React, { useState } from 'react';

const App: React.FC = () => {
  const [input, setInput] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          style={styles.input}
          placeholder="Enter your text..."
        />
      </div>
      <div style={styles.content}>
        <h2 style={styles.title}>Similar painting style pictures</h2>
        <div style={styles.images}>
          <div style={styles.imagePlaceholder}></div>
          <div style={styles.imagePlaceholder}></div>
          <div style={styles.imagePlaceholder}></div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '100vh',
    padding: '20px',
    backgroundColor: '#f5f5dc', // 奶白色背景
  },
  header: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'flex-start',
    width: '100%',
    padding: '10px',
  },
  input: {
    width: '300px',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  content: {
    textAlign: 'center' as const,
    marginTop: 'calc(100vh / 15)', // 移动页面的1/15
    width: '100%',
  },
  title: {
    fontSize: '2.25rem', // 增大字体1.5倍
    marginBottom: '20px',
  },
  images: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
  },
  imagePlaceholder: {
    width: 'calc(33.33% - 20px)',
    height: '300px',
    backgroundColor: '#ccc',
  },
};

export default App;