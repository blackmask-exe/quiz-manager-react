// Component Imports
import { useState } from "react";
import Landing from "./components/Landing";
import TestView from "./components/TestView";

// Question Imports
import { questions } from "./questionBank";
const selectedQuestion = questions[0];

function App() {
  // used to switch to the different types of content available in the website
  const [currentDisplay, setCurrentDisplay] = useState("landing");
  // types of view that will be supported as of now: 1. landing, 2. quiz mode
  return (
    <>
      {/* conditionally display different versions of the website depending upon the display state */}
      {currentDisplay === "landing" ? (
        <Landing onChangeDisplay={setCurrentDisplay} />
      ) : null}

      {currentDisplay === "quiz" ? <TestView /> : null}
    </>
  );
}

export default App;
