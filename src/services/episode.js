// Utils
import { get } from 'utils/request';

export const searchEpisodes = ({
  page = 1,
  name = '',
  includeCharacters = false
} = {}) => {
  return get(`${process.env.REACT_APP_API_URL}/episode`, {
    page,
    name
  }).then(async response => {
    if (includeCharacters) {

      const { results = [] } = response;

      const resultsWithCharDetails = await Promise.all(results.map(async result => {
        const urls = result.characters;

        const characters = await Promise.all(urls.map(url => get(url)));

        return {
          ...result,
          airDate: result.air_date,
          characters
        };
      }));

      return {
        ...response,
        results: resultsWithCharDetails
      };
    }

    return response;
  });
};
