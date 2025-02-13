import React from "react";
import styled from "styled-components";
import { FiSearch, FiUser } from "react-icons/fi";
import { FaMoon, FaSun } from "react-icons/fa";
import PropTypes from "prop-types";

const NavBar = ({ themeMode, toggleTheme }) => {
  const isDark = themeMode === "dark";
  return (
    <NavContainer>
      <Logo onClick={() => window.location.reload()}>QuizMaster</Logo>
      <NavLinks>
        <NavLink href="#">Dashboard</NavLink>
        <NavLink href="#">About</NavLink>
      </NavLinks>
      <Actions>
        <FiSearch className="icon" aria-label="Search" />
        <FiUser className="icon" aria-label="User Profile" />
        <ToggleButton onClick={toggleTheme} aria-label="Toggle Dark/Light Mode">
          {isDark ? <FaSun size={20} /> : <FaMoon size={20} />}
        </ToggleButton>
      </Actions>
    </NavContainer>
  );
};

NavBar.propTypes = {
  themeMode: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};

export default NavBar;

const NavContainer = styled.nav`
  width: 100%;
  padding: ${({ theme }) => theme.padding};
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  box-shadow: ${({ theme }) => theme.shadow};
`;

const Logo = styled.h1`
  font-size: 1.8rem;
  font-weight: 700;
  cursor: pointer;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const NavLink = styled.a`
  color: inherit;
  font-size: 1rem;
  &:hover {
    color: ${({ theme }) => theme.primaryHover};
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  .icon {
    cursor: pointer;
    transition: transform 0.2s;
    &:hover {
      transform: scale(1.1);
    }
  }
`;

const ToggleButton = styled.button`
  background: transparent;
  border: none;
  color: inherit;
  cursor: pointer;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.1);
  }
`;
