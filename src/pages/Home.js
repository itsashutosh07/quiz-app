import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaCalculator, FaAtom, FaFlask } from "react-icons/fa";

/**
 * Home page displays the landing page for subject selection.
 */
const Home = () => {
  return (
    <HomeContainer>
      <Title>Welcome to the Quiz App</Title>
      <Subtitle>Select a subject to begin:</Subtitle>
      <ButtonGroup>
        <SubjectLink to="/quiz/math">
          <SubjectButton>
            <FaCalculator size={30} />
            <span>Math</span>
          </SubjectButton>
        </SubjectLink>
        <SubjectLink to="/quiz/physics">
          <SubjectButton>
            <FaAtom size={30} />
            <span>Physics</span>
          </SubjectButton>
        </SubjectLink>
        <SubjectLink to="/quiz/chemistry">
          <SubjectButton>
            <FaFlask size={30} />
            <span>Chemistry</span>
          </SubjectButton>
        </SubjectLink>
      </ButtonGroup>
      <StyledLink to="/dashboard">
        <DashboardButton>View Dashboard</DashboardButton>
      </StyledLink>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.padding};
`;

const Title = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 30px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

const SubjectLink = styled(Link)`
  text-decoration: none;
`;

const SubjectButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  background: ${({ theme }) =>
    theme.background === "#FFFFFF" ? "#f8f9fa" : "#1e1e1e"};
  padding: 20px;
  border-radius: ${({ theme }) => theme.borderRadius};
  width: 120px;
  cursor: pointer;
  transition: transform 0.2s ease, background 0.2s ease;

  &:hover {
    transform: scale(1.05);
    background: ${({ theme }) => theme.primary};
    color: #fff;
  }

  span {
    font-size: 1rem;
    font-weight: bold;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const DashboardButton = styled.button`
  margin-top: 30px;
  background: ${({ theme }) => theme.success};
  color: #fff;
  padding: 12px 30px;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: ${({ theme }) => theme.successHover};
  }
`;
