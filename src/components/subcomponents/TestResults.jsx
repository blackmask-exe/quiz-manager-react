import { questions } from "../../questionBank";

export default function TestResults({ userAnswers }) {
  return (
    <>
      <div className="flex flex-col items-center mt-24 px-4 w-full max-w-[85rem] mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Quiz Results</h1>
        <div className="flex flex-col gap-4 w-full">
          {questions.map((q, idx) => (
            <div
              key={q.questionIndex}
              className={`p-4 border rounded-lg bg-[#000000] w-full max-w-md mx-auto ${
                userAnswers[idx].userAnswer
                  ? "border-green-500"
                  : "border-red-500"
              }`}
            >
              <h2 className="text-lg font-bold text-white text-center">
                {q.question}
              </h2>
              <p className="mt-2 text-gray-300 text-sm text-center">
                {userAnswers[idx].userAnswer ? "Correct" : "Wrong"}
              </p>
              {/* Options List displayed vertically */}
              <div className="mt-2 grid grid-cols-2 gap-2">
                {q.options.map((option, opIdx) => {
                  let borderClass = "border-gray-800";
                  if (opIdx === q.correctIndex) {
                    borderClass = "border-green-500";
                  } else if (
                    !userAnswers[idx].userAnswer &&
                    userAnswers[idx].userSelectedAnswerIndex === opIdx
                  ) {
                    borderClass = "border-red-500";
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
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
