// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Shared components
import { SearchInput } from 'shared-components';

// Helpers
import { getQueryParams } from 'helpers/form';


const Form = styled.form`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  width: 100%;
  padding: 10px var(--page-padding);
  box-sizing: border-box;

  @media (min-width: 50em) {
    max-width: 400px;
    margin-top: 20px;
  }

  @media (min-width: 100em) {
    margin-top: 30px;
  }
`;

const Result = styled.div`
  text-align: center;
`;

const EpisodeSearch = ({ onSearch, resultCount }) => {
  const handleSerach = (event) => {
    const queryParams = getQueryParams(event)
    onSearch(queryParams);
  };

  return (
    <Form onSubmit={handleSerach}>
      <SearchInput name="name" placeholder="Episode name" />
      <Result>{resultCount ? `${resultCount} episode${resultCount > 1 ? 's have' : ' has'} been found` : ''}</Result>
    </Form>
  );
}

EpisodeSearch.propTypes = {
  onSearch: PropTypes.func.isRequired,
  resultCount: PropTypes.number.isRequired
};

export default EpisodeSearch;
