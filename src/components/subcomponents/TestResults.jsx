import { useState } from "react";
import { questions } from "../../questionBank";

export default function TestResults({ userAnswers }) {
  // Create an array of booleans for each question's collapsed state
  const [expanded, setExpanded] = useState(
    new Array(questions.length).fill(false)
  );

  const toggleExpanded = (idx) => {
    setExpanded((prev) => {
      const newExpanded = [...prev];
      newExpanded[idx] = !newExpanded[idx];
      return newExpanded;
    });
  };

  return (
    <>
      <div className="flex flex-col items-center mt-24 px-4 w-full max-w-[85rem] mx-auto">
        <h1 className="text-4xl font-bold text-white mb-16">Quiz Results</h1>
        <div className="flex flex-col gap-4 w-full">
          {questions.map((q, idx) => {
            const isExpanded = expanded[idx];
            // Determine container border using didUserAnswer:
            const containerBorder = userAnswers[idx].didUserAnswer
              ? userAnswers[idx].userAnswer
                ? "border-green-500"
                : "border-red-500"
              : "border-gray-400";

            return (
              <div
                key={q.questionIndex}
                onClick={() => toggleExpanded(idx)}
                className={`cursor-pointer p-4 border rounded-lg bg-[#000000] w-full max-w-md mx-auto ${containerBorder}`}
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-bold text-white truncate">
                    {`Q${idx + 1}: ${q.question}`}
                  </h2>
                  <span
                    className={`text-white transition-transform duration-300 ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </div>
                {isExpanded && (
                  <>
                    <p className="mt-2 text-gray-300 text-sm text-center">
                      {userAnswers[idx].didUserAnswer
                        ? userAnswers[idx].userAnswer
                          ? "Correct"
                          : "Wrong"
                        : "Unanswered"}
                    </p>
                    {/* Options Grid in 2x2 */}
                    <div className="mt-2 grid grid-cols-2 gap-2">
                      {q.options.map((option, opIdx) => {
                        let borderClass = "border-gray-800";
                        if (!userAnswers[idx].didUserAnswer) {
                          // If unanswered, simply mark the correct option
                          if (opIdx === q.correctIndex) {
                            borderClass = "border-green-500";
                          }
                        } else {
                          if (opIdx === q.correctIndex) {
                            borderClass = "border-green-500";
                          } else if (
                            !userAnswers[idx].userAnswer &&
                            userAnswers[idx].userSelectedAnswerIndex === opIdx
                          ) {
                            borderClass = "border-red-500";
                          }
                        }
                        return (
                          <div
                            key={opIdx}
                            className={`w-full p-1 border rounded-md ${borderClass} text-center`}
                          >
                            <p className="text-white text-xs">{option}</p>
                          </div>
                        );
                      })}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
