import React, { useContext } from "react";
import DeveloperContext from "../utils/DeveloperContext";

function DeveloperInfo() {
  const devContext = useContext(DeveloperContext);

  return (
    <div className="card">
      <div>
        Name: {devContext.name}
      </div>
      <div>
        Status: {devContext.mood}
      </div>
      <div>
        Lifelong learner: {devContext.lifeLongLearner.toString()}
      </div>
      <div>
        Excitement Level: {devContext.excitementLevel}
      </div>
    </div>
  );
}

export default DeveloperInfo;
