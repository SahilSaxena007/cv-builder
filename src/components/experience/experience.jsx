import { useState } from "react";
import Break from "../line-break/break";
import Add_experience_icon_component from "../icons/add_icon_with_text";
import { IoBriefcaseSharp } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";

const Experience = () => {
  const [modalOpen, changeModalOpen] = useState(false);
  const handleModalChange = () => {
    changeModalOpen(!modalOpen);
  };
  return (
    <>
      <div id="experience-container">
        <div id="experience-title">
          <IoBriefcaseSharp size={24} /> {/* Adjust the size as needed */}
          <p>Experience</p>
          {modalOpen && (
            <RiArrowDropUpLine size={34} onClick={handleModalChange} />
          )}
          {!modalOpen && (
            <RiArrowDropDownLine size={34} onClick={handleModalChange} />
          )}
          {/* Adjust the size as needed */}
        </div>
        {modalOpen && (
          <div id="experience-modal">
            <Break />
            <Add_experience_icon_component text="Experience" />
          </div>
        )}
      </div>
    </>
  );
};

export default Experience;
