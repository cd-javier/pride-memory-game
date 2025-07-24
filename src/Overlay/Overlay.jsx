import './Overlay.css';
import confetti from 'canvas-confetti';
import { useEffect } from 'react';

export default function Overlay({
  closeOverlay,
  showConfetti = false,
  buttonContent = 'Close',
  children,
}) {
  useEffect(() => {
    if (showConfetti) {
      confetti({
        particleCount: 300,
        spread: 160,
        ticks: 300,
        colors: [
          '#E50202',
          '#FF8B00',
          '#FFED04',
          '#008128',
          '#004DFF',
          '#760689',
        ],
      });
    }
  }, [showConfetti]);

  return (
    <div className="overlay">
      <div className="modal">
        {children}
        <button type="button" onClick={closeOverlay}>
          {buttonContent}
        </button>
      </div>
    </div>
  );
}
