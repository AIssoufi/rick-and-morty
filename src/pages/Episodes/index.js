// Dependencies
import React, { useEffect, useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import styled from 'styled-components';

// Queries
import { EPISODES_WITH_CHARACTERS } from 'queries/episode';

// Components
import EpisodeSearch from './EpisodeSearch';
import EpisodeList from './EpisodeList';

// Shared components
import Pagination from 'shared-components/Pagination';

const Wrapper = styled.section`
  height: 100%;
`;

const Episodes = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [queryParams, setQueryParams] = useState({});
  const [getEpisodes, {
    loading,
    error,
    data: {
      episodes: {
        info: {
          pages: pageCount = 0,
          count: resultCount = 0
        } = {},
        results: episodes = []
      } = {}
    } = {}
  }] = useLazyQuery(EPISODES_WITH_CHARACTERS);

  const searchEpisodes = () => {
    getEpisodes({
      variables: {
        page: currentPage
      }
    });
  };

  useEffect(() => {
    searchEpisodes();
  }, [currentPage]);


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
      <EpisodeSearch
        onSearch={searchEpisodes}
        onChange={handleSearchFiltersChange}
        values={queryParams}
        resultCount={resultCount}
      />
      <EpisodeList
        episodes={episodes}
        isFetching={loading}
      />
      <Pagination
        isFetching={loading}
        currentPage={currentPage}
        pageCount={pageCount}
        onPageChange={handlePageChange}
      />
    </Wrapper>
  )
};

export default Episodes;
