import '../../styles/_baseStyle.scss';

// eslint-disable-next-line react/prop-types
export const Errors = ({ error }) => {
  return <span className="errors-style">{error}</span>;
};
