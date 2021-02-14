// Dependencies
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

// Services
import { EpisodeService } from 'services';

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
  const [searchResultCount, setSearchResultCount] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [episodes, setEpisodes] = useState([]);
  const [episodeIsFetching, setEpisodeIsFetching] = useState(false);
  const [queryParams, setQueryParams] = useState({});

  const searchEpisodes = () => {
    if (episodeIsFetching) return;

    setEpisodeIsFetching(true);

    EpisodeService.searchEpisodes({
      page: currentPage,
      includeCharacters: true,
      ...queryParams
    }).then(response => {
      const { info, results } = response;

      setSearchResultCount(info.count);
      setPageCount(info.pages);
      setEpisodes(results);

    })
    .catch(() => {
      setSearchResultCount(0);
    })
    .finally(() => {
      setEpisodeIsFetching(false);
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


  const onSearchFiltersChange = (newQueryParams = {}) => {
    setQueryParams({
      ...queryParams,
      ...newQueryParams
    });
  };

  return (
    <Wrapper>
      <EpisodeSearch
        onSearch={searchEpisodes}
        onChange={onSearchFiltersChange}
        values={queryParams}
        resultCount={searchResultCount}
      />
      <EpisodeList
        episodes={episodes}
        isFetching={episodeIsFetching}
      />
      <Pagination
        isFetching={episodeIsFetching}
        currentPage={currentPage}
        pageCount={pageCount}
        onPageChange={handlePageChange}
      />
    </Wrapper>
  )
};

export default Episodes;
