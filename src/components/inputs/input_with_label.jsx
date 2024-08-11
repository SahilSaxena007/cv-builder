import PropTypes from "prop-types";
import { useState } from "react";

const InputWithLabel = ({ identity, labelText, type = "text" }) => {
  const [valueText, changeValueText] = useState("");

  const handleValueChange = (event) => {
    changeValueText(event.target.value);
  };

  console.log(`${identity}: `, valueText);

  return (
    <div className="input">
      <label htmlFor={identity}>{labelText}</label>
      <input
        type={type}
        id={identity}
        value={valueText}
        onChange={handleValueChange}
      />
    </div>
  );
};

InputWithLabel.propTypes = {
  identity: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default InputWithLabel;
