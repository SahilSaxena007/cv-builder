import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const Resume = () => {
  return (
    <>
      <div id="resume">
        <div id="resume-header">
          <div id="name">SAHIL SAXENA</div>
          <div id="personal-details">
            <div className="detail-item">
              <MdEmail color="white" />
              <p>sahil77.saxena@gmail.com</p>
            </div>
            <div className="detail-item">
              <FaPhoneAlt color="white" />
              <p>+971553378350</p>
            </div>
            <div className="detail-item">
              <IoLocationSharp color="white" />
              <p>London</p>
            </div>
          </div>
        </div>
        <div id="resume-information"></div>
      </div>
    </>
  );
};

export default Resume;
