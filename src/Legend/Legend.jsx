export default function Legend({ deck, totalPairs }) {
  return (
    <div className="legend">
      {deck.length === 0 ? (
        <div> Empty state </div>
      ) : (
        <div>{deck.map((card) => card.keyword)}</div>
      )}
      <p>
        {deck.length} {deck.length === 1 ? 'pair' : 'pairs'} discovered out of{' '}
        {totalPairs}
      </p>
    </div>
  );
}
