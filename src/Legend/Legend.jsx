import './Legend.css';

function SingleLegend({ card, handleToggle }) {
  function handleClick() {
    handleToggle(card);
  }

  return (
    <div className="single-legend">
      <img src={card.img} alt={card.heading} />
      <div className="heading">{card.heading}</div>
      {card.isOpen && <div className="description">{card.description}</div>}
      <div className="arrow" onClick={handleClick}>
        {card.isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>menu-up</title>
            <path d="M7,15L12,10L17,15H7Z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>menu-down</title>
            <path d="M7,10L12,15L17,10H7Z" />
          </svg>
        )}
      </div>
    </div>
  );
}

export default function Legend({ deck, totalPairs, handleLegendToggle }) {
  function handleToggle(card) {
    handleLegendToggle(card);
  }

  return (
    <div className="legend">
      <p>
        {deck.length} {deck.length === 1 ? 'pair' : 'pairs'} discovered out of{' '}
        {totalPairs}
      </p>
      {deck.length === 0 ? (
        <div className="empty-state">
          <p>Find a match to start learning</p>
        </div>
      ) : (
        deck.map((card, index) => (
          <SingleLegend card={card} key={index} handleToggle={handleToggle} />
        ))
      )}
    </div>
  );
}
