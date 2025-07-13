import './Card.css';

export default function Card({ card, handleFlip }) {
  function handleClick() {
    if (!card.isSelected && !card.isDiscovered) {
      handleFlip(card);
    }
  }
  return (
    <div className="cardContainer" onClick={handleClick}>
      <div
        className={
          card.isSelected || card.isDiscovered ? 'card is-flipped' : 'card'
        }
      >
        <div className="card-face card-front"></div>
        <div className="card-face card-back">
          <img src={card.img} alt="" />
        </div>
      </div>
    </div>
  );
}
