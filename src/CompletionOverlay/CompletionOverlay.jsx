import './CompletionOverlay.css';
import confetti from 'canvas-confetti';
import { useEffect } from 'react';

export default function CompletionOverlay({ closeOverlay }) {
  function handleClick() {
    closeOverlay();
  }

  useEffect(() => {
    confetti({
      particleCount: 200,
      spread: 180,
      origin: { y: 0.6 },
      colors: [
        '#E50202',
        '#FF8B00',
        '#FFED04',
        '#008128',
        '#004DFF',
        '#760689',
      ],
    });
  }, []);

  return (
    <div className="overlay">
      <div className="modal">
        <h2>All Pairs Found!</h2>
        <p>
          You’ve matched every pride flag! Now take a moment to explore what
          each one stands for.
        </p>
        <button type="button" onClick={handleClick}>
          Explore the flags
        </button>
      </div>
    </div>
  );
}
