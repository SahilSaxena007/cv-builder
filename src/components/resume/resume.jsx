import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

// Helper function to determine if color is dark
const isColorDark = (color) => {
  const rgb = parseInt(color.substring(1), 16); // Convert hex to RGB
  const r = (rgb >> 16) & 0xff;
  const g = (rgb >> 8) & 0xff;
  const b = (rgb >> 0) & 0xff;
  // Calculate luminance
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return luminance < 128;
};

// eslint-disable-next-line react/prop-types
const Resume = ({ cvInformation, color }) => {
  const information = cvInformation;
  const darkColor = isColorDark(color);
  const resumeHeaderStyle = {
    backgroundColor: color,
    color: darkColor ? "white" : "black",
  };

  const sectionHeaderStyle = {
    backgroundColor: darkColor ? "#eef1f2" : "black",
    color: darkColor ? "black" : "white",
  };

  return (
    <>
      <div id="resume">
        <div id="resume-header" style={resumeHeaderStyle}>
          {information.header?.name && (
            <div id="name" style={{ color: resumeHeaderStyle.color }}>
              {information.header.name}
            </div>
          )}
          <div id="personal-details">
            {information.header?.details?.email && (
              <div className="detail-item">
                <MdEmail color={resumeHeaderStyle.color} />
                <p style={{ color: resumeHeaderStyle.color }}>
                  {information.header.details.email}
                </p>
              </div>
            )}
            {information.header?.details?.phone && (
              <div className="detail-item">
                <FaPhoneAlt color={resumeHeaderStyle.color} />
                <p style={{ color: resumeHeaderStyle.color }}>
                  {information.header.details.phone}
                </p>
              </div>
            )}
            {information.header?.details?.location && (
              <div className="detail-item">
                <IoLocationSharp color={resumeHeaderStyle.color} />
                <p style={{ color: resumeHeaderStyle.color }}>
                  {information.header.details.location}
                </p>
              </div>
            )}
          </div>
        </div>

        <div id="resume-information">
          {information.education && information.education.length > 0 && (
            <div id="resume-education">
              <div
                className="header"
                style={{
                  color: resumeHeaderStyle.backgroundColor,
                  backgroundColor: sectionHeaderStyle.backgroundColor,
                }}
              >
                Education
              </div>
              <div id="education-content">
                {information.education.map((edu, index) => (
                  <div key={index} className="edu-content">
                    <div className="starting">
                      {edu.start_date} {edu.end_date && `- ${edu.end_date}`}
                    </div>
                    <div className="educationTitle">{edu.institution}</div>
                    <div className="education-location">{edu.location}</div>
                    <div className="education-degree">{edu.degree}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {information.skills && information.skills.length > 0 && (
            <div id="resume-skills">
              <div
                className="header"
                style={{
                  color: resumeHeaderStyle.backgroundColor,
                  backgroundColor: sectionHeaderStyle.backgroundColor,
                }}
              >
                Skills
              </div>
              <div id="skills-content">
                <div className="skills-grid">
                  {information.skills.map((skill, index) => (
                    <div key={index} className="skill-item">
                      • {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {information.experience && information.experience.length > 0 && (
            <div id="resume-experience">
              <div
                className="header"
                style={{
                  color: resumeHeaderStyle.backgroundColor,
                  backgroundColor: sectionHeaderStyle.backgroundColor,
                }}
              >
                Experience
              </div>
              <div id="experience-content">
                {information.experience.map((exp, index) => (
                  <div key={index} className="content">
                    <div className="starting">
                      {exp.start_date} {exp.end_date && `- ${exp.end_date}`}
                    </div>
                    <div className="experienceTitle">{exp.company_name}</div>
                    <div className="experience-location">{exp.location}</div>
                    <div className="experience-position">{exp.position}</div>
                    <div className="experience-description">
                      {exp.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Resume;
