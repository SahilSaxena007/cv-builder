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
          {information.header.name && (
            <div id="name">{information.header.name}</div>
          )}
          <div id="personal-details">
            {information.header.details.email && (
              <div className="detail-item">
                <MdEmail color="white" />
                <p>{information.header.details.email}</p>
              </div>
            )}
            {information.header.details.phone && (
              <div className="detail-item">
                <FaPhoneAlt color="white" />
                <p>{information.header.details.phone}</p>
              </div>
            )}
            {information.header.details.location && (
              <div className="detail-item">
                <IoLocationSharp color="white" />
                <p>{information.header.details.location}</p>
              </div>
            )}
          </div>
        </div>
        <div id="resume-information"></div>
      </div>
    </>
  );
};

export default Resume;
