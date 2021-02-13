// Dependencies
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
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

const Episodes = ({ }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchResultCount, setSearchResultCount] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [episodes, setEpisodes] = useState([]);
  const [episodeIsFetching, setEpisodeIsFetching] = useState(false);

  const fetchEpisodes = () => {
    if (episodeIsFetching) return;
    setSearchResultCount(null);
    setEpisodeIsFetching(true);

    EpisodeService.getEpisodes({
      page: currentPage,
      includeCharacters: true
    }).then(response => {
      console.log(response);
      const { info, results } = response;

      setPageCount(info.pages);
      setEpisodes(results);

    }).finally(() => {
      setEpisodeIsFetching(false);
    });
  }

  const searchEpisodes = ({ name }) => {
    if (episodeIsFetching) return;

    setEpisodeIsFetching(true);

    EpisodeService.searchEpisodes({
      name,
      includeCharacters: true
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
  }

  useEffect(() => {
    fetchEpisodes();
  }, [currentPage]);


  const handlePageChange = (nextPage) => {
    if (nextPage < 1) return;
    if (nextPage > pageCount) return;

    setCurrentPage(nextPage);
  };


  const handleSearch = ({ name = null }) => {
    if (name) {
      return searchEpisodes({ name });
    }
    return fetchEpisodes();
  };

  return (
    <Wrapper>
      <EpisodeSearch
        onSearch={handleSearch}
        resultCount={searchResultCount}
      />
      <EpisodeList
        episodes={episodes}
        isFetching={episodeIsFetching}
      />
      {!episodeIsFetching && <Pagination
        currentPage={currentPage}
        pageCount={pageCount}
        onPageChange={handlePageChange}
      />
      }
    </Wrapper>
  )
};

Episodes.propTypes = {

};

Episodes.defaultProps = {

};

export default Episodes;
