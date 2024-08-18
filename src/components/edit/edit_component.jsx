/* eslint-disable react/prop-types */
import PersonalDetails from "../details/personal_details";
import Experience from "../experience/experience";
import Education from "../education/eduction";
import Skills from "../skills/skills";
import { IoMdDownload } from "react-icons/io";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { RiFileTextFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";

const EditComponent = ({
  cvInformation,
  handleCvChange,
  loadExample,
  clearResume,
  handleColourChange,
  color,
}) => {
  const downloadPDF = () => {
    const resumeElement = document.getElementById("resume");
    html2canvas(resumeElement, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("resume.pdf");
    });
  };

  return (
    <>
      <div id="top-level">
        <div id="editing">
          <PersonalDetails
            cvInformation={cvInformation}
            handleCvChange={handleCvChange}
          />
          <Skills
            cvInformation={cvInformation}
            handleCvChange={handleCvChange}
          />
          <Education
            cvInformation={cvInformation}
            handleCvChange={handleCvChange}
          />
          <Experience
            cvInformation={cvInformation}
            handleCvChange={handleCvChange}
          />
        </div>
        <div id="additional-features">
          <div id="colour-select">
            <p>Select Colour</p>
            <div id="colour-holder">
              <label htmlFor="color">Color</label>
              <input
                id="color"
                type="color"
                value={color}
                onChange={(e) => handleColourChange(e.target.value)}
                aria-label="Select resume header color"
              />
            </div>
          </div>
          <button id="download" onClick={downloadPDF}>
            <IoMdDownload color="white" size={20} />
            <p>Download PDF</p>
          </button>

          <button id="load-example" onClick={loadExample}>
            <RiFileTextFill color="white" size={20} />
            <p>Load Example</p>
          </button>
          <button id="clear-resume" onClick={clearResume}>
            <MdDelete color="#b01616" size={20} />
            <p>Clear Resume</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default EditComponent;
