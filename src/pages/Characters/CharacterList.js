// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Hoc
import { withLoading } from 'hoc/withLoading';

// Shared components
import { Character } from 'shared-components';

const CharacterListContainer = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-auto-columns: 1fr;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;

  & > * {
    align-self: center;
    justify-self: center;
  }

  @media (min-width: 50em) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (min-width: 100em) {
    grid-template-columns: repeat(7, 1fr);
  }
`;

const CharacterList = ({ characters }) => {

  return (
    <CharacterListContainer>
      {characters.map(({ id, image, name, species, status }) => (
        <Character
          key={id}
          characterUrl={`/characters/${id}`}
          imageUrl={image}
          name={name}
          species={species}
          status={status}
        />
      ))}
    </CharacterListContainer>
  );
};

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    name: PropTypes.string,
    species: PropTypes.string,
    status: PropTypes.string
  }))
};

CharacterList.defaultProps = {
  characters: []
};

export default withLoading(CharacterList);
