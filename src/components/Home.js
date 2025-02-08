import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
  return (
    <Container>
      <Title>Welcome to the Quiz App</Title>
      <Subtitle>Select a subject to begin:</Subtitle>
      <ButtonGroup>
        <StyledLink to="/quiz/math">
          <Button>Math</Button>
        </StyledLink>
        <StyledLink to="/quiz/physics">
          <Button>Physics</Button>
        </StyledLink>
        <StyledLink to="/quiz/chemistry">
          <Button>Chemistry</Button>
        </StyledLink>
      </ButtonGroup>
      <StyledLink to="/dashboard">
        <DashboardButton>View Dashboard</DashboardButton>
      </StyledLink>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  text-align: center;
  padding: 50px;
`;

const Title = styled.h1`
  color: #333;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin: 20px 0;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Button = styled.button`
  background: #007bff;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #0056b3;
  }
`;

const DashboardButton = styled(Button)`
  background: #28a745;
  margin-top: 30px;

  &:hover {
    background: #1e7e34;
  }
`;
