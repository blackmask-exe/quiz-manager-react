import TestTimer from "./TestTimer";
import { questions } from "../../questionBank";

export default function TestQuestionsView({
  currentQuestion,
  handleCorrectSelection,
  handleWrongSelection,
  setQuizInProgress,
}) {
  const question = currentQuestion.question;
  const options = currentQuestion.options;

  return (
    <>
      {" "}
      <div className="flex flex-col items-center mt-24 px-4 w-full max-w-[85rem] mx-auto">
        {/* Header Row with Timer */}
        <TestTimer setQuizInProgress={setQuizInProgress} />

        {/* Question Section */}
        <div className="text-center mb-8 w-full">
          <h2 className="text-3xl font-bold text-white mb-6">{question}</h2>
        </div>

        {/* Progress Bar */}
        <div className="w-full mb-12">
          <div className="w-full bg-gray-800 rounded-full h-2">
            <div
              className="bg-[#0B192C] h-2 rounded-full transition-all duration-300"
              style={{
                width: `${
                  (currentQuestion.questionIndex / questions.length) * 100
                }%`,
              }}
            ></div>
          </div>
          <p className="text-gray-400 text-sm mt-2 text-center">
            Question {currentQuestion.questionIndex} of {questions.length}
          </p>
        </div>

        {/* Options Grid */}
        <div className="grid grid-cols-1 gap-4 w-full">
          {options.map((option, index) => (
            <button
              onClick={() => {
                // if the user chose the right answer
                if (index == currentQuestion.correctIndex) {
                  handleCorrectSelection();
                } else {
                  handleWrongSelection(index);
                }
              }}
              key={index}
              className="w-full py-4 px-6 bg-[#000000] border border-gray-800 
                     text-white rounded-lg transition-all duration-300 
                     hover:bg-[#0B192C] hover:border-gray-600 text-lg text-center"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
