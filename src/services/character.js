// Utils
import { get } from 'utils/request';

export const getCharacterById = ({
  id, includeEpisodes = false
} = {}) => {
  return get(`${process.env.REACT_APP_API_URL}/character/${id}`).then(async response => {
    if (includeEpisodes) {
      const { episode = [], image, ...rest } = response;
      const resultsWithEpisodesDetails = await Promise.all(episode.map(url => get(url)));

      return {
        ...rest,
        imageUrl: image,
        episodes: resultsWithEpisodesDetails
      }
    }

    return response;
  });
};
