import React, { useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { subjects } from "../data/quizData";

const Hero = () => {
  const carouselRef = useRef(null);

  const carouselVariants = {
    animate: {
      x: ["0%", "-100%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
    hover: {
      transition: { duration: 0.5 },
      x: "0%",
    },
  };

  return (
    <HeroContainer>
      <CarouselWrapper
        as={motion.div}
        variants={carouselVariants}
        animate="animate"
        whileHover="hover"
        ref={carouselRef}
      >
        {subjects.map((subject, index) => (
          <CarouselCard key={index}>
            <CardContent>
              <SubjectTitle style={{ color: subject.color }}>
                {subject.name}
              </SubjectTitle>
              <SubjectDesc>
                Explore quizzes on {subject.name} with varying difficulties.
              </SubjectDesc>
            </CardContent>
          </CarouselCard>
        ))}
        {subjects.map((subject, index) => (
          <CarouselCard key={`dup-${index}`}>
            <CardContent>
              <SubjectTitle style={{ color: subject.color }}>
                {subject.name}
              </SubjectTitle>
              <SubjectDesc>
                Explore quizzes on {subject.name} with varying difficulties.
              </SubjectDesc>
            </CardContent>
          </CarouselCard>
        ))}
      </CarouselWrapper>
    </HeroContainer>
  );
};

export default Hero;

const HeroContainer = styled.section`
  width: 100%;
  overflow: hidden;
  margin: 40px 0;
`;

const CarouselWrapper = styled(motion.div)`
  display: flex;
  gap: 20px;
`;

const CarouselCard = styled.div`
  flex: 0 0 auto;
  background: ${({ theme }) =>
    theme.background === "#000000" ? "#111111" : "#ffffff"};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.shadow};
  width: 250px;
  padding: 20px;
  transition: transform 0.3s ease;
  &:hover {
    transform: perspective(1000px) rotateY(10deg) rotateX(5deg);
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const SubjectTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const SubjectDesc = styled.p`
  font-size: 0.9rem;
`;
