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
      didUserAnswer: false,
      userAnswer: true,
      userSelectedAnswerIndex: 0,
    }))
  );

  // the following value will return a true or a false based on if the quiz is in progress or not
  const [quizInProgress, setQuizInProgress] = useState(true);

  // keeping the 'move to next question' code dry

  const markUserAnswered = function () {
    // making it so that if we move to a next question, we the didUserAnswer property to be true
    setUserAnswers((oldAnswers) => {
      oldAnswers[currentQuestion.questionIndex].didUserAnswer = true;
      return oldAnswers;
    });
  };
  const moveToNextQuestion = function () {
    if (currentQuestion.questionIndex < questions.length - 1) {
      setCurrentQuestion((oldQuestionObject) => {
        return questions[oldQuestionObject.questionIndex + 1];
      });
    } else {
      // to do something when the user finishes the entire quizz thing
      setQuizInProgress(false);
    }
  };

  const handleCorrectSelection = function () {
    markUserAnswered();
    moveToNextQuestion();
  };

  const handleWrongSelection = function (wrongChoiceIndex) {
    markUserAnswered();
    setUserAnswers((oldAnswerArray) => {
      // replacing the nth answer in the array to false because the user pressed
      // a wrong answer
      oldAnswerArray[currentQuestion.questionIndex].userAnswer = false;
      oldAnswerArray[currentQuestion.questionIndex].userSelectedAnswerIndex =
        wrongChoiceIndex;
      return oldAnswerArray;
    });

    moveToNextQuestion();
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
          setQuizInProgress={setQuizInProgress}
        />
      ) : (
        // the results page will be displayed if the quiz is not in progress (quiz ended)
        <TestResults userAnswers={userAnswers} />
      )}
    </>
  );
};

export default TestView;
