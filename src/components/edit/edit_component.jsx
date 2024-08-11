/* eslint-disable react/prop-types */
// import React from "react";
import PersonalDetails from "../details/personal_details";
import Experience from "../experience/experience";

const EditComponent = ({ cvInformation, handleCvChange }) => {
  return (
    <>
      <div id="editing">
        <PersonalDetails
          cvInformation={cvInformation}
          handleCvChange={handleCvChange}
        />
        <Experience />
      </div>
    </>
  );
};

export default EditComponent;
