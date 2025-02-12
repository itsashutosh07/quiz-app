import React from "react";
import { useLocation, Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

/**
 * Recap page displays quiz results with detailed breakdown.
 */

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Recap = () => {
  const { state } = useLocation();

  if (!state) {
    return <Message>No quiz data found. Please take a quiz first.</Message>;
  }

  const { answers, score, total } = state;

  return (
    <RecapContainer>
      <Title>Quiz Recap</Title>
      <Score>
        Your Score: {score} / {total}
      </Score>
      <List>
        {answers.map((item, index) => (
          <ListItem key={index} $correct={item.isCorrect}>
            <Question>
              <strong>Q{index + 1}:</strong> {item.question}
            </Question>
            <Answer>
              Your Answer: {item.selected}{" "}
              {item.isCorrect ? (
                <FaCheckCircle color="#28a745" />
              ) : (
                <FaTimesCircle color="#dc3545" />
              )}
            </Answer>
          </ListItem>
        ))}
      </List>
      <StyledLink to="/">
        <Button>Return Home</Button>
      </StyledLink>
    </RecapContainer>
  );
};

export default Recap;

// Styled Components for Recap page
const RecapContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.padding};
  animation: ${fadeIn} 0.5s ease-out;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.primary};
  text-align: center;
  margin-bottom: 20px;
`;

const Score = styled.h2`
  text-align: center;
  color: ${({ theme }) => theme.success};
  margin-bottom: 30px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  background: ${({ theme }) =>
    theme.background === "#f5f7fa" ? "#ffffff" : "#2c2c2c"};
  border-left: 5px solid
    ${({ $correct, theme }) => ($correct ? theme.success : theme.error)};
  margin-bottom: 15px;
  padding: 15px;
  border-radius: ${({ theme }) => theme.borderRadius};
  animation: ${fadeIn} 0.4s ease;
`;

const Question = styled.p`
  font-weight: bold;
  margin-bottom: 5px;
`;

const Answer = styled.p`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const StyledLink = styled(Link)`
  display: block;
  text-align: center;
  margin-top: 20px;
`;

const Button = styled.button`
  background: ${({ theme }) => theme.primary};
  color: #fff;
  padding: 12px 30px;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: background 0.2s;

  &:hover {
    background: ${({ theme }) => theme.primaryHover};
  }
`;

const Message = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.text};
  margin-top: 50px;
`;
