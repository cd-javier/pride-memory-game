import { useState } from 'react';
import './App.css';
import Game from './game/Game';
import Legend from './Legend/Legend';
import CompletionOverlay from './CompletionOverlay/CompletionOverlay';

function App({ deck }) {
  const [discoveredCards, setDiscoveredCards] = useState([]);
  const [showOverlay, setShowOverlay] = useState(false);

  function triggerDiscover(card) {
    const discoveredDeck = [{ ...card, isOpen: false }, ...discoveredCards];
    setDiscoveredCards(discoveredDeck);
    if (discoveredDeck.length === deck.length) {
      setShowOverlay(true);
    }
  }

  function handleLegendToggle(card) {
    setDiscoveredCards(
      [...discoveredCards].map((elm) => {
        if (elm === card) {
          return { ...elm, isOpen: !elm.isOpen };
        } else {
          return { ...elm, isOpen: false };
        }
      })
    );
  }

  function closeOverlay() {
    setShowOverlay(false);
  }

  return (
    <div className="app">
      <h1>Match The Pride</h1>
      {showOverlay && <CompletionOverlay closeOverlay={closeOverlay} />}
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
