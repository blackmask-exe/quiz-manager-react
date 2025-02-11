import "../App.css";

// Question Imports:
import { questions } from "../questionBank";
// SVG Imports:
import { editLogo } from "../../public/editLogo";
import { quizLogo } from "../../public/quizLogo";
import { reviewLogo } from "../../public/reviewLogo";

// Component Imports:
// import Header from "../components/Header";
import Card from "./subcomponents/Card";
import HeroHeading from "./subcomponents/HeroHeading";

function Landing({ onChangeDisplay }) {
  return (
    <>
      <HeroHeading />
      <div className="grid grid-cols-3 gap-6 p-8 mt-16 max-w-7xl mx-auto">
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
