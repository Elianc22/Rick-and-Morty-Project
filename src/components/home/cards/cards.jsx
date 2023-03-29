/* eslint-disable react/prop-types */
import '../_home.scss';

function Cards({ card }) {
  return (
    <div>
      <div>
        {(() => {
          if (card.status === 'Dead') {
            return <p className="position-absolute badge bg-danger cards-status">{card.status}</p>;
          } else if (card.status === 'Alive') {
            return <p className="position-absolute badge bg-success cards-status">{card.status}</p>;
          }
          <p className="position-absolute badge bg-secondary cards-status">{card.status}</p>;
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
