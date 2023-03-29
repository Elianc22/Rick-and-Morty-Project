/* eslint-disable react/prop-types */
import '../_home.scss';
import { Death, Alive, Unknown } from './cardsStatus';

function Cards({ card }) {
  return (
    <div>
      <div>
        {(() => {
          if (card.status === 'Dead') {
            return <Death card={card} />;
          } else if (card.status === 'Alive') {
            return <Alive card={card} />;
          } else if (card.status === 'unknown') {
            return <Unknown card={card} />;
          }
        })()}
        <img
          className="img-fluid rounded-circle image mb-3 mt-1"
          src={card.image}
          alt={card.name}
        />
        <div className="content">
          <h4 className="mb-4">{card.name}</h4>
          <div>
            <u className="fs-6">Last location:</u>
            <div className="fs-5">{card.location.name}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
