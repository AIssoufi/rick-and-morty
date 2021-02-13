// Dependencies
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

// Shared components
import { Character } from 'shared-components';

// Svg
import { ReactComponent as LeftIconSvg } from './arrow-left-circle.svg';
import { ReactComponent as RightIconSvg } from './arrow-right-circle.svg';


const EpisodeContainer = styled.div`
  margin-bottom: 10px;
  &:last-of-type {
    hr {
      display: none;
    }
  }
`;

const Separator = styled.hr`
  width: 10em;
  border: 1px solid var(--black);
  margin: 1.5rem auto;

  @media (min-width: 50em) {
    margin: 3.5rem auto;
  }

  @media (min-width: 100em) {
    margin: 4.5rem auto;
  }
`;

const Header = styled.header`
  margin-bottom: 10px;
  margin-left: var(--page-padding);


  @media (min-width: 50em) {
    margin-right: var(--page-padding);
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
  }
`;

const Name = styled.div`
  font-size: 24px;
  font-weight: var(--font-weight-medium);
`;

const AirDate = styled.div`
  font-size: 14px;
  font-weight: var(--font-weight-light);
`;

const CharacterList = styled.main`
  display: flex;
  flex-direction: row;

  white-space: nowrap;
  overflow-x: auto;

  @media (min-width: 50em) {
    display: grid;
    grid-auto-flow: row;
    grid-auto-columns: 1fr;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 1fr;

    & > * {
      align-self: center;
      justify-self: center;
    }
  }

  @media (min-width: 100em) {
    grid-template-columns: repeat(7, 1fr);
  }
`;

const Control = styled.div`
  display: none;

  @media (min-width: 50em) {
    display: grid;
    grid-template-columns: max-content max-content max-content;
    grid-template-rows: min-content;
    grid-column-gap: 10px;
    justify-content: center;
    align-items: center;
  }
`;

const LeftIcon = styled(LeftIconSvg)`
  cursor: pointer;
  height: 30px;
  width: 30px;

  ${({ disabled }) => disabled ? css`
    cursor: not-allowed;
    color: var(--gray);
  ` : ''}
`;

const RightIcon = styled(RightIconSvg)`
  cursor: pointer;
  height: 30px;
  width: 30px;

  ${({ disabled }) => disabled ? css`
    cursor: not-allowed;
    color: var(--gray);
  ` : ''}
`;

const PageCount = styled.div`
  font-size: 18px;
`;

const EpisodeItem = ({ episode, name, airDate, characters }) => {
  const [limit, setLimit] = useState(characters.length);
  const [skip, setSkip] = useState(0);

  useEffect(() => {
    if (window.innerWidth > 1400) {
      setLimit(7);
    } else if (window.innerWidth > 700) {
      setLimit(5);
    }
  }, [window.innerWidth]);

  const handlePrevClick = () => {
    let newSkipValue = skip - limit;

    if (newSkipValue < 0) return;

    setSkip(newSkipValue);
  };

  const handleNextClick = () => {
    let newSkipValue = skip + limit;

    if (newSkipValue > characters.length) return;

    setSkip(newSkipValue);
  };

  const pageCount = Math.ceil(characters.length / limit);
  const currentPage = (skip + limit) / limit;

  return (
    <EpisodeContainer>
      <Header>
        <div>
          <Name>{episode} · {name}</Name>
          <AirDate>{airDate}</AirDate>
        </div>
        <Control>
          <PageCount>{currentPage} / {pageCount}</PageCount>
          <LeftIcon
            disabled={currentPage === 1}
            onClick={handlePrevClick} />
          <RightIcon
            disabled={currentPage === pageCount}
            onClick={handleNextClick}
          />
        </Control>
      </Header>
      <CharacterList>
        {characters.slice(skip, skip + limit).map(character => (
          <Character
            key={character.id}
            characterUrl={`/characters/${character.id}`}
            imageUrl={character.image}
            name={character.name}
            species={character.species}
            status={character.status}
          />
        ))}
      </CharacterList>
      <Separator />
    </EpisodeContainer>
  );
};

EpisodeItem.propTypes = {
  episode: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  airDate: PropTypes.string.isRequired,
  characters:  PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    species: PropTypes.string,
    status: PropTypes.string
  }))
};

EpisodeItem.defaultProps = {
  characters: []
};

export default EpisodeItem;
