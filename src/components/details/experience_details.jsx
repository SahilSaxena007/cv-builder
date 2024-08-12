/* eslint-disable react/prop-types */
// ExperienceDetails.jsx
import { useState } from "react";
import InputWithLabel from "../inputs/input_with_label";

const ExperienceDetails = ({ experience, onSave, onDelete, onCancel }) => {
  const [formData, setFormData] = useState(experience);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSave(formData);
  };

  return (
    <>
      <div id="experience-info">
        <form onSubmit={handleSubmit}>
          <InputWithLabel
            identity="company-name"
            labelText="Company Name"
            type="text"
            value={formData.company_name}
            handleChange={(value) => handleChange("company_name", value)}
          />
          <InputWithLabel
            identity="position-name"
            labelText="Position"
            type="text"
            value={formData.position}
            handleChange={(value) => handleChange("position", value)}
          />
          <div className="experience-date">
            <InputWithLabel
              identity="start-date"
              labelText="Start Date"
              type="textt"
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
          <div className="input">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              value={formData.description}
              onChange={(e) => handleChange("description", e.target.value)}
            ></textarea>
          </div>
          <div id="experience-buttons">
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

export default ExperienceDetails;
