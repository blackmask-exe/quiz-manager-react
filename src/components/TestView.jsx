import React, { useState } from "react";
import { questions } from "../questionBank";

// Component Imports
import TestResults from "./subcomponents/TestResults";
import TestQuestionsView from "./subcomponents/TestQuestionsView";

const TestView = ({}) => {
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);

  // fills this state with all 'true', assuming the user enters all correct answers, but
  // we replace those answers the user did not get right
  const [userAnswers, setUserAnswers] = useState(
    questions.map(() => ({
      userAnswer: true,
      userSelectedAnswerIndex: 0,
    }))
  );

  // the following value will return a true or a false based on if the quiz is in progress or not
  const [quizInProgress, setQuizInProgress] = useState(true);

  // extracting data from the question object for convenience

  const handleCorrectSelection = function () {
    // condition for moving to the next question only if there are questions remaining:
    if (currentQuestion.questionIndex < questions.length - 1) {
      setCurrentQuestion((oldQuestionObject) => {
        return questions[oldQuestionObject.questionIndex + 1];
      });
    } else {
      // to do something when the user finishes the entire quizz thing
      setQuizInProgress(false);
    }
  };

  const handleWrongSelection = function (wrongChoiceIndex) {
    setUserAnswers((oldAnswerArray) => {
      // replacing the nth answer in the array to false because the user pressed
      // a wrong answer
      oldAnswerArray[currentQuestion.questionIndex].userAnswer = false;
      oldAnswerArray[currentQuestion.questionIndex].userSelectedAnswerIndex =
        wrongChoiceIndex;
      return oldAnswerArray;
    });

    if (currentQuestion.questionIndex < questions.length - 1) {
      setCurrentQuestion((oldQuestionObject) => {
        return questions[oldQuestionObject.questionIndex + 1];
      });
    } else {
      // to do something when the user finishes the entire quizz thing
      setQuizInProgress(false);
    }
  };
  return (
    <>
      {/* the below conditionally displays either the testing mode, or the results
      page based on the state value */}
      {quizInProgress ? (
        <TestQuestionsView
          currentQuestion={currentQuestion}
          setCurrentQuestion={setCurrentQuestion}
          handleCorrectSelection={handleCorrectSelection}
          handleWrongSelection={handleWrongSelection}
        />
      ) : (
        // the results page will be displayed if the quiz is not in progress (quiz ended)
        <TestResults userAnswers={userAnswers} />
      )}
    </>
  );
};

export default TestView;
