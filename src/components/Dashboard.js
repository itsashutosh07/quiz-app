import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const quizResults = JSON.parse(localStorage.getItem("quizResults") || "[]");

  return (
    <Container>
      <Title>Dashboard</Title>
      {quizResults.length === 0 ? (
        <Message>No quiz results available yet.</Message>
      ) : (
        <ResultsList>
          {quizResults.map((result, index) => (
            <ResultItem key={index}>
              <Subject>{result.subject.toUpperCase()}</Subject>
              <Score>
                Score: {result.score} / {result.total}
              </Score>
              <Timestamp>{result.timestamp}</Timestamp>
            </ResultItem>
          ))}
        </ResultsList>
      )}
      <StyledLink to="/">
        <Button>Return Home</Button>
      </StyledLink>
    </Container>
  );
};

export default Dashboard;

const Container = styled.div`
  text-align: center;
  padding: 30px;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  color: #333;
`;

const Message = styled.p`
  font-size: 1.2rem;
  color: #555;
`;

const ResultsList = styled.ul`
  list-style: none;
  padding: 0;
  max-width: 600px;
  margin: 20px auto;
`;

const ResultItem = styled.li`
  background: #f8f9fa;
  border: 1px solid #ddd;
  margin-bottom: 15px;
  padding: 15px;
  border-radius: 5px;
  text-align: left;
`;

const Subject = styled.h3`
  margin: 0 0 5px;
  color: #007bff;
`;

const Score = styled.p`
  margin: 5px 0;
  font-weight: bold;
`;

const Timestamp = styled.span`
  font-size: 0.9rem;
  color: #666;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Button = styled.button`
  background: #28a745;
  color: white;
  padding: 12px 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #1e7e34;
  }
`;
