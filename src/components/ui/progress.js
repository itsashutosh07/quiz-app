import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const ProgressBarContainer = styled.div`
  width: 100%;
  background-color: #ccc;
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;
`;

const ProgressBarFill = styled.div`
  height: 1rem;
  width: ${({ value }) => value}%;
  background-color: ${({ theme }) => theme.success};
  transition: width 0.3s ease;
`;

const Progress = ({ value, className }) => {
  return (
    <ProgressBarContainer className={className}>
      <ProgressBarFill value={value} />
    </ProgressBarContainer>
  );
};

Progress.propTypes = {
  value: PropTypes.number.isRequired,
  className: PropTypes.string,
};

export { Progress };
