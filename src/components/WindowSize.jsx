import React, { useState, useEffect } from 'react';

const WindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div style={{ position: 'fixed', bottom: 0, right: 0, backgroundColor: 'rgba(211, 79, 79, 0.5)', color: 'white', padding: '10px' }}>
      Width: {windowSize.width}px, Height: {windowSize.height}px
    </div>
  );
};

export default WindowSize;