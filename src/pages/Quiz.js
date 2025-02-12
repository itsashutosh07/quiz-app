import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { quizData } from "../data/quizData";
import useQuiz from "../hooks/useQuiz";
import { saveQuizResult } from "../services/quizService";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Quiz = () => {
  const { subject } = useParams();
  const navigate = useNavigate();
  const questions = quizData[subject] || [];

  // Use custom hook to manage quiz state and logic
  const { currentQuestion, selectedAnswer, handleOptionSelect, handleNext } =
    useQuiz(questions);

  if (questions.length < 1) {
    return <Message>No quiz available for this subject.</Message>;
  }

  return (
    <QuizContainer>
      <QuestionHeader>
        <QuestionCount>
          Question {currentQuestion + 1} of {questions.length}
        </QuestionCount>
      </QuestionHeader>
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
    </QuizContainer>
  );
};

export default Quiz;

const QuizContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.padding};
  animation: ${fadeIn} 0.5s ease-out;
`;

const QuestionHeader = styled.div`
  margin-bottom: 20px;
`;

const QuestionCount = styled.h3`
  color: ${({ theme }) => theme.primary};
  text-align: center;
`;

const QuestionText = styled.h2`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.text};
  text-align: center;
  margin-bottom: 30px;
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 30px;
`;

const OptionButton = styled.button`
  background: ${({ selected, theme }) =>
    selected ? theme.primaryHover : theme.primary};
  color: #fff;
  padding: 15px;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: background 0.2s, transform 0.2s;

  &:hover {
    background: ${({ theme }) => theme.primaryHover};
    transform: scale(1.02);
  }
`;

const NextButton = styled.button`
  background: ${({ theme }) => theme.success};
  color: #fff;
  padding: 12px 30px;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: background 0.2s;
  width: 100%;

  &:disabled {
    background: ${({ theme }) =>
      theme.background === "#f5f7fa" ? "#ccc" : "#444"};
    cursor: not-allowed;
  }

  &:hover:enabled {
    background: ${({ theme }) => theme.successHover};
  }
`;

const Message = styled.p`
  text-align: center;
  font-size: 1.2rem;
  margin-top: 50px;
  color: ${({ theme }) => theme.text};
`;
