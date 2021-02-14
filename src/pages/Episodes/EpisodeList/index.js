// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Hoc
import { withLoading } from 'hoc/withLoading';

// Components
import EpisodeItem from './EpisodeItem';

const EpisodeList = ({ episodes }) => {

  return (
    <div>
      {episodes.map(({ id, episode, name, airDate, characters }) => (
        <EpisodeItem
          key={id}
          episode={episode}
          name={name}
          airDate={airDate}
          characters={characters}
        />
      ))}
    </div>
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
