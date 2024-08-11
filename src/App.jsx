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
