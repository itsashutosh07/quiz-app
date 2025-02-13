import React from "react";
import styled from "styled-components";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Button } from "../components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Recap = () => {
  const { state } = useLocation();
  if (!state) {
    return <Message>No quiz data found. Please take a quiz first.</Message>;
  }
  const { answers, score, total } = state;
  const percentage = Math.round((score / total) * 100);

  // Data for RadialBarChart
  const data = [
    {
      name: "Score",
      value: percentage,
      fill: "#28a745",
    },
  ];

  return (
    <RecapContainer>
      <SectionTitle>Quiz Recap</SectionTitle>
      <Score>
        Your Score: {score} / {total} ({percentage}%)
      </Score>
      <ChartContainer>
        <ResponsiveContainer width="100%" height={300}>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="20%"
            outerRadius="90%"
            data={data}
            startAngle={90}
            endAngle={-270}
          >
            <RadialBar minAngle={15} background clockWise dataKey="value" />
            <Legend
              iconSize={10}
              layout="vertical"
              verticalAlign="middle"
              wrapperStyle={{ color: "#fff", fontSize: "1rem" }}
            />
          </RadialBarChart>
        </ResponsiveContainer>
      </ChartContainer>
      <ResultsList>
        {answers.map((item, index) => (
          <ResultItem key={index} correct={item.isCorrect}>
            <QuestionText>
              <strong>Q{index + 1}:</strong> {item.question}
            </QuestionText>
            <AnswerText>
              Your Answer: {item.selected} {item.isCorrect ? "✅" : "❌"}
            </AnswerText>
          </ResultItem>
        ))}
      </ResultsList>
      <StyledLink to="/">
        <Button>Return Home</Button>
      </StyledLink>
    </RecapContainer>
  );
};

export default Recap;

const RecapContainer = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: ${({ theme }) => theme.padding};
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.primary};
`;

const Score = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 30px;
  color: ${({ theme }) => theme.success};
`;

const ChartContainer = styled.div`
  margin-bottom: 30px;
`;

const ResultsList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
`;

const ResultItem = styled.li`
  background: ${({ theme, correct }) => (correct ? "#2d4739" : "#4e2d2d")};
  border-left: 5px solid
    ${({ theme, correct }) => (correct ? theme.success : theme.error)};
  margin-bottom: 15px;
  padding: 15px;
  border-radius: ${({ theme }) => theme.borderRadius};
  text-align: left;
`;

const QuestionText = styled.p`
  font-weight: bold;
  margin-bottom: 5px;
  color: ${({ theme }) => theme.text};
`;

const AnswerText = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
`;

const Message = styled.p`
  text-align: center;
  font-size: 1.2rem;
  margin-top: 50px;
  color: ${({ theme }) => theme.text};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
