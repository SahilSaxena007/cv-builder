/* eslint-disable react/prop-types */
// SkillDetails.jsx
import { useState } from "react";
import InputWithLabel from "../inputs/input_with_label";

const SkillDetails = ({ skill, onSave, onDelete, onCancel }) => {
  const [data, setData] = useState(skill);

  const handleChange = (value) => {
    setData(value); // For a single skill, just update the skill name
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSave(data); // Pass the updated skill to onSave
    onCancel();
  };

  return (
    <div id="skill-info">
      <form onSubmit={handleSubmit}>
        <InputWithLabel
          identity="skill-name"
          labelText="Skill"
          type="text"
          value={data}
          handleChange={(value) => handleChange(value)}
        />
        <div id="skill-buttons">
          <button type="button" onClick={onDelete}>
            Delete
          </button>
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
};

export default SkillDetails;
