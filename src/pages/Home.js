import React, { useState } from "react";
import styled from "styled-components";
import Hero from "../components/Hero";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { subjects } from "../data/quizData";

const Home = () => {
  // Store selected subject as an object with key and name
  const [selectedSubject, setSelectedSubject] = useState(null);

  return (
    <HomeContainer>
      <Hero />
      <SectionTitle>Select a Quiz Subject</SectionTitle>
      <GridContainer>
        {subjects.map((subject, index) => (
          <Card
            key={index}
            onClick={() =>
              setSelectedSubject({ key: subject.key, name: subject.name })
            }
            className="cursor-pointer"
          >
            <SubjectName style={{ color: subject.color }}>
              {subject.name}
            </SubjectName>
          </Card>
        ))}
      </GridContainer>
      {selectedSubject && (
        <Button
          onClick={() =>
            (window.location.href = `/quiz/${selectedSubject.key}`)
          }
        >
          Start {selectedSubject.name} Quiz
        </Button>
      )}
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  padding: ${({ theme }) => theme.padding};
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin: 20px 0;
  color: ${({ theme }) => theme.primary};
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
  margin-bottom: 20px;
`;

const SubjectName = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
`;
