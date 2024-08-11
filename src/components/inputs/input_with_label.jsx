import PropTypes from "prop-types";

const InputWithLabel = ({
  identity,
  labelText,
  type = "text",
  value,
  handleChange,
}) => {
  const handleValueChange = (event) => {
    handleChange(event.target.value);
  };

  return (
    <div className="input">
      <label htmlFor={identity}>{labelText}</label>
      <input
        type={type}
        id={identity}
        value={value}
        onChange={handleValueChange}
      />
    </div>
  );
};

InputWithLabel.propTypes = {
  identity: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default InputWithLabel;
