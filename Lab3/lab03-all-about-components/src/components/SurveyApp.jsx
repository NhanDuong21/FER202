import { useState } from "react";
import { questions } from "../data/questions";
import SurveyQuestion from "./SurveyQuestion";
import SurveyResult from "./SurveyResult";

export default function SurveyApp() {
  const total = questions.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(total).fill(""));

  const isCompleted = currentIndex >= total;

  const handleSelectAnswer = (value) => {
    setAnswers((prev) => {
      const copy = [...prev];
      copy[currentIndex] = value;
      return copy;
    });
  };

  const handleNext = () => setCurrentIndex((i) => i + 1);

  const handleRestart = () => {
    setCurrentIndex(0);
    setAnswers(Array(total).fill(""));
  };

  return (
    <div className="container py-5" style={{ maxWidth: 980 }}>
      <h1 className="text-center text-primary fw-bold mb-4">
        Survey Application
      </h1>

      <div className="mx-auto" style={{ maxWidth: 900 }}>
        {!isCompleted ? (
          <SurveyQuestion
            questionText={questions[currentIndex].text}
            options={questions[currentIndex].options}
            currentValue={answers[currentIndex]}
            onSelect={handleSelectAnswer}
            onNext={handleNext}
          />
        ) : (
          <SurveyResult answers={answers} onRestart={handleRestart} />
        )}
      </div>
    </div>
  );
}
