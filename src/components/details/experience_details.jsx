import InputWithLabel from "../inputs/input_with_label";

const ExperienceDetails = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };
  return (
    <>
      <div id="experience-info">
        <form onSubmit={handleSubmit}>
          <InputWithLabel
            identity="company-name"
            labelText="Company Name"
            type="text"
            value=""
          />
          <InputWithLabel
            identity="position-name"
            labelText="Positon"
            type="text"
            value=""
          />

          <div className="experience-date">
            <InputWithLabel
              identity="start-date"
              labelText="Start Date"
              type="date"
              value=""
            />
            <InputWithLabel
              identity="end-date"
              labelText="End Date"
              type="date"
              value=""
            />
          </div>
          <InputWithLabel
            identity="location-name"
            labelText="Location"
            type="text"
            value=""
          />

          <div className="input">
            <label htmlFor="description"> Description</label>
            <textarea id="description"></textarea>
          </div>
          <div id="experience-buttons">
            <button type="">Delete</button>
            <button type="">cancel</button>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ExperienceDetails;
