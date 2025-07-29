import { useEffect, useState } from 'react';
import './range.css'
export default function AnimatedRange({ value = 78 }) {
  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2 soniya
    const stepTime = 10;
    const steps = Math.floor(duration / stepTime);
    const increment = value / steps;
    let current = 0;

    const interval = setInterval(() => {
      current += increment;
      if (current >= value) {
        current = value;
        clearInterval(interval);
      }
      setAnimatedValue(Math.round(current));
    }, stepTime);

    return () => clearInterval(interval);
  }, [value]);

  return (
      <div className="w-full max-w-md mx-auto">
           <div className="relative">

     <input
          type="range"
          min="0"
          max="100"
          value={animatedValue}
          readOnly
          className="custom-range w-full"
        />
        </div>
      <p className="mt-2 text-center text-2xl"></p>
    </div>
  );
}
