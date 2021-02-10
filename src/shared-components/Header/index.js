// Dependencies
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Child components
import MainMenu from './MainMenu';
import BurgerIcon from './BurgerIcon';

// Styled components
const Logo = styled.h1`
  font-family: 'Architects Daughter', cursive;
  font-size: 24px;
`;

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex: 1 1 0;
  position: relative;
  background-color: green;
  padding: 0 0 0 var(--page-ppading);
`;


const Header = ({ }) => {
  const [mobileMenuIsOpen, setIsOpenMobileMenuValue] = useState(false);

  const handleBurgerIconClick = () => {
    setIsOpenMobileMenuValue(!mobileMenuIsOpen)
  };

  return (
    <HeaderContainer>
      <Logo>R&M</Logo>
      <MainMenu display={mobileMenuIsOpen} />
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
