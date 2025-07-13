import { useState } from 'react';
import { useRef } from 'react';
import './Game.css';
import Card from './Card';
import shuffle from '../utils/shuffle';

function prepareDeck(deck) {
  const doubledDeck = [...deck, ...deck].map((card, index) => {
    return {
      ...card,
      id: index,
      isSelected: false,
      isDiscovered: false,
    };
  });

  return shuffle(doubledDeck);
}

export default function Game({ originalDeck, triggerDiscover }) {
  const [deck, setDeck] = useState(() => prepareDeck(originalDeck));
  const prevCard = useRef([]);

  function selectCard(card) {
    const newDeck = [...deck].map((elm) => {
      if (elm.id === card.id) {
        return { ...elm, isSelected: true };
      } else {
        return elm;
      }
    });

    setDeck(newDeck);
  }

  function deselectCards() {}

  function discoverCard(card) {}

  function handleFlip(card) {
    selectCard(card);
  }

  return (
    <div className="game">
      {deck.map((card) => (
        <Card card={card} key={card.id} handleFlip={handleFlip} />
      ))}
    </div>
  );
}
