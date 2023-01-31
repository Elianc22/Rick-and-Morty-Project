// eslint-disable-next-line react/prop-types
export const Title = ({ title, subtitle }) => {
  return (
    <div className="title-style">
      <h1>{title}</h1>
      <h4>{subtitle}</h4>
    </div>
  );
};
