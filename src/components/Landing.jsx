import "../App.css";

// SVG Imports:
import { editLogo } from "../../public/editLogo";
import { quizLogo } from "../../public/quizLogo";
import { reviewLogo } from "../../public/reviewLogo";

// Component Imports:
import Card from "./subcomponents/Card";
import HeroHeading from "./subcomponents/HeroHeading";

function Landing({ onChangeDisplay }) {
  return (
    <>
      {/* Fixed GitHub Repo Button on top right */}
      <div className="fixed top-4 right-4 z-50">
        <a
          href="https://github.com/blackmask-exe/quiz-manager-react" // Update with your repo URL
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center border border-black text-black px-3 py-2 rounded hover:bg-black hover:text-white transition-colors"
        >
          <svg
            className="w-6 h-6"
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 
              6.53 5.47 7.59.4.07.55-.17.55-.38 
              0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 
              1.08.58 1.23.82.72 1.21 1.87.87 
              2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 
              0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 
              0 0 .67-.21 2.2.82a7.6 7.6 0 0 1 2-.27c.68 
              0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 
              1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 
              3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 
              1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 
              8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
            ></path>
          </svg>
          <span className="ml-2">GitHub Repo</span>
        </a>
      </div>

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
