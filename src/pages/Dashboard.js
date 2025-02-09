import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";

/**
 * Dashboard page displays the history of quiz attempts.
 */
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
  background: ${({ theme }) => theme.background === "#FFFFFF" ? "#f8f9fa" : "#1e1e1e"};
  border: 1px solid ${({ theme }) => theme.primary};
  margin-bottom: 15px;
  padding: 15px;
  border-radius: ${({ theme }) => theme.borderRadius};
  text-align: left;
`;

const ResultSubject = styled.h3`
  margin: 0 0 5px;
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
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: ${({ theme }) => theme.primaryHover};
  }
`;
