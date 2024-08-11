import { useState } from "react";
import Break from "../line-break/break";
import Add_experience_icon_component from "../icons/add_icon_with_text";
import { PiCompassToolBold } from "react-icons/pi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";

const Skills = () => {
  const [modalOpen, changeModalOpen] = useState(false);
  const handleModalChange = () => {
    changeModalOpen(!modalOpen);
  };
  return (
    <>
      <div id="skills-container" className="page-container">
        <div id="skills-title" className="page-title">
          <PiCompassToolBold size={24} /> {/* Adjust the size as needed */}
          <p>Skills</p>
          {modalOpen && (
            <RiArrowDropUpLine size={34} onClick={handleModalChange} />
          )}
          {!modalOpen && (
            <RiArrowDropDownLine size={34} onClick={handleModalChange} />
          )}
          {/* Adjust the size as needed */}
        </div>
        {modalOpen && (
          <div id="skills-modal" className="modal">
            <Break />
            <Add_experience_icon_component text="skills" />
          </div>
        )}
      </div>
    </>
  );
};

export default Skills;
