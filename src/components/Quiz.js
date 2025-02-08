import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { quizData } from "../data/quizData";

const Quiz = () => {
  const { subject } = useParams();
  const navigate = useNavigate();
  // Ensure questions is at least an empty array if not defined
  const questions = quizData[subject] || [];

  // Always call hooks
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);

  // Now check if there are any questions to show
  if (questions.length < 1) {
    return <p>No quiz available for this subject.</p>;
  }

  // ... rest of your Quiz component logic
  const handleOptionSelect = (option) => {
    setSelectedAnswer(option);
  };

  const handleNext = () => {
    if (selectedAnswer === null) return;

    const isCorrect = selectedAnswer.isCorrect;
    if (isCorrect) setScore(score + 1);

    const answerRecord = {
      question: questions[currentQuestion].question,
      selected: selectedAnswer.answer,
      isCorrect,
    };
    setAnswers([...answers, answerRecord]);
    setSelectedAnswer(null);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const existingResults = JSON.parse(
        localStorage.getItem("quizResults") || "[]"
      );
      const newResult = {
        subject,
        score: isCorrect ? score + 1 : score,
        total: questions.length,
        timestamp: new Date().toLocaleString(),
      };
      localStorage.setItem(
        "quizResults",
        JSON.stringify([...existingResults, newResult])
      );
      navigate("/recap", {
        state: {
          answers: [...answers, answerRecord],
          score: isCorrect ? score + 1 : score,
          total: questions.length,
        },
      });
    }
  };

  return (
    <Container>
      <QuestionCount>
        Question {currentQuestion + 1} of {questions.length}
      </QuestionCount>
      <QuestionText>{questions[currentQuestion].question}</QuestionText>
      <OptionsContainer>
        {questions[currentQuestion].options.map((option, index) => (
          <OptionButton
            key={index}
            onClick={() => handleOptionSelect(option)}
            selected={selectedAnswer === option}
          >
            {option.answer}
          </OptionButton>
        ))}
      </OptionsContainer>
      <NextButton onClick={handleNext} disabled={selectedAnswer === null}>
        {currentQuestion + 1 === questions.length ? "Finish" : "Next"}
      </NextButton>
    </Container>
  );
};

export default Quiz;

const Container = styled.div`
  text-align: center;
  padding: 30px;
`;

const QuestionCount = styled.h3`
  color: #555;
  margin-bottom: 10px;
`;

const QuestionText = styled.h2`
  margin: 20px 0;
  color: #333;
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 30px;
  align-items: center;
`;

const OptionButton = styled.button`
  background: ${({ selected }) => (selected ? "#0056b3" : "#007bff")};
  color: white;
  padding: 12px 20px;
  width: 80%;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: ${({ selected }) => (selected ? "#004494" : "#0056b3")};
  }
`;

const NextButton = styled.button`
  background: #28a745;
  color: white;
  padding: 12px 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.2s;

  &:disabled {
    background: #a8d5a8;
    cursor: not-allowed;
  }

  &:hover:enabled {
    background: #1e7e34;
  }
`;
