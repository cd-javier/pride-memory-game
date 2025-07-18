import './Legend.css';

function SingleLegend({ card, handleToggle }) {
  function handleClick() {
    handleToggle(card);
  }

  return (
    <div className="single-legend">
      <div className="heading" onClick={handleClick}>
        <img src={card.img} alt={card.heading} />
        <div className="title">{card.heading}</div>
        <div className={`arrow ${!card.isOpen ? 'open' : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>menu-down</title>
            <path d="M7,10L12,15L17,10H7Z" />
          </svg>
        </div>
      </div>
      {card.isOpen && <div className="description">{card.description}</div>}
    </div>
  );
}

export default function Legend({ deck, totalPairs, handleLegendToggle }) {
  function handleToggle(card) {
    handleLegendToggle(card);
  }

  return (
    <div className="legend">
      <div className="count">
        {deck.length}/{totalPairs}
        {deck.length === 1 ? ' pair ' : ' pairs '}
        discovered
      </div>
      <div className="content">
        {deck.length === 0 ? (
          <div className="empty-state">
            <p>Find a match to start learning</p>
            <svg viewBox="0 0 133 155" xmlns="http://www.w3.org/2000/svg">
              <rect
                width="91.2233"
                height="60.8155"
                rx="4.56116"
                transform="matrix(0.258819 0.965926 0.965926 -0.258819 7 60.7733)"
              />
              <path d="M61.5562 9.7579C62.2806 7.05432 65.0596 5.44949 67.7632 6.17392L123.243 21.0401C125.946 21.7646 127.55 24.5436 126.826 27.2472L103.215 115.361C102.491 118.065 99.7127 119.67 97.0093 118.945L89.8042 117.015L70.4146 44.6495C69.6901 41.9459 66.9111 40.3411 64.2075 41.0655L52.313 44.252L61.5562 9.7579Z" />
            </svg>
          </div>
        ) : (
          deck.map((card, index) => (
            <SingleLegend card={card} key={index} handleToggle={handleToggle} />
          ))
        )}
      </div>
      <div className="signature">
        By{' '}
        <a
          href="http://www.javierquiroga.com"
          target="_blank"
          rel="noopener noreferrer"
          title="Visit my portfolio"
        >
          Javier Quiroga
        </a>{' '}
        and{' '}
        <a
          href="http://www.matthewctfuller.com"
          target="_blank"
          rel="noopener noreferrer"
          title="Matthew CT Fuller"
        >
          Matthew CT Fuller
        </a>
      </div>
    </div>
  );
}
