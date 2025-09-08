"use client";

import React, { useEffect, useState } from 'react';

interface LightweightStarsProps {
  className?: string;
  starCount?: number;
  animationDuration?: number;
  opacity?: number;
}

const LightweightStars: React.FC<LightweightStarsProps> = ({
  className = "",
  starCount = 80,
  animationDuration = 20,
  opacity = 0.6
}) => {
  const [stars, setStars] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    delay: number;
    duration: number;
    brightness: number;
  }>>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = Array.from({ length: starCount }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1.5, // Larger size range
        delay: Math.random() * animationDuration,
        duration: animationDuration + Math.random() * 10,
        brightness: Math.random() * 0.7 + 0.3 // Varying brightness
      }));
      setStars(newStars);
    };

    generateStars();
  }, [starCount, animationDuration]);

  return (
    <div 
      className={`absolute inset-0 overflow-hidden ${className}`}
      style={{ opacity }}
    >
      {/* Small twinkling stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute bg-white rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animation: `twinkle ${star.duration}s ease-in-out infinite`,
            animationDelay: `${star.delay}s`,
            boxShadow: `0 0 ${star.size * 3}px rgba(255, 255, 255, ${star.brightness})`,
            opacity: star.brightness
          }}
        />
      ))}
      
      {/* Medium bright stars */}
      {Array.from({ length: 15 }, (_, i) => (
        <div
          key={`medium-${i}`}
          className="absolute bg-white rounded-full"
          style={{
            left: `${10 + i * 6}%`,
            top: `${20 + i * 4}%`,
            width: '4px',
            height: '4px',
            animation: `twinkle ${10 + i * 1.5}s ease-in-out infinite`,
            animationDelay: `${i * 0.8}s`,
            boxShadow: '0 0 12px rgba(255, 255, 255, 0.9)',
            opacity: 0.8
          }}
        />
      ))}

      {/* Large bright stars */}
      {Array.from({ length: 8 }, (_, i) => (
        <div
          key={`large-${i}`}
          className="absolute bg-white rounded-full"
          style={{
            left: `${15 + i * 10}%`,
            top: `${25 + i * 8}%`,
            width: '6px',
            height: '6px',
            animation: `twinkle ${15 + i * 2}s ease-in-out infinite`,
            animationDelay: `${i * 2}s`,
            boxShadow: '0 0 20px rgba(255, 255, 255, 1)',
            opacity: 1
          }}
        />
      ))}

      {/* Scattered bright stars */}
      {Array.from({ length: 12 }, (_, i) => (
        <div
          key={`scattered-${i}`}
          className="absolute bg-white rounded-full"
          style={{
            left: `${Math.random() * 80 + 10}%`,
            top: `${Math.random() * 60 + 20}%`,
            width: `${Math.random() * 3 + 2}px`,
            height: `${Math.random() * 3 + 2}px`,
            animation: `twinkle ${12 + Math.random() * 8}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 10}s`,
            boxShadow: `0 0 ${Math.random() * 15 + 8}px rgba(255, 255, 255, ${0.7 + Math.random() * 0.3})`,
            opacity: 0.7 + Math.random() * 0.3
          }}
        />
      ))}
      
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { 
            opacity: 0.3; 
            transform: scale(1); 
            box-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
          }
          50% { 
            opacity: 1; 
            transform: scale(1.3); 
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.9);
          }
        }
      `}</style>
    </div>
  );
};

export default LightweightStars;
