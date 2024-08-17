import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

// eslint-disable-next-line react/prop-types
const Resume = ({ cvInformation }) => {
  const information = cvInformation;

  return (
    <>
      <div id="resume">
        <div id="resume-header">
          {information.header?.name && (
            <div id="name">{information.header.name}</div>
          )}
          <div id="personal-details">
            {information.header?.details?.email && (
              <div className="detail-item">
                <MdEmail color="white" />
                <p>{information.header.details.email}</p>
              </div>
            )}
            {information.header?.details?.phone && (
              <div className="detail-item">
                <FaPhoneAlt color="white" />
                <p>{information.header.details.phone}</p>
              </div>
            )}
            {information.header?.details?.location && (
              <div className="detail-item">
                <IoLocationSharp color="white" />
                <p>{information.header.details.location}</p>
              </div>
            )}
          </div>
        </div>

        <div id="resume-information">
          {information.education && information.education.length > 0 && (
            <div id="resume-education">
              <div className="header">Education</div>
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
              <div className="header">Skills</div>
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
              <div className="header">Experience</div>
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
