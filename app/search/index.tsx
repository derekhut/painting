"use client";

import React, { useState, CSSProperties } from 'react';

export function SearchBox() {
  const [query, setQuery] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
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
          <p style={styles.text as CSSProperties}>Enter the art knowledge you want to know.</p>
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
        </div>
      </div>
    </div>
  );
}

const styles = {
  outerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    width: '100%',
    border: '1cm solid white', // Add a 1cm white border
    boxSizing: 'border-box', // Ensure the border is included in the element's total width and height
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    width: '100%', // Ensure the container takes full width
    backgroundImage: 'url(https://ww3.sinaimg.cn/mw690/744cc954ly1hqssrm8vz2j21140lc4eq.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
  content: {
    textAlign: 'center' as 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.6)', // Change to more transparent white
    padding: '20px',
    borderRadius: '10px',
  },
  text: {
    marginBottom: '20px',
    fontSize: '4.8rem', // Increase the font size 4 times
    color: 'black', // Change text color to black for better visibility on white background
  },
  searchBox: {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #ccc',
    borderRadius: '4px',
    padding: '5px',
    width: '60%', // Set the width of the search box to 60% of the screen width
    margin: '0 auto', // Center the search box
    backgroundColor: 'white', // Ensure the search box is visible on the background
  },
  input: {
    border: 'none',
    outline: 'none',
    padding: '10px',
    flex: 1,
  },
  button: {
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
    borderRadius: '4px',
    marginLeft: '5px',
    transition: 'background-color 0.3s',
  }
};