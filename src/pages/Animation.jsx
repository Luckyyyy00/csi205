import React, { useState, useEffect, useRef } from 'react';

import basketball from '/src/assets/imgs/basketball.png';
import football from '/src/assets/imgs/football.png';
import volleyball from '/src/assets/imgs/volleyball.png';
import human from '/src/assets/imgs/me.png';
import cartoon from '/src/assets/imgs/cartoon.png';
import logo from '/src/assets/imgs/logo.png';
import woodPlanks from '/src/assets/imgs/wood-planks.png';

const Animation = () => {
  const [running, setRunning] = useState(false);
  const [selectedBall, setSelectedBall] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  const animationRef = useRef(null);
  const stateRef = useRef({
    x: 0,
    y: 0,
    vx: 5,
    vy: 5,
    goRight: true,
    goDown: true
  });

  const fieldWidth = 700;
  const fieldHeight = 400;
  const ballDiameter = 200;
  const maxX = fieldWidth - ballDiameter - 4;
  const maxY = fieldHeight - ballDiameter - 4;

  const ballImages = [
    null, // None
    basketball,
    football, 
    volleyball, 
    human,      
    cartoon,    
    logo,
  ];

  const calculate = () => {
    const state = stateRef.current;
    
    if (state.goRight) {
      state.x += state.vx;
      if (state.x >= maxX) state.goRight = false;
    } else {
      state.x -= state.vx;
      if (state.x <= 0) state.goRight = true;
    }
    
    if (state.goDown) {
      state.y += state.vy;
      if (state.y >= maxY) state.goDown = false;
    } else {
      state.y -= state.vy;
      if (state.y <= 0) state.goDown = true;
    }
    
    setPosition({ x: state.x, y: state.y });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (running) {
        calculate();
      }
    }, 25);

    return () => clearInterval(interval);
  }, [running]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === ' ') {
        e.preventDefault();
        setRunning(prev => !prev);
      } else if (e.key >= '0' && e.key <= '6') {
        setSelectedBall(parseInt(e.key));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleBallSelect = (index) => {
    setSelectedBall(index);
  };

  const ballButtons = [
    { id: 0, label: 'None', variant: 'secondary' },
    { id: 1, label: 'Basketball', variant: 'primary' },
    { id: 2, label: 'Football', variant: 'primary' },
    { id: 3, label: 'Volleyball', variant: 'primary' },
    { id: 4, label: 'Human', variant: 'primary' },
    { id: 5, label: 'Cartoon', variant: 'primary' },
    { id: 6, label: 'Logo', variant: 'primary' }
  ];

  return (
    <div className="container-fluid p-4">
      <link 
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" 
        rel="stylesheet" 
        integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" 
        crossOrigin="anonymous"
      />
      <link 
        rel="stylesheet" 
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css"
      />
      
      <div style={{
        margin: 'auto',
        width: 'fit-content',
        border: '1px solid black',
        borderRadius: '1rem',
        padding: '1rem'
      }}>
        <div 
          style={{
            border: '1px solid black',
            backgroundImage: `url('src/assets/imgs/wood-planks.png')`,
            backgroundSize: 'cover',
            width: `${fieldWidth}px`,
            height: `${fieldHeight}px`,
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div 
            style={{
              width: `${ballDiameter}px`,
              height: `${ballDiameter}px`,
              position: 'absolute',
              left: `${position.x}px`,
              top: `${position.y}px`,
              backgroundColor: selectedBall === 0 ? '#333' : 'transparent',
              borderRadius: '50%',
              transition: 'none'
            }}
          >
            {selectedBall > 0 && ballImages[selectedBall] && (
              <img 
                src={ballImages[selectedBall]}
                alt="ball"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '50%'
                }}
              />
            )}
          </div>
        </div>

        <div className="d-flex justify-content-between mt-3">
          <button 
            className={`btn ${running ? 'btn-danger' : 'btn-success'}`}
            onClick={() => setRunning(!running)}
          >
            <i className={`bi ${running ? 'bi-pause' : 'bi-play'}`}></i>
            {running ? 'PAUSE' : 'RUN'}
          </button>

          <div>
            {ballButtons.map((btn) => (
              <button
                key={btn.id}
                type="button"
                className={`btn ${
                  selectedBall === btn.id 
                    ? `btn-${btn.variant}` 
                    : `btn-outline-${btn.variant}`
                } me-1`}
                onClick={() => handleBallSelect(btn.id)}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center mt-3 text-muted">
        <small>กด Space เพื่อ Play/Pause | กดปุ่ม 0-6 เพื่อเปลี่ยนลูกบอล</small>
      </div>
    </div>
  );
};

export default Animation;