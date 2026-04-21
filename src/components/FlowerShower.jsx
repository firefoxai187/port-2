import React, { useState, useEffect, useCallback } from 'react';

const FLOWER_TYPES = ['🌸', '🌺', '🌼', '🌷', '🏵️', '💐', '🌻', '🌹', '🪷'];
const FLOWER_COUNT = 60;

export default function FlowerShower() {
  const [isRaining, setIsRaining] = useState(false);
  const [flowers, setFlowers] = useState([]);

  const stopRain = useCallback(() => {
    setIsRaining(false);
    setFlowers([]);
  }, []);

  const startRain = useCallback(() => {
    const newFlowers = Array.from({ length: FLOWER_COUNT }).map((_, i) => ({
      id: i,
      type: FLOWER_TYPES[Math.floor(Math.random() * FLOWER_TYPES.length)],
      left: Math.random() * 100,
      duration: Math.random() * 4 + 4,
      delay: Math.random() * 3,
      size: Math.random() * 1.5 + 1,
      rotation: Math.random() * 360,
      swayAmount: Math.random() * 60 - 30,
    }));
    setFlowers(newFlowers);
    setIsRaining(true);

    // Auto-stop after 10 seconds
    setTimeout(() => stopRain(), 10000);
  }, [stopRain]);

  // ESC key to cancel
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape' && isRaining) stopRain();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isRaining, stopRain]);

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={isRaining ? stopRain : startRain}
        title={isRaining ? 'Stop flowers (ESC)' : 'Shower flowers!'}
        className="fixed bottom-8 left-8 z-[100] w-12 h-12 bg-white border border-outline-variant/30 shadow-lg flex items-center justify-center text-xl hover:scale-110 transition-transform rounded-full"
      >
        {isRaining ? '🚫' : '🌸'}
      </button>

      {/* Flower Overlay */}
      {isRaining && (
        <div
          className="fixed inset-0 pointer-events-none z-[99999] overflow-hidden"
          style={{ width: '100vw', height: '100vh' }}
        >
          {flowers.map((flower) => (
            <div
              key={flower.id}
              style={{
                position: 'absolute',
                top: '-10%',
                left: `${flower.left}%`,
                fontSize: `${flower.size}rem`,
                animation: `flowerFall ${flower.duration}s ${flower.delay}s linear forwards`,
                '--sway': `${flower.swayAmount}px`,
                '--rotation': `${flower.rotation}deg`,
              }}
            >
              {flower.type}
            </div>
          ))}

          {/* ESC hint */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/40 text-white text-[10px] font-bold tracking-widest uppercase px-4 py-2 backdrop-blur-sm rounded-full pointer-events-none">
            Press ESC to stop
          </div>
        </div>
      )}
    </>
  );
}
