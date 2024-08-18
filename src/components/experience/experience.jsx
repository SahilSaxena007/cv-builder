/* eslint-disable react/prop-types */
// Experience.jsx
import { useState } from "react";
import Break from "../line-break/break";
import Add_experience_icon_component from "../icons/add_icon_with_text";
import { IoBriefcaseSharp } from "react-icons/io5";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import ExperienceDetails from "../details/experience_details";

const Experience = ({ cvInformation, handleCvChange }) => {
  const [modalOpen, changeModalOpen] = useState(false);
  const [selectedItem, changeSelectedItem] = useState("company-list");
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleModalChange = () => {
    changeModalOpen(!modalOpen);
  };

  const handleExperienceClick = (experience, index) => {
    setSelectedExperience(experience);
    setSelectedIndex(index);
    changeSelectedItem("experience-details");
  };

  const handleExperienceChange = (updatedExperience) => {
    handleCvChange((prev) => {
      const newExperience = [...prev.experience];
      newExperience[selectedIndex] = updatedExperience;
      return { ...prev, experience: newExperience };
    });
  };

  const handleExperienceDelete = () => {
    handleCvChange((prev) => {
      const newExperience = prev.experience.filter(
        (_, index) => index !== selectedIndex
      );
      return { ...prev, experience: newExperience };
    });
    changeSelectedItem("company-list");
  };

  const handleAddExperience = () => {
    const newExperience = {
      company_name: "",
      position: "",
      start_date: "",
      end_date: "",
      location: "",
      description: "",
    };
    handleCvChange((prev) => ({
      ...prev,
      experience: [...prev.experience, newExperience],
    }));
    setSelectedExperience(newExperience);
    setSelectedIndex(cvInformation.experience.length);
    changeSelectedItem("experience-details");
  };

  return (
    <>
      <div id="experience-container" className="page-container">
        <div
          id="experience-title"
          className="page-title"
          onClick={handleModalChange}
        >
          <IoBriefcaseSharp size={24} />
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
            {selectedItem === "company-list" ? (
              <>
                {cvInformation.experience.length > 0 ? (
                  cvInformation.experience.map((experience, index) => (
                    <div key={index} className="experience-item">
                      <div
                        className="company-item"
                        onClick={() => handleExperienceClick(experience, index)}
                      >
                        <p>{experience.company_name}</p>
                      </div>
                      <hr />
                    </div>
                  ))
                ) : (
                  <p>No experience listed</p>
                )}
                <Add_experience_icon_component
                  text="Experience"
                  onClick={handleAddExperience}
                />
              </>
            ) : (
              selectedExperience && (
                <ExperienceDetails
                  experience={selectedExperience}
                  onSave={handleExperienceChange}
                  onDelete={handleExperienceDelete}
                  onCancel={() => changeSelectedItem("company-list")}
                />
              )
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Experience;
