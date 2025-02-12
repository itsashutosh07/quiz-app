import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";
import { keyframes } from "styled-components";

/**
 * Dashboard page displays the history of quiz attempts.
 */

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Dashboard = () => {
  const [quizResults] = useLocalStorage("quizResults", []);

  return (
    <DashboardContainer>
      <Title>Dashboard</Title>
      {quizResults.length === 0 ? (
        <Message>No quiz results available yet.</Message>
      ) : (
        <ResultsList>
          {quizResults.map((result, index) => (
            <ResultItem key={index}>
              <ResultSubject>{result.subject.toUpperCase()}</ResultSubject>
              <ResultScore>
                Score: {result.score} / {result.total}
              </ResultScore>
              <ResultTimestamp>{result.timestamp}</ResultTimestamp>
            </ResultItem>
          ))}
        </ResultsList>
      )}
      <StyledLink to="/">
        <HomeButton>Return Home</HomeButton>
      </StyledLink>
    </DashboardContainer>
  );
};

export default Dashboard;

// --- Styled Components ---
const DashboardContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.padding};
  text-align: center;
  animation: ${fadeIn} 0.5s ease-out;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  color: ${({ theme }) => theme.primary};
`;

const Message = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.text};
`;

const ResultsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px auto;
`;

const ResultItem = styled.li`
  background: ${({ theme }) =>
    theme.background === "#f5f7fa" ? "#ffffff" : "#2c2c2c"};
  border: 1px solid ${({ theme }) => theme.primary};
  margin-bottom: 15px;
  padding: 15px;
  border-radius: ${({ theme }) => theme.borderRadius};
  text-align: left;
  animation: ${fadeIn} 0.4s ease;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

const ResultSubject = styled.h3`
  margin-bottom: 5px;
  color: ${({ theme }) => theme.primary};
`;

const ResultScore = styled.p`
  margin: 5px 0;
  font-weight: bold;
  color: ${({ theme }) => theme.success};
`;

const ResultTimestamp = styled.span`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const HomeButton = styled.button`
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
