"use client";

import React, { useState } from 'react';
import axios from 'axios';

const App: React.FC = () => {
  const [input, setInput] = useState('');
  const [generatedImages, setGeneratedImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(event.target.value);
  };

  const generateImages = async (prompt: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post('/api/generate', { prompt });
      if (response.data.success) {
        setGeneratedImages(response.data.images.map((img: { url: string }) => img.url));
      } else {
        setError(response.data.error || '生成图片失败');
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('生成图片失败');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <textarea
          value={input}
          onChange={handleInputChange}
          style={styles.input}
          placeholder="请粘贴图片分析结果到这里..."
        />
        <button 
          onClick={() => generateImages(input)}
          style={styles.generateButton}
          disabled={loading || !input.trim()}
        >
          {loading ? '生成中...' : '生成相似风格图片'}
        </button>
      </div>
      <div style={styles.content}>
        <h2 style={styles.title}>Similar painting style pictures</h2>
        {error && <div style={styles.error}>{error}</div>}
        <div style={styles.images}>
          {loading ? (
            Array(3).fill(0).map((_, i) => (
              <div key={i} style={styles.imagePlaceholder}>
                Loading...
              </div>
            ))
          ) : generatedImages.length > 0 ? (
            generatedImages.map((url, index) => (
              <img
                key={index}
                src={url}
                alt={`Generated image ${index + 1}`}
                style={styles.generatedImage}
              />
            ))
          ) : (
            Array(3).fill(0).map((_, i) => (
              <div key={i} style={styles.imagePlaceholder}></div>
            ))
          )}
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
    backgroundColor: '#f5f5dc',
  },
  header: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    width: '100%',
    padding: '10px',
    gap: '10px',
  },
  input: {
    width: '80%',
    maxWidth: '600px',
    height: '150px',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    resize: 'vertical' as const,
    fontFamily: 'inherit',
    fontSize: '14px',
  },
  generateButton: {
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    '&:disabled': {
      backgroundColor: '#cccccc',
      cursor: 'not-allowed',
    },
  },
  content: {
    textAlign: 'center' as const,
    marginTop: 'calc(100vh / 15)',
    width: '100%',
  },
  title: {
    fontSize: '2.25rem',
    marginBottom: '20px',
  },
  error: {
    color: 'red',
    marginBottom: '10px',
  },
  images: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap' as const,
  },
  imagePlaceholder: {
    width: '300px',
    height: '300px',
    backgroundColor: '#ccc',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#666',
  },
  generatedImage: {
    width: '300px',
    height: '300px',
    objectFit: 'cover' as const,
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
};

export default App;