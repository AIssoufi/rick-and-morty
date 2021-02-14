// Dependencies
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Services
import { CharacterService } from 'services';

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
  const [searchResultCount, setSearchResultCount] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [characters, setCharacters] = useState([]);
  const [characterIsFetching, setCharacterIsFetching] = useState(false);
  const [queryParams, setQueryParams] = useState({});

  const searchCharacters = () => {
    if (characterIsFetching) return;

    setCharacterIsFetching(true);

    CharacterService.searchCharacters({
      page: currentPage,
      ...queryParams
    }).then(response => {
      const { info, results } = response;

      setSearchResultCount(info.count);
      setPageCount(info.pages);
      setCharacters(results);

    })
    .catch(() => {
      setSearchResultCount(0);
    })
    .finally(() => {
      setCharacterIsFetching(false);
    });
  }

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
        resultCount={searchResultCount}
      />
      <CharacterList
        characters={characters}
        isFetching={characterIsFetching}
      />
      <Pagination
        isFetching={characterIsFetching}
        currentPage={currentPage}
        pageCount={pageCount}
        onPageChange={handlePageChange}
      />
    </Wrapper>
  );
};

export default Characters;
