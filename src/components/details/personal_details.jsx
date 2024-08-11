/* eslint-disable react/prop-types */
import InputWithLabel from "../inputs/input_with_label";

const PersonalDetails = ({ cvInformation, handleCvChange }) => {
  const handleChange = (field, value) => {
    // Handle changes for nested fields correctly
    handleCvChange((prev) => {
      const newDetails = { ...prev.header.details };
      const [key] = field.split(".");

      if (key === "details") {
        const subKey = field.split(".")[1];
        newDetails[subKey] = value;
      } else {
        // Handle other fields
        return {
          ...prev,
          header: {
            ...prev.header,
            [key]: value,
          },
        };
      }

      return {
        ...prev,
        header: {
          ...prev.header,
          details: newDetails,
        },
      };
    });
  };

  return (
    <>
      <div id="personal-info">
        <p>Personal Details</p>
        <InputWithLabel
          identity="name-info"
          labelText="Full Name"
          type="text"
          value={cvInformation.header.name}
          handleChange={(value) => handleChange("name", value)}
        />
        <InputWithLabel
          identity="email"
          labelText="Email"
          type="email"
          value={cvInformation.header.details.email}
          handleChange={(value) => handleChange("details.email", value)}
        />
        <InputWithLabel
          identity="phone"
          labelText="Phone Number"
          type="tel"
          value={cvInformation.header.details.phone}
          handleChange={(value) => handleChange("details.phone", value)}
        />
        <InputWithLabel
          identity="location"
          labelText="Location"
          type="text"
          value={cvInformation.header.details.location}
          handleChange={(value) => handleChange("details.location", value)}
        />
      </div>
    </>
  );
};

export default PersonalDetails;
