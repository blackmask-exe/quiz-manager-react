import React, { useState } from "react";
import { questions } from "../questionBank";

const TestView = ({}) => {
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);

  // fills this state with all 'true', assuming the user enters all correct answers, but
  // we replace those answers the user did not get right
  const [userAnswers, setUserAnswers] = useState(
    Array(questions.length).fill(true)
  );

  // the following value will return a true or a false based on if the quiz is in progress or not
  const [quizInProgress, setQuizInProgress] = useState(true);

  // extracting data from the question object for convenience
  const question = currentQuestion.question;
  const options = currentQuestion.options;

  const handleCorrectSelection = function () {
    // console.log("Is the quiz in progress?", quizInProgress);

    // console.log(questions.length);
    // condition for moving to the next question only if there are questions remaining:
    if (currentQuestion.questionIndex < questions.length - 1) {
      setCurrentQuestion((oldQuestionObject) => {
        return questions[oldQuestionObject.questionIndex + 1];
      });
    } else {
      // to do something when the user finishes the entire quizz thing
      setQuizInProgress(false);
      console.log("You finished the whole quiz congratulations");
    }
    console.log(userAnswers);
  };

  const handleWrongSelection = function () {
    setUserAnswers((oldAnswerArray) => {
      // replacing the nth answer in the array to false because the user pressed
      // a wrong answer
      oldAnswerArray[currentQuestion.questionIndex] = false;
      return oldAnswerArray;
    });

    console.log(userAnswers);
  };
  return (
    <>
      {quizInProgress ? (
        <div className="flex flex-col items-center mt-24 px-4 w-full max-w-[85rem] mx-auto">
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
                    handleWrongSelection();
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
      ) : (
        <h1>keep going keep going</h1>
      )}
    </>
  );
};

export default TestView;
