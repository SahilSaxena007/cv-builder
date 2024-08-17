/* eslint-disable react/prop-types */
import { useState } from "react";
import Break from "../line-break/break";
import AddExperienceIconComponent from "../icons/add_icon_with_text";
import { PiCompassToolBold } from "react-icons/pi";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import SkillDetails from "../details/skills_details";

const Skills = ({ cvInformation, handleCvChange }) => {
  const [modalOpen, changeModalOpen] = useState(false);
  const [eyeState, setEyeState] = useState(
    cvInformation.skills.map(() => true) // Initialize eye state for skills
  );
  const [selectedItem, changeSelectedItem] = useState("skills-list");
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const toggleEye = (index, event) => {
    event.stopPropagation(); // Prevent the click event from bubbling up
    setEyeState((prev) => {
      const newEyeState = [...prev];
      newEyeState[index] = !newEyeState[index]; // Toggle visibility
      return newEyeState;
    });
  };

  const handleModalChange = () => {
    changeModalOpen(!modalOpen);
  };

  const handleSkillClick = (skill, index) => {
    setSelectedSkill(skill);
    setSelectedIndex(index);
    changeSelectedItem("skill-details");
  };

  const handleSkillChange = (updatedSkill) => {
    handleCvChange((prev) => {
      const newSkills = [...prev.skills];
      newSkills[selectedIndex] = updatedSkill;
      return { ...prev, skills: newSkills };
    });
    changeSelectedItem("skills-list");
  };

  const handleSkillDelete = () => {
    handleCvChange((prev) => {
      const newSkills = prev.skills.filter(
        (_, index) => index !== selectedIndex
      );
      return { ...prev, skills: newSkills };
    });
    changeSelectedItem("skills-list");
  };

  const handleAddSkill = () => {
    const newSkill = "";
    handleCvChange((prev) => ({
      ...prev,
      skills: [...prev.skills, newSkill],
    }));
    setSelectedSkill(newSkill);
    setSelectedIndex(cvInformation.skills.length);
    changeSelectedItem("skill-details");
  };

  return (
    <div id="skills-container" className="page-container">
      <div id="skills-title" className="page-title">
        <PiCompassToolBold size={24} />
        <p>Skills</p>
        {modalOpen ? (
          <RiArrowDropUpLine size={34} onClick={handleModalChange} />
        ) : (
          <RiArrowDropDownLine size={34} onClick={handleModalChange} />
        )}
      </div>
      {modalOpen && (
        <div id="skills-modal" className="modal">
          <Break />
          {selectedItem === "skills-list" ? (
            <>
              {cvInformation.skills.length > 0 ? (
                cvInformation.skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div
                      className="skill-item-content"
                      onClick={() => handleSkillClick(skill, index)}
                    >
                      <p>{eyeState[index] ? skill : "Hidden"}</p>
                      {eyeState[index] ? (
                        <IoIosEye
                          size={24}
                          onClick={(event) => toggleEye(index, event)}
                        />
                      ) : (
                        <IoIosEyeOff
                          size={24}
                          onClick={(event) => toggleEye(index, event)}
                        />
                      )}
                    </div>
                    <hr />
                  </div>
                ))
              ) : (
                <p>No skills listed</p>
              )}
              <AddExperienceIconComponent
                text="Skill"
                onClick={handleAddSkill}
              />
            </>
          ) : (
            selectedSkill && (
              <SkillDetails
                skill={selectedSkill}
                onSave={handleSkillChange}
                onDelete={handleSkillDelete}
                onCancel={() => changeSelectedItem("skills-list")}
              />
            )
          )}
        </div>
      )}
    </div>
  );
};

export default Skills;
