// Dependencies
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

// Services
import { CharacterService } from 'services';

// Components
import Details from './Details';

const CharacterDetails = () => {
  const [character, setCharacter] = useState({});
  const [characterIsFetching, setCharacterIsFetching] = useState(false);
  const { id: characterId = null } = useParams();

  const fetchCharacterDetails = (id) => {
    if (characterIsFetching) return;
    setCharacterIsFetching(true);

    CharacterService.getCharacterById({
      id,
      includeEpisodes: true
    }).then(response => {
      setCharacter(response);
    }).finally(() => {
      setCharacterIsFetching(false);
    });
  };


  useEffect(() => {
    fetchCharacterDetails(characterId);
  }, [characterId])

  return (
    <Details
      isFetching={characterIsFetching}
      {...character}
    />
  );
};

export default CharacterDetails;
