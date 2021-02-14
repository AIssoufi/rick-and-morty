// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Svg
import { ReactComponent as SearchIcon } from './search.svg';

const Container = styled.div`
  display: grid;
  grid-template-columns: 20px 1fr;
  grid-template-rows: 35px;
  background-color: var(--gray-bg-color);
  border-radius: 15px;
  padding: 0 10px;
  align-items: center;
  grid-column-gap: 10px;


  svg {
    color: var(--gray);
    transform: scale(1);
    transition-property: transform;
    transition-delay: 1.3s;
    z-index: 0;
    &:hover {
      transform: scale(1.3)
    }
  }
`;

const InputText = styled.input`
  display: block;
  border: none;
  height: 100%;
  background-color: transparent;
  &::placeholder {
    font-size: 14px;
  }
`;

const IconContainer = styled.button`
  background-color: transparent;
  border: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchInput = ({ onSubmit, ...otherProps}) => {
  return (
    <Container>
      <IconContainer type="submit" onClick={onSubmit}>
        <SearchIcon />
      </IconContainer>
      <InputText
        type="text"
        {...otherProps}
      />
    </Container>
  )
};

SearchInput.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  onSubmit: PropTypes.func
};

SearchInput.defaultProps = {
  placeholder: 'Search...',
  onSubmit: () => {}
};

export default SearchInput;
