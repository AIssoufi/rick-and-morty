// Dependencies
import { gql } from '@apollo/client';

export const CHARACTERS = gql`
  query CHARACTERS($page: Int!, $name: String="", $status: String="", $gender: String="") {
    characters(page: $page, filter: {
      name: $name,
      status: $status,
      gender: $gender
    }) {
      info {
        pages,
        count
      }
      results {
        id,
        name,
        status,
        species,
        type,
        gender,
        image
      }
    }
  }
`;

export const CHARACTER_DETAILS = gql`
  query CHARACTER_DETAILS($id: ID!) {
    character(id: $id) {
      id,
      name,
      status,
      species,
      type,
      origin {
        name
      },
      location {
        name
      },
      gender,
      imageUrl: image,
      episodes: episode {
        id,
        name,
        episode
      }
    }
  }
`;
