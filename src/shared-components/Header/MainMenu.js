// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";
import styled, { css, keyframes } from 'styled-components'

//
import SelectLang from './SelectLang';
import SelectTheme from './SelectTheme';

const MenuContainer = styled.div`
  display: ${({ show }) => show ? css`flex` : css`none` };;
  flex-direction: column;
  align-items: flex-end;
  padding: 1rem 3rem 2.5rem 3rem;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: var(--bg-color);
  transition-property: height;
  transition-duration: 0.5s;
  z-index: 2;
`;

const Nav = styled.nav`
  ul {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    & > :not(:last-child) {
      margin-bottom: 1rem;
    }
  }
`;

const NavItem = styled.li`
  list-style: none;
  font-size: 18px;
  font-weight: 500;
`;

const Link = styled(NavLink).attrs({
  activeClassName: 'is-active'
})`
  text-decoration: none;
  color: var(--text-color-light);

  &.is-active {
    color: var(--text-color);
  }
`;

const Separator = styled.hr`
  width: 15px;
  border: 1px solid var(--gray-light);
  margin: 1.5rem 0;
`;

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  & > :not(:last-child)  {
    margin-bottom: 1rem;
  }
`;


const MainMenu = ({ display, onNavLinkClick }) => (
  <MenuContainer show={display}>
    <Nav>
      <ul>
        <NavItem>
          <Link
            onClick={onNavLinkClick}
            exact
            to="/"
          >
            Episodes
          </Link>
        </NavItem>
        <NavItem>
          <Link
            onClick={onNavLinkClick}
            to="/characters"
          >
            Characters
          </Link>
        </NavItem>
      </ul>
    </Nav>
    <Separator />
    <SelectContainer>
      <SelectLang />
      <SelectTheme />
    </SelectContainer>
  </MenuContainer>
);

MainMenu.propTypes = {
  display: PropTypes.bool,
  onNavLinkClick: PropTypes.func.isRequired
};

MainMenu.defaultProps = {
  display: true
};

export default MainMenu;
