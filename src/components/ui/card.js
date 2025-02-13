import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const CardContainer = styled.div`
  background: ${({ theme }) =>
    theme.background === "#000000" ? "#111111" : "#ffffff"};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.shadow};
  padding: 1rem;
  transition: transform 0.2s ease;
  &:hover {
    transform: scale(1.02);
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const Card = ({ children, className, onClick }) => {
  return (
    <CardContainer className={className} onClick={onClick}>
      <CardContent>{children}</CardContent>
    </CardContainer>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export { Card, CardContent };
