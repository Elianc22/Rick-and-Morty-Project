/* eslint-disable react/prop-types */
import '../_home.scss';

export function Death({ card }) {
  return <p className="position-absolute badge bg-danger cards-status">{card.status}</p>;
}

export function Alive({ card }) {
  return <p className="position-absolute badge bg-success cards-status">{card.status}</p>;
}

export function Unknown({ card }) {
  return <p className="position-absolute badge bg-secondary cards-status">{card.status}</p>;
}
