// Dependencies
import React, { useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { useParams } from "react-router-dom";

// Queries
import { CHARACTER_DETAILS } from 'queries/character';

// Components
import Details from './Details';

const CharacterDetails = () => {
  const { id: characterId = null } = useParams();
  const [getCharacter, {
    loading,
    error,
    data: {
      character = {}
    } = {}
  }] = useLazyQuery(CHARACTER_DETAILS);

  const fetchCharacterDetails = () => {
    getCharacter({
      variables: {
        id: characterId
      }
    });
  };

  useEffect(() => {
    fetchCharacterDetails();
  }, [characterId])

  return (
    <Details
      isFetching={loading}
      {...character}
    />
  );
};

export default CharacterDetails;
