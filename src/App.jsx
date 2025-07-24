import { useState } from 'react';
import './App.css';
import Game from './Game/Game';
import Legend from './Legend/Legend';
import Overlay from './Overlay/Overlay';

function App({ deck }) {
  const [discoveredCards, setDiscoveredCards] = useState([]);
  const [showInitialOverlay, setShowInitialOverlay] = useState(true);
  const [showCompletionOverlay, setShowCompletionOverlay] = useState(false);

  function triggerDiscover(card) {
    const discoveredDeck = [
      { ...card, isOpen: true },
      ...discoveredCards.map((card) => {
        return { ...card, isOpen: false };
      }),
    ];
    setDiscoveredCards(discoveredDeck);

    if (discoveredDeck.length === deck.length) {
      setShowCompletionOverlay(true);
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

  function closeInitialOverlay() {
    setShowInitialOverlay(false);
  }

  function closeCompletionOverlay() {
    setShowCompletionOverlay(false);
  }

  return (
    <div className="app">
      {showInitialOverlay && (
        <Overlay
          closeOverlay={closeInitialOverlay}
          buttonContent="Play with Pride!"
        >
          <h2>Welcome to the Pride Memory Game!</h2>
          <p>
            Pride is about remembering where we’ve come from and celebrating who
            we are.
          </p>
          <p>
            Match the flags, learn their stories, and honour the beautiful
            diversity of our community.
          </p>
        </Overlay>
      )}
      {showCompletionOverlay && (
        <Overlay
          closeOverlay={closeCompletionOverlay}
          showConfetti
          buttonContent="Explore the flags"
        >
          <h2>All Pairs Found!</h2>
          <p>
            You’ve matched every pride flag, now explore the stories, meanings,
            and communities behind each one.
          </p>
          <p>
            Each card links to organisations where you can learn more, support,
            or take action.
          </p>
        </Overlay>
      )}
      <h1>MATCH THE PRIDE</h1>
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
