// src/pages/Quiz.js
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { quizData } from "../data/quizData";
import useQuiz from "../hooks/useQuiz";
import { saveQuizResult } from "../services/quizService";

/**
 * Quiz page that presents quiz questions and tracks progress.
 */
const Quiz = () => {
  const { subject } = useParams();
  const navigate = useNavigate();
  const questions = quizData[subject] || [];

  // Always call the hook unconditionally
  const { currentQuestion, selectedAnswer, handleOptionSelect, handleNext } =
    useQuiz(questions);

  // Now, if there are no questions, return early.
  if (questions.length < 1) {
    return <p>No quiz available for this subject.</p>;
  }

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
      <NextButton
        onClick={() => handleNext(subject, saveQuizResult, navigate)}
        disabled={selectedAnswer === null}
      >
        {currentQuestion + 1 === questions.length ? "Finish" : "Next"}
      </NextButton>
    </Container>
  );
};

export default Quiz;

// --- Styled Components ---
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
