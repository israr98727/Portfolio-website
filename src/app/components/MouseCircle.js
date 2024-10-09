import { useEffect, useState } from 'react';

const MouseCircle = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="fixed rounded-full pointer-events-none"
      style={{
        width: '20px',
        height: '20px',
        background: 'rgba(255, 255, 255, 0.2)', // Semi-transparent white
        backdropFilter: 'blur(10px)', // Background blur
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
        transform: 'translate(-50%, -50%)',
        left: `${mousePosition.x}px`,
        top: `${mousePosition.y}px`,
        transition: 'background 0.3s ease, transform 0.2s ease',
      }}
    />
  );
};

export default MouseCircle;
