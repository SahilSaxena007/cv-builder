/* eslint-disable react/prop-types */
// EditComponent.jsx
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
        <Education
          cvInformation={cvInformation}
          handleCvChange={handleCvChange}
        />
        <Experience
          cvInformation={cvInformation}
          handleCvChange={handleCvChange}
        />
      </div>
    </>
  );
};

export default EditComponent;
