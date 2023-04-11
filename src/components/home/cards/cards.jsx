/* eslint-disable react/prop-types */
import '../_home.scss';
import Status from './cardsStatus';

function Cards({ card }) {
  return (
    <div>
      <div>
        <div className="fav-icon">
          <i className="bi bi-heart fs-5" />
        </div>
        <Status status={card.status} />
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
