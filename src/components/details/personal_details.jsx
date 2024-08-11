import InputWithLabel from "../inputs/input_with_label";

const PersonalDetails = () => {
  return (
    <>
      <div id="personal-info">
        <p>Personal Details</p>
        <InputWithLabel
          identity="name-info"
          labelText="Full Name"
          type="text"
        />
        <InputWithLabel identity="email" labelText="Email" type="email" />
        <InputWithLabel identity="phone" labelText="Phone Number" type="tel" />
        <InputWithLabel identity="location" labelText="Location" type="text" />
      </div>
    </>
  );
};

export default PersonalDetails;
