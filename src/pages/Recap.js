import React from "react";
import { useLocation, Link } from "react-router-dom";
import styled from "styled-components";

const Recap = () => {
  const { state } = useLocation();
  if (!state) {
    return <p>No quiz data found. Please take a quiz first.</p>;
  }

  const { answers, score, total } = state;

  return (
    <Container>
      <Title>Quiz Recap</Title>
      <Score>
        Your Score: {score} / {total}
      </Score>
      <List>
        {answers.map((item, index) => (
          <ListItem key={index} correct={item.isCorrect}>
            <strong>Q{index + 1}:</strong> {item.question}
            <br />
            Your Answer: {item.selected} {item.isCorrect ? "✔️" : "❌"}
          </ListItem>
        ))}
      </List>
      <StyledLink to="/">
        <Button>Return Home</Button>
      </StyledLink>
    </Container>
  );
};

export default Recap;

const Container = styled.div`
  text-align: center;
  padding: 30px;
`;

const Title = styled.h1`
  color: #333;
  margin-bottom: 20px;
`;

const Score = styled.h2`
  color: #007bff;
  margin-bottom: 30px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  text-align: left;
  max-width: 600px;
  margin: 0 auto 30px;
`;

const ListItem = styled.li`
  background: #f8f9fa;
  border-left: 5px solid ${({ correct }) => (correct ? "#28a745" : "#dc3545")};
  margin-bottom: 15px;
  padding: 15px;
  border-radius: 4px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Button = styled.button`
  background: #007bff;
  color: white;
  padding: 12px 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #0056b3;
  }
`;
