import { useState } from 'react';
import './App.css';
import Game from './game/Game';
import Legend from './Legend/Legend';

function App({ deck }) {
  const [discoveredCards, setDiscoveredCards] = useState([]);

  function triggerDiscover(card) {
    setDiscoveredCards([{ ...card, isOpen: false }, ...discoveredCards]);
  }

  function handleLegendToggle(card) {
    setDiscoveredCards(
      [...discoveredCards].map((elm) => {
        if (elm === card) {
          return { ...card, isOpen: !elm.isOpen };
        } else return { ...card, isOpen: false };
      })
    );
  }

  return (
    <div className="app">
      <Game originalDeck={deck} triggerDiscover={triggerDiscover} />
      <Legend
        deck={discoveredCards}
        totalPairs={deck.length}
        handleLegendToggle={handleLegendToggle}
      />
    </div>
  );
}

export default App;
