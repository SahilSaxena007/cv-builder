/* eslint-disable react/prop-types */
// import React from "react";
import PersonalDetails from "../details/personal_details";
import Experience from "../experience/experience";
import Education from "../education/eduction";
import Skills from "../skills/skills";

const EditComponent = ({ cvInformation, handleCvChange }) => {
  return (
    <>
      <div id="editing">
        <PersonalDetails
          cvInformation={cvInformation}
          handleCvChange={handleCvChange}
        />
        <Skills />
        <Education />
        <Experience
          cvInformation={cvInformation}
          handleCvChange={handleCvChange}
        />
      </div>
    </>
  );
};

export default EditComponent;
