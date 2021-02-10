// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";
import styled, { css, keyframes } from 'styled-components'

//
import SelectLang from './SelectLang';
import SelectTheme from './SelectTheme';


const fadeIn = keyframes`
  0% {
    height: 0;
    padding: 0;
  }
  100% {
    height: max-content;
    padding: 0 var(--page-ppading) var(--page-ppading) var(--page-ppading);
  }
`

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  height: ${({ show }) => show ? css`max-content` : css`0` };
  padding: ${({ show }) => show ? css`0 var(--page-ppading) var(--page-ppading) var(--page-ppading);` : css`0` };

  ${({ show }) => {
    if (show) return  css`animation: 0.5s ${fadeIn} ease;`
    return '';
  }};
  overflow: hidden;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: red;
  transition-property: height;
  transition-duration: 0.5s;

`;

const Separator = styled.hr`
`


const MainMenu = ({ display }) => (
  <MenuContainer show={display}>
    <nav>
      <ul>
        <li>
          <NavLink to="/">Episodes</NavLink>
        </li>
        <li>
          <NavLink to="/characters">Characters</NavLink>
        </li>
      </ul>
    </nav>
    <Separator />
    <div>
      <SelectLang />
      <SelectTheme />
    </div>
  </MenuContainer>
);

MainMenu.propTypes = {
  display: PropTypes.bool
};

MainMenu.defaultProps = {
  display: true
};

export default MainMenu;
