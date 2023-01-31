import Spinner from 'react-bootstrap/Spinner';

// eslint-disable-next-line react/prop-types
export const Button = ({ name, type, isSubmitting }) => {
  return (
    <button className="btn-form" type={type}>
      {isSubmitting ? (
        <Spinner animation="border" role="status" size="sm" className="mt-0" />
      ) : (
        `${name}`
      )}
    </button>
  );
};
