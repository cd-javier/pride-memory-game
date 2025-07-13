import { useState } from 'react';
import './App.css';
import Game from './game/Game';
import Legend from './Legend/Legend';

function App({ deck }) {
  const [discoveredCards, setDiscoveredCards] = useState([]);

  function triggerDiscover(card) {
    setDiscoveredCards([card, ...discoveredCards]);
  }

  return (
    <>
      <Game originalDeck={deck} triggerDiscover={triggerDiscover} />
      <Legend deck={discoveredCards} totalPairs={deck.length} />
    </>
  );
}

export default App;
