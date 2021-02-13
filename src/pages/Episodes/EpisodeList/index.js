// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Hoc
import { withLoading } from 'hoc/withLoading';

// Components
import EpisodeItem from './EpisodeItem';

const EpisodeListContainer = styled.div`
  @media (min-width: 50em) {
  }
`;

const EpisodeList = ({ episodes }) => {

  return (
    <EpisodeListContainer>
      {episodes.map(({ id, episode, name, airDate, characters }) => (
        <EpisodeItem
          key={id}
          episode={episode}
          name={name}
          airDate={airDate}
          characters={characters}
        />
      ))}
    </EpisodeListContainer>
  );
};

EpisodeList.propTypes = {
  episodes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    episode: PropTypes.string,
    name: PropTypes.string,
    airDate: PropTypes.string,
    characters:  PropTypes.arrayOf(PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      species: PropTypes.string,
      status: PropTypes.string
    }))
  }))
};

EpisodeList.defaultProps = {
  episodes: []
};

export default withLoading(EpisodeList);
