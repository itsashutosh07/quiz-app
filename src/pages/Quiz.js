import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { quizData } from "../data/quizData";
import useQuiz from "../hooks/useQuiz";
import { saveQuizResult } from "../services/quizService";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Progress } from "../components/ui/progress";

const Quiz = () => {
  const { subject } = useParams();
  const navigate = useNavigate();
  const questions = quizData[subject] || [];

  // Destructure state and functions from the useQuiz hook
  const { currentQuestion, selectedAnswer, handleOptionSelect, handleNext } =
    useQuiz(questions);

  if (questions.length === 0) {
    return <Message>No quiz available for this subject.</Message>;
  }

  return (
    <QuizContainer>
      <SectionTitle>{subject.toUpperCase()} Quiz</SectionTitle>
      <Progress
        value={((currentQuestion + 1) / questions.length) * 100}
        className="mb-4"
      />
      <Card className="mb-6">
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
      </Card>
      <Button
        onClick={() => handleNext(subject, saveQuizResult, navigate)}
        disabled={selectedAnswer === null}
      >
        {currentQuestion + 1 === questions.length ? "Finish" : "Next"}
      </Button>
    </QuizContainer>
  );
};

export default Quiz;

const QuizContainer = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: ${({ theme }) => theme.padding};
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.primary};
`;

const QuestionText = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 20px;
  text-align: center;
`;

const OptionsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
`;

const OptionButton = styled.button`
  background: ${({ selected, theme }) =>
    selected ? theme.primaryHover : theme.primary};
  color: #fff;
  padding: 12px;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: background 0.2s, transform 0.2s;
  &:hover {
    transform: scale(1.02);
  }
`;

const Message = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.text};
`;
