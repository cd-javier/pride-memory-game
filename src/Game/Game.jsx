import { useState } from 'react';
import { useRef } from 'react';
import './Game.css';
import Card from './Card/Card';
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

  return doubledDeck;
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

    prevCard.current.push(card);
    setDeck(newDeck);
  }

  function deselectCards() {
    const newDeck = [...deck].map((card) => {
      return { ...card, isSelected: false };
    });

    setDeck(newDeck);
  }

  function discoverCard(card) {
    const newDeck = [...deck].map((elm) => {
      if (elm.keyword === card.keyword) {
        return { ...elm, isDiscovered: true };
      } else {
        return elm;
      }
    });

    setDeck(newDeck);
  }

  function handleFlip(card) {
    if (prevCard.current.length >= 2) return;
    if (prevCard.current === card) return;

    selectCard(card);

    if (prevCard.current.length === 1) return;

    if (prevCard.current[0].keyword === card.keyword) {
      discoverCard(card);
      triggerDiscover(card);
      prevCard.current = [];
      return;
    }

    setTimeout(() => {
      prevCard.current = [];
      deselectCards();
    }, 1500);
  }

  return (
    <div className="game">
      {deck.map((card) => (
        <Card card={card} key={card.id} handleFlip={handleFlip} />
      ))}
    </div>
  );
}
