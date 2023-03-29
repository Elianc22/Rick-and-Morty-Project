/* eslint-disable react/prop-types */
const FilterBtn = ({ index, item }) => {
  console.log(index, item);
  return (
    <div>
      <div className="form-check">
        <input className="form-check-input" type="radio" name="prueba" id={`${item}-${index}`} />
        <label className="btn btn-outline-primary" htmlFor={`${item}-${index}`}>
          {item}
        </label>
      </div>
    </div>
  );
};

export default FilterBtn;
