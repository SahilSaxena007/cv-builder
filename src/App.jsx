import { useState } from "react";
import Resume from "./components/resume/resume";
import EditComponent from "./components/edit/edit_component";

const exampleCvInformation = {
  header: {
    name: "SAHIL SAXENA",
    details: {
      email: "sahil@gmail.com",
      phone: "+447155489835",
      location: "Manchester",
    },
  },
  education: [
    {
      institution: "University of Manchester",
      degree: "BSc Computer Science",
      start_date: "09/2023",
      end_date: "06/2026",
      location: "Manchester",
    },
  ],
  skills: [
    "Coding",
    "Communication",
    "Leadership",
    "Creative",
    "Problem Solving",
    "Computer Literacy",
    "Critical Thinking",
    "Skill Management",
  ],
  experience: [
    {
      company_name: "Braiyt MENA",
      position: "Summer Intern",
      start_date: "07/2024",
      end_date: "08/2024",
      location: "Dubai",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      company_name: "Umbrella Academy",
      position: "Software Developer",
      start_date: "05/2022",
      end_date: "07/2022",
      location: "Dubai",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab.",
    },
  ],
};

function App() {
  const [cvInformation, changeCvInformation] = useState({
    header: {
      name: "SAHIL SAXENA",
      details: {
        email: "sahil@gmail.com",
        phone: "+447155489835",
        location: "Manchester",
      },
    },
    education: [
      {
        institution: "University of Manchester",
        degree: "BSc Computer Science",
        start_date: "09/2023",
        end_date: "06/2026",
        location: "Manchester",
      },
    ],
    skills: [
      "Coding",
      "Communication",
      "Leadership",
      "Creative",
      "Problem Solving",
      "Computer Literacy",
      "Critical Thinking",
      "Skill Management",
    ],
    experience: [
      {
        company_name: "Braiyt MENA",
        position: "Summer Intern",
        start_date: "07/2024",
        end_date: "08/2024",
        location: "Dubai",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        company_name: "Umbrella Academy",
        position: "Software Developer",
        start_date: "05/2022",
        end_date: "07/2022",
        location: "Dubai",
        description:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab.",
      },
    ],
  });

  const [selectedColor, setSelectedColor] = useState("#2b3d4d");

  const loadExample = () => {
    changeCvInformation(exampleCvInformation);
  };

  const clearResume = () => {
    changeCvInformation({
      header: {
        name: "",
        details: {
          email: "",
          phone: "",
          location: "",
        },
      },
      education: [],
      skills: [],
      experience: [],
    });
  };

  return (
    <>
      <div id="main-container">
        <div id="editing-container">
          <EditComponent
            cvInformation={cvInformation}
            handleCvChange={changeCvInformation}
            loadExample={loadExample}
            clearResume={clearResume}
            color={selectedColor}
            handleColourChange={setSelectedColor}
          />
        </div>
        <div id="resume-container">
          <Resume cvInformation={cvInformation} color={selectedColor} />
        </div>
      </div>
    </>
  );
}

export default App;
