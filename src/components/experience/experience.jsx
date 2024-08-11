/* eslint-disable react/prop-types */
import { useState } from "react";
import Break from "../line-break/break";
import Add_experience_icon_component from "../icons/add_icon_with_text";
import { IoBriefcaseSharp } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";

const Experience = ({ cvInformation }) => {
  const [modalOpen, changeModalOpen] = useState(false);
  const [eyeState, setEyeState] = useState(
    cvInformation.experience.map(() => true)
  );

  const handleModalChange = () => {
    changeModalOpen(!modalOpen);
  };

  const toggleEye = (index) => {
    setEyeState((prev) => {
      const newEyeState = [...prev];
      newEyeState[index] = !newEyeState[index];
      return newEyeState;
    });
  };

  return (
    <>
      <div id="experience-container" className="page-container">
        <div id="experience-title" className="page-title">
          <IoBriefcaseSharp size={24} /> {/* Adjust the size as needed */}
          <p>Experience</p>
          {modalOpen ? (
            <RiArrowDropUpLine size={34} onClick={handleModalChange} />
          ) : (
            <RiArrowDropDownLine size={34} onClick={handleModalChange} />
          )}
        </div>
        {modalOpen && (
          <div id="experience-modal" className="modal">
            <Break />
            {cvInformation.experience.length > 0 ? (
              cvInformation.experience.map((experience, index) => (
                <div key={index} className="experience-item">
                  <div className="company-item">
                    <p>{experience.company_name}</p>
                    {eyeState[index] ? (
                      <IoIosEye size={24} onClick={() => toggleEye(index)} />
                    ) : (
                      <IoIosEyeOff size={24} onClick={() => toggleEye(index)} />
                    )}
                  </div>
                  <hr />
                </div>
              ))
            ) : (
              <p>No experience listed</p>
            )}
            <Add_experience_icon_component text="Experience" />
          </div>
        )}
      </div>
    </>
  );
};

export default Experience;
