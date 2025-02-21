import "../App.css";

// SVG Imports:
import { editLogo } from "../../public/editLogo";
import { quizLogo } from "../../public/quizLogo";
import { reviewLogo } from "../../public/reviewLogo";

// Component Imports:
import Card from "./subcomponents/Card";
import Header from "./subcomponents/Header";

function Landing({ onChangeDisplay }) {
  return (
    <>
      <Header />
      <div className="grid grid-cols-3 gap-6 p-8 mt-8 max-w-7xl mx-auto">
        <Card
          image={quizLogo}
          heading="Quiz Mode"
          description={"Simulate a test"}
          onClick={() => {
            onChangeDisplay("quiz");
          }}
        />
        <Card
          image={reviewLogo}
          heading="Review Mode"
          description={"Stress-Free revision"}
        />
        <Card
          image={editLogo}
          heading="Edit Mode"
          description={"Add or Remove from the Database"}
        />
      </div>
    </>
  );
}

export default Landing;
