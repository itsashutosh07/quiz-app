import { useState } from "react";

/**
 * useQuiz hook encapsulates the state and logic for the quiz.
 * @param {array} questions - List of quiz questions.
 * @returns {object} Object containing quiz state and handler functions.
 */
const useQuiz = (questions) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);

  /**
   * Sets the selected answer.
   * @param {object} option - The selected answer option.
   */
  const handleOptionSelect = (option) => {
    setSelectedAnswer(option);
  };

  /**
   * Handles progression to the next question or completion of the quiz.
   * @param {string} subject - Quiz subject.
   * @param {function} saveResult - Callback to save quiz results.
   * @param {function} navigate - Navigation function to change route.
   */
  const handleNext = (subject, saveResult, navigate) => {
    if (selectedAnswer === null) return;

    const isCorrect = selectedAnswer.isCorrect;
    setScore((prev) => (isCorrect ? prev + 1 : prev));

    const answerRecord = {
      question: questions[currentQuestion].question,
      selected: selectedAnswer.answer,
      isCorrect,
    };

    setAnswers((prev) => [...prev, answerRecord]);
    setSelectedAnswer(null);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      // Save the final quiz result.
      saveResult({
        subject,
        score: isCorrect ? score + 1 : score,
        total: questions.length,
        timestamp: new Date().toLocaleString(),
      });
      // Navigate to the Recap page, passing quiz data.
      navigate("/recap", {
        state: {
          answers: [...answers, answerRecord],
          score: isCorrect ? score + 1 : score,
          total: questions.length,
        },
      });
    }
  };

  return {
    currentQuestion,
    selectedAnswer,
    score,
    answers,
    handleOptionSelect,
    handleNext,
  };
};

export default useQuiz;
