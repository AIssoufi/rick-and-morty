// Dependencies
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

// Child components
import MainMenu from './MainMenu';
import BurgerIcon from './BurgerIcon';

// Styled components
const Logo = styled.h1`
  font-family: 'Architects Daughter', cursive;
  font-size: 24px;
  margin: 0;
  position: relative;
  z-index: 2;
`;

const HeaderContainer = styled.header`
  grid-area: header;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex: 1 1 0;
  position: relative;
  background-color: var(--bg-color);
  padding: 5px calc(25px - 12px) 5px 25px;

  ${({ mobileMenuIsOpen }) => mobileMenuIsOpen ? css`
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    &::after {
      content: '';
      position: absolute;
      top: 100%;
      height: calc(100vh - 50px);
      left: 0;
      right: 0;
      z-index: 1;
      background-color: rgba(0, 0, 0, 0.5);
    }
  ` : ''}

  @media (min-width: 50em) {
    padding: var(--page-padding);
  }

  @media (min-width: 100em) {
    padding: var(--page-padding) 0;
  }
`;


const Header = () => {
  const [mobileMenuIsOpen, setIsOpenMobileMenuValue] = useState(false);

  const handleBurgerIconClick = () => {
    setIsOpenMobileMenuValue(!mobileMenuIsOpen)
  };

  return (
    <HeaderContainer mobileMenuIsOpen={mobileMenuIsOpen}>
      <Logo>R&M</Logo>
      <MainMenu
        display={mobileMenuIsOpen}
        onNavLinkClick={() => setIsOpenMobileMenuValue(false)}
      />
      <BurgerIcon
        isOpen={mobileMenuIsOpen}
        onClick={handleBurgerIconClick}
      />
    </HeaderContainer>
  );
};

Header.propTypes = {

};

Header.defaultProps = {

};

export default Header;
