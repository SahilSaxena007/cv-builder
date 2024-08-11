import React from "react";
import PersonalDetails from "../details/personal_details";

const EditComponent = ({ cvInformation, handleCvChange }) => {
  return (
    <>
      <div id="editing">
        <PersonalDetails
          cvInformation={cvInformation}
          handleCvChange={handleCvChange}
        />
      </div>
    </>
  );
};

export default EditComponent;
