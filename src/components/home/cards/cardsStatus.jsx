/* eslint-disable react/prop-types */
import '../_home.scss';

function Status({ status }) {
  const badgeType = {
    Alive: 'bg-success',
    Dead: 'bg-danger',
    unknown: 'bg-secondary'
  };

  return <p className={`position-absolute badge ${badgeType[status]} cards-status`}>{status}</p>;
}

export default Status;
