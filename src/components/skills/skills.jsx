/* eslint-disable react/prop-types */
import { useState } from "react";
import Break from "../line-break/break";
import AddExperienceIconComponent from "../icons/add_icon_with_text";
import { PiCompassToolBold } from "react-icons/pi";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import SkillDetails from "../details/skills_details";

const Skills = ({ cvInformation, handleCvChange }) => {
  const [modalOpen, changeModalOpen] = useState(false);
  const [selectedItem, changeSelectedItem] = useState("skills-list");
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

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
    const newSkill = ""; // Initialize with an empty skill
    handleCvChange((prev) => ({
      ...prev,
      skills: [...prev.skills, newSkill],
    }));
    setSelectedSkill(newSkill);
    setSelectedIndex(cvInformation.skills.length); // This index will be out of bounds for the new skill
    changeSelectedItem("skill-details");
  };

  return (
    <div id="skills-container" className="page-container">
      <div id="skills-title" className="page-title" onClick={handleModalChange}>
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
                      <p>{skill}</p>
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
            selectedSkill !== null && (
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
