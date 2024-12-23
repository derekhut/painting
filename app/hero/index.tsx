'use client';

import React, { useState } from 'react';

const Hero: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <section 
      style={{
        position: 'relative',
        height: '80vh', // 可以根据需要调整高度
        backgroundImage: 'url(https://img2.baidu.com/it/u=3402346109,4172345986&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800)', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <div style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)' }}>
        <h1 style={{ fontSize: '4rem', fontWeight: 'bold', marginBottom: '20px' }}>
         Explore unlimited painting styles
        </h1>
        <p style={{ fontSize: '1.5rem', marginBottom: '30px' }}>
          Start your new journey and discover more possibilities.
        </p>
        <button 
          style={{
            padding: '15px 30px',
            fontSize: '1.2rem',
            backgroundColor: isHovered ? '#0056b3' : '#007BFF',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          started
        </button>
      </div>
    </section>
  );
};

export default Hero;
