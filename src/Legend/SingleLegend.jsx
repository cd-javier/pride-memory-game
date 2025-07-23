import './SingleLegend.css';

export default function SingleLegend({ card, handleToggle }) {
  function handleClick() {
    handleToggle(card);
  }

  return (
    <div className="single-legend">
      <div className="heading" onClick={handleClick}>
        <img src={card.img} alt={card.heading} />
        <h2>{card.heading}</h2>
        <div className={`arrow ${card.isOpen ? 'open' : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>menu-down</title>
            <path d="M7,10L12,15L17,10H7Z" />
          </svg>
        </div>
      </div>
      {card.isOpen && (
        <div className="description">
          {card.description.map((p, index) => {
            return <p key={index}>{p}</p>;
          })}
          {card.link && (
            <a href={card.link.src} target="_blank" rel="noopener noreferrer">
              {card.link.title}
            </a>
          )}
        </div>
      )}
    </div>
  );
}
