import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { FaCalculator, FaAtom, FaFlask } from "react-icons/fa";

const glow = keyframes`
  from { box-shadow: 0 0 0px rgba(0, 0, 0, 0); }
  to { box-shadow: 0 0 8px rgba(74, 144, 226, 0.6); }
`;

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
  font-size: 2.2rem;
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
    theme.background === "#f5f7fa" ? "#ffffff" : "#2c2c2c"};
  padding: 20px;
  border-radius: ${({ theme }) => theme.borderRadius};
  width: 120px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: scale(1.05);
    animation: ${glow} 0.5s alternate infinite;
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
  transition: background 0.2s;

  &:hover {
    background: ${({ theme }) => theme.successHover};
  }
`;
