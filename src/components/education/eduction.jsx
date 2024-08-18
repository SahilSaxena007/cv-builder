/* eslint-disable react/prop-types */
// Experience.jsx
import { useState } from "react";
import Break from "../line-break/break";
import Add_experience_icon_component from "../icons/add_icon_with_text";
import { FaBook } from "react-icons/fa";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

import EducationDetails from "../details/education_details";

const Education = ({ cvInformation, handleCvChange }) => {
  const [modalOpen, changeModalOpen] = useState(false);
  const [selectedItem, changeSelectedItem] = useState("education-list");
  const [selectedEducation, setSelectedEducation] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleModalChange = () => {
    changeModalOpen(!modalOpen);
  };

  const handleEducationClick = (education, index) => {
    setSelectedEducation(education);
    setSelectedIndex(index);
    changeSelectedItem("education-details");
  };

  const handleEducationChange = (updatedEducation) => {
    handleCvChange((prev) => {
      const newEducation = [...prev.education];
      newEducation[selectedIndex] = updatedEducation;
      return { ...prev, education: newEducation };
    });
  };

  const handleEducationDelete = () => {
    handleCvChange((prev) => {
      const newEducation = prev.education.filter(
        (_, index) => index !== selectedIndex
      );
      return { ...prev, education: newEducation };
    });
    changeSelectedItem("education-list");
  };

  const handleAddEducation = () => {
    const newEducation = {
      institution: "",
      degree: "",
      start_date: "",
      end_date: "",
      location: "",
    };
    handleCvChange((prev) => ({
      ...prev,
      education: [...prev.education, newEducation],
    }));
    setSelectedEducation(newEducation);
    setSelectedIndex(cvInformation.education.length);
    changeSelectedItem("education-details");
  };

  return (
    <>
      <div id="education-container" className="page-container">
        <div
          id="education-title"
          className="page-title"
          onClick={handleModalChange}
        >
          <FaBook size={24} />
          <p>Education</p>
          {modalOpen ? (
            <RiArrowDropUpLine size={34} onClick={handleModalChange} />
          ) : (
            <RiArrowDropDownLine size={34} onClick={handleModalChange} />
          )}
        </div>
        {modalOpen && (
          <div id="education-modal" className="modal">
            <Break />
            {selectedItem === "education-list" ? (
              <>
                {cvInformation.education.length > 0 ? (
                  cvInformation.education.map((education, index) => (
                    <div key={index} className="education-item">
                      <div
                        className="edu-item"
                        onClick={() => handleEducationClick(education, index)}
                      >
                        <p>{education.institution}</p>
                      </div>
                      <hr />
                    </div>
                  ))
                ) : (
                  <p>No education listed</p>
                )}
                <Add_experience_icon_component
                  text="Education"
                  onClick={handleAddEducation}
                />
              </>
            ) : (
              selectedEducation && (
                <EducationDetails
                  education={selectedEducation}
                  onSave={handleEducationChange}
                  onDelete={handleEducationDelete}
                  onCancel={() => changeSelectedItem("education-list")}
                />
              )
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Education;
