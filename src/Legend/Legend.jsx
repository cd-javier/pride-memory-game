function SingleLegend({ card }) {
  return (
    <div className="single-legend">
      <img src={card.img} alt={card.heading} />
      <div className="heading">{card.heading}</div>
      <div className="description">{card.description}</div>
    </div>
  );
}

export default function Legend({ deck, totalPairs }) {
  return (
    <div className="legend">
      {deck.length === 0 ? (
        <div> Empty state </div>
      ) : (
        deck.map((card, index) => <SingleLegend card={card} key={index} />)
      )}
      <p>
        {deck.length} {deck.length === 1 ? 'pair' : 'pairs'} discovered out of{' '}
        {totalPairs}
      </p>
    </div>
  );
}
