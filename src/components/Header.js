import React from "react";
import styled from "styled-components";
import { FaMoon, FaSun } from "react-icons/fa";
import PropTypes from "prop-types";

/**
 * Header component displays the site title and a dark mode toggle.
 */
const Header = ({ theme, toggleTheme }) => {
  const isDark = theme === "dark";

  return (
    <HeaderContainer>
      <Title>Quiz App</Title>
      <ToggleButton onClick={toggleTheme}>
        {isDark ? <FaSun size={20} /> : <FaMoon size={20} />}
      </ToggleButton>
    </HeaderContainer>
  );
};

Header.propTypes = {
  theme: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};

export default Header;

// Styled Components for Header
const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.padding};
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.primary},
    ${({ theme }) => theme.primaryHover}
  );
  color: #fff;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 1.8rem;
`;

const ToggleButton = styled.button`
  background: transparent;
  border: none;
  color: #fff;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`;
