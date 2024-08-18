import { useState } from "react";
import Resume from "./components/resume/resume";
import EditComponent from "./components/edit/edit_component";

const exampleCvInformation = {
  header: {
    name: "SAHIL SAXENA",
    details: {
      email: "sahil77.saxena@gmail.com",
      phone: "+97155337830",
      location: "Manchester",
    },
  },
  education: [
    {
      institution: "University of Manchester",
      degree: "BSc Computer Science",
      start_date: "05/2024",
      end_date: "09/2025",
      location: "New York",
    },
  ],
  skills: ["Coding", "Cooking", "Rapping"],
  experience: [
    {
      company_name: "Umbrella Inc",
      position: "Designer",
      start_date: "05/2024",
      end_date: "09/2025",
      location: "New York",
      description:
        "The First AI company in the world. They have revolutionized the industry.",
    },
    {
      company_name: "Microsoft",
      position: "Software Engineer",
      start_date: "05/2022",
      end_date: "",
      location: "Dubai",
      description: "One of the greatest companies to exist",
    },
  ],
};

function App() {
  const [cvInformation, changeCvInformation] = useState({
    header: {
      name: "SAHIL SAXENA",
      details: {
        email: "sahil77.saxena@gmail.com",
        phone: "+97155337830",
        location: "Manchester",
      },
    },
    education: [
      {
        institution: "University of Manchester",
        degree: "BSc Computer Science",
        start_date: "05/2024",
        end_date: "09/2025",
        location: "New York",
      },
    ],
    skills: ["Coding", "Cooking", "Rapping"],
    experience: [
      {
        company_name: "Umbrella Inc",
        position: "Designer",
        start_date: "05/2024",
        end_date: "09/2025",
        location: "New York",
        description:
          "The First AI company in the world. They have revolutionized the industry.",
      },
      {
        company_name: "Microsoft",
        position: "Software Engineer",
        start_date: "05/2022",
        end_date: "",
        location: "Dubai",
        description: "One of the greatest companies to exist",
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
