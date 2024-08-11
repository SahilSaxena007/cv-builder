import { useState } from "react";
import Break from "../line-break/break";
import Add_experience_icon_component from "../icons/add_icon_with_text";
import { FaGraduationCap } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";

const Education = () => {
  const [modalOpen, changeModalOpen] = useState(false);
  const handleModalChange = () => {
    changeModalOpen(!modalOpen);
  };
  return (
    <>
      <div id="education-container" className="page-container">
        <div id="education-title" className="page-title">
          <FaGraduationCap size={24} /> {/* Adjust the size as needed */}
          <p>Education</p>
          {modalOpen && (
            <RiArrowDropUpLine size={34} onClick={handleModalChange} />
          )}
          {!modalOpen && (
            <RiArrowDropDownLine size={34} onClick={handleModalChange} />
          )}
          {/* Adjust the size as needed */}
        </div>
        {modalOpen && (
          <div id="education-modal" className="modal">
            <Break />
            <Add_experience_icon_component text="Education" />
          </div>
        )}
      </div>
    </>
  );
};

export default Education;
