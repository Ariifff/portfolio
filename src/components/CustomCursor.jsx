import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName.toLowerCase() === 'a' ||
        e.target.tagName.toLowerCase() === 'button' ||
        e.target.closest('a') ||
        e.target.closest('button') ||
        e.target.classList.contains('has-hover-anim')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateCursorPosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <div
        className={`circle-cursor circle-cursor--outer ${isHovering ? 'circle-cursor--hover' : ''}`}
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      ></div>
      <div
        className={`circle-cursor circle-cursor--inner ${isHovering ? 'circle-cursor--hover' : ''}`}
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      ></div>
    </>
  );
};

export default CustomCursor;
