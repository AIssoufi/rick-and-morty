// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";
import styled, { css } from 'styled-components'
import { useTranslation } from 'react-i18next';

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

  @media (min-width: 50em) {
    display: flex;
    flex-direction: row;
    align-items: center;
    position: static;
    padding: 0;
  }
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

    @media (min-width: 50em) {
      flex-direction: row;
      align-items: center;

      & > :not(:last-child) {
        margin-bottom: 0;
        margin-right: 1rem;
      }
    }
  }
`;

const NavItem = styled.li`
  list-style: none;
  font-size: 18px;
  font-weight: var(--font-weight-medium);
`;

const Link = styled(NavLink).attrs({
  activeClassName: 'is-active'
})`
  text-decoration: none;
  color: var(--text-color-light);

  &.is-active {
    color: var(--text-color);
    text-decoration: solid;

    &::after {
      content: '';
      position: relative;
      display: block;
      height: 2px;
      bottom: -5px;
      background-color: var(--text-color);
    }
  }
`;

const Separator = styled.hr`
  width: 15px;
  border: 1px solid var(--gray-light);
  margin: 1.5rem 0;

  @media (min-width: 50em) {
    width: 0;
    height: 15px;
    margin: 0 1.5rem;
  }
`;

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  & > :not(:last-child)  {
    margin-bottom: 1rem;
  }

  @media (min-width: 50em) {
    flex-direction: row;
    align-items: center;

    & > :not(:last-child) {
      margin-bottom: 0;
      margin-right: 1rem;
    }
  }
`;


const MainMenu = ({
  display, onNavLinkClick, onLangChange, currentLang, onThemeChange, currentTheme
}) => {
  const { t } = useTranslation();
  return (
    <MenuContainer show={display}>
      <Nav>
        <ul>
          <NavItem>
            <Link
              onClick={onNavLinkClick}
              exact
              to="/"
            >
              {t('header.menu.episodesLabel')}
            </Link>
          </NavItem>
          <NavItem>
            <Link
              onClick={onNavLinkClick}
              to="/characters"
            >
              {t('header.menu.charactersLabel')}
            </Link>
          </NavItem>
        </ul>
      </Nav>
      <Separator />
      <SelectContainer>
        <SelectLang
          onChange={onLangChange}
          value={currentLang}
        />
        <SelectTheme
          onChange={onThemeChange}
          value={currentTheme}
        />
      </SelectContainer>
    </MenuContainer>
  );
};

MainMenu.propTypes = {
  display: PropTypes.bool,
  onNavLinkClick: PropTypes.func.isRequired
};

MainMenu.defaultProps = {
  display: true
};

export default MainMenu;
