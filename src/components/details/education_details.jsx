/* eslint-disable react/prop-types */
// ExperienceDetails.jsx
import { useState } from "react";
import InputWithLabel from "../inputs/input_with_label";

const EducationDetails = ({ education, onSave, onDelete, onCancel }) => {
  const [formData, setFormData] = useState(education);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSave(formData);
    onCancel();
  };

  return (
    <>
      <div id="education-info">
        <form onSubmit={handleSubmit}>
          <InputWithLabel
            identity="institution-name"
            labelText="Institution"
            type="text"
            value={formData.institution}
            handleChange={(value) => handleChange("institution", value)}
          />
          <InputWithLabel
            identity="degree-name"
            labelText="Degree"
            type="text"
            value={formData.degree}
            handleChange={(value) => handleChange("degree", value)}
          />
          <div className="date">
            <InputWithLabel
              identity="start-date"
              labelText="Start Date"
              type="text"
              value={formData.start_date}
              handleChange={(value) => handleChange("start_date", value)}
            />
            <InputWithLabel
              identity="end-date"
              labelText="End Date"
              type="text"
              value={formData.end_date}
              handleChange={(value) => handleChange("end_date", value)}
            />
          </div>
          <InputWithLabel
            identity="location-name"
            labelText="Location"
            type="text"
            value={formData.location}
            handleChange={(value) => handleChange("location", value)}
          />
          <div id="education-buttons">
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
    </>
  );
};

export default EducationDetails;
