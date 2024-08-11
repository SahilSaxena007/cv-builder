import { useState } from "react";
import Resume from "./components/resume/resume";
import EditComponent from "./components/edit/edit_component";

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
    experience: [
      {
        company_name: "Umbrella Inc",
        position: "Designer",
        start_date: "25 August",
        end_date: "30 Sept",
        location: "New York",
        description: "Hello, Whatsupp",
      },
    ],
  });

  return (
    <>
      <div id="main-container">
        <div id="editing-container">
          <EditComponent
            cvInformation={cvInformation}
            handleCvChange={changeCvInformation}
          />
        </div>
        <div id="resume-container">
          {/* Passing the state to the Resume component as props */}
          <Resume cvInformation={cvInformation} />
        </div>
      </div>
    </>
  );
}

export default App;
