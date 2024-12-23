"use client";

import React, { useState, CSSProperties } from 'react';
import axios from 'axios';

export function SearchBox() {
  const [query, setQuery] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      setResult(null); // 清除之前的结果
    }
  };

  const handleAnalyze = async () => {
    if (!selectedImage) return;

    setAnalyzing(true);
    try {
      const formData = new FormData();
      formData.append('image', selectedImage);

      const response = await axios.post('/api/analyze', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setResult(response.data.result);
    } catch (error) {
      console.error('Error analyzing image:', error);
      setResult('Error analyzing image. Please try again.');
    } finally {
      setAnalyzing(false);
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div style={styles.outerContainer as CSSProperties}>
      <div style={styles.container as CSSProperties}>
        <div style={styles.content as CSSProperties}>
          <p style={styles.text as CSSProperties}>Enter the art knowledge you want to know or upload an image.</p>
          
          {/* Text Search */}
          <div style={styles.searchBox as CSSProperties}>
            <input 
              type="text" 
              placeholder="Search..." 
              value={query} 
              onChange={handleInputChange} 
              style={styles.input as CSSProperties}
            />
            <button 
              style={{
                ...styles.button,
                backgroundColor: isHovered ? '#0056b3' : '#007bff',
              } as CSSProperties}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Search
            </button>
          </div>

          {/* Image Upload */}
          <div style={styles.uploadSection as CSSProperties}>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              style={styles.fileInput as CSSProperties}
              id="image-upload"
            />
            <label htmlFor="image-upload" style={styles.uploadButton as CSSProperties}>
              Choose Image
            </label>
            
            {previewUrl && (
              <div style={styles.previewSection as CSSProperties}>
                <img src={previewUrl} alt="Preview" style={styles.preview as CSSProperties} />
                <button
                  onClick={handleAnalyze}
                  disabled={analyzing}
                  style={styles.analyzeButton as CSSProperties}
                >
                  {analyzing ? 'Analyzing...' : 'Analyze Image'}
                </button>
              </div>
            )}

            {result && (
              <div style={styles.resultSection as CSSProperties}>
                <h3>Analysis Result:</h3>
                <p>{result}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  outerContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    width: '100%',
    backgroundImage: 'url(https://ww3.sinaimg.cn/mw690/744cc954ly1hqssrm8vz2j21140lc4eq.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
  content: {
    textAlign: 'center' as const,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    padding: '20px',
    borderRadius: '10px',
  },
  text: {
    marginBottom: '20px',
    fontSize: '4.8rem',
    color: 'black',
  },
  searchBox: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    marginBottom: '20px',
  },
  input: {
    width: '300px',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ddd',
    borderRadius: '4px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  uploadSection: {
    marginTop: '20px',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    gap: '15px',
  },
  fileInput: {
    display: 'none',
  },
  uploadButton: {
    padding: '10px 20px',
    backgroundColor: '#28a745',
    color: 'white',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    '&:hover': {
      backgroundColor: '#218838',
    },
  },
  previewSection: {
    marginTop: '15px',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    gap: '10px',
  },
  preview: {
    maxWidth: '300px',
    maxHeight: '300px',
    borderRadius: '4px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  analyzeButton: {
    padding: '10px 20px',
    backgroundColor: '#17a2b8',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    '&:disabled': {
      backgroundColor: '#6c757d',
      cursor: 'not-allowed',
    },
  },
  resultSection: {
    marginTop: '20px',
    padding: '15px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '4px',
    maxWidth: '500px',
  },
};