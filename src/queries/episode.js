// Dependencies
import { gql } from '@apollo/client';

export const EPISODES_WITH_CHARACTERS = gql`
  query Episodes($page: Int!) {
    episodes(page: $page) {
      info {
        pages,
        count
      }
      results {
        id,
        name,
        airDate: air_date,
        episode,
        characters {
          id,
          name,
          status,
          species,
          image
        }
      }
    }
  }
`;
