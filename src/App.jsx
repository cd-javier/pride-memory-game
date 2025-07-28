import { useState } from 'react';
import './App.css';
import Game from './Game/Game';
import Legend from './Legend/Legend';
import Overlay from './Overlay/Overlay';
import confetti from 'canvas-confetti';

function syncThemeColorWithCSSVar(varName) {
  const cssColor = getComputedStyle(document.documentElement)
    .getPropertyValue(varName)
    .trim();
  const themeMeta = document.querySelector('meta[name="theme-color"]');

  if (themeMeta) {
    themeMeta.setAttribute('content', cssColor);
  } else {
    const newMeta = document.createElement('meta');
    newMeta.name = 'theme-color';
    newMeta.content = cssColor;
    document.head.appendChild(newMeta);
  }
}

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
    syncThemeColorWithCSSVar('--bg');
  }

  function closeCompletionOverlay() {
    setShowCompletionOverlay(false);
    syncThemeColorWithCSSVar('--bg');
  }

  function handlePrideClick() {
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

  return (
    <div className="app">
      {showInitialOverlay && (
        <Overlay
          closeOverlay={closeInitialOverlay}
          buttonContent="Play with Pride!"
        >
          <h2>
            Welcome to the <br /> Pride Memory Game!
          </h2>
          <p>
            Pride is about remembering where we've come from and celebrating who
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
            You've matched every pride flag, now explore the stories, meanings,
            and communities behind each one.
          </p>
          <p>
            Each card links to organisations where you can learn more, support,
            or take action.
          </p>
        </Overlay>
      )}
      <header>
        <h1>
          <span className="pride-title" onClick={handlePrideClick}>
            <span className="p">P</span>
            <span className="r">R</span>
            <span className="i">I</span>
            <span className="d">D</span>
            <span className="e">E</span>
          </span>{' '}
          <br />
          MEMORY GAME
        </h1>
      </header>
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
