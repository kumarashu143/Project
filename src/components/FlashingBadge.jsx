import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const FlashingBadge = () => {
  const badgeStyle = {
    animation: 'flash 3s infinite',
    backgroundColor: '#000',
    color: '#fff',
    padding: '1rem',
    fontSize: '1.25rem',
    fontWeight: '600',
    borderRadius: '0.75rem',
    boxShadow: '0 0 12px rgba(255, 255, 255, 0.6)',
    display: 'block',
    textAlign: 'center',
    letterSpacing: '0.5px',
    maxWidth: '100%',
    wordBreak: 'break-word',
    whiteSpace: 'normal',
  };

  const keyframes = `
    @keyframes flash {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.3; }
    }
  `;

  return (
    <>
      <style>{keyframes}</style>
      <div className="container px-3">
        <div className="d-flex justify-content-center align-items-center py-1">
          <div className="badge w-100" style={badgeStyle}>
            🚀 <span className="text-warning">C Language Course is free </span><span className="text-white fw-bold"> FREE </span> <span className='text-warning'>for Students of</span> <span className="text-info"> Batch 25–26 </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlashingBadge;
