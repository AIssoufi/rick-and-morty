// Dependencies
import React, { useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import styled from 'styled-components';

// Queries
import { CHARACTERS } from 'queries/character';

// Components
import CharacterSearch from './CharacterSearch';
import CharacterList from './CharacterList';

// Shared components
import Pagination from 'shared-components/Pagination';

const Wrapper = styled.section`
  height: 100%;
`;

const Characters = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [queryParams, setQueryParams] = useState({});
  const [getCharacters, {
    loading,
    error,
    data: {
      characters: {
        info: {
          pages: pageCount = 0,
          count: resultCount = 0
        } = {},
        results: characters = []
      } = {}
    } = {}
  }] = useLazyQuery(CHARACTERS);

  const searchCharacters = () => {
    getCharacters({
      variables: {
        page: currentPage,
        ...queryParams
      }
    });
  };

  useEffect(() => {
    searchCharacters();
  }, [currentPage, queryParams.status, queryParams.gender]);

  const handlePageChange = (nextPage) => {
    if (nextPage < 1) return;
    if (nextPage > pageCount) return;

    setCurrentPage(nextPage);
  };

  const handleSearchFiltersChange = (newQueryParams = {}) => {
    setQueryParams({
      ...queryParams,
      ...newQueryParams
    });
  };

  return (
    <Wrapper>
      <CharacterSearch
        onSearch={searchCharacters}
        onChange={handleSearchFiltersChange}
        values={queryParams}
        resultCount={resultCount}
      />
      <CharacterList
        characters={characters}
        isFetching={loading}
      />
      <Pagination
        isFetching={loading}
        currentPage={currentPage}
        pageCount={pageCount}
        onPageChange={handlePageChange}
      />
    </Wrapper>
  );
};

export default Characters;
