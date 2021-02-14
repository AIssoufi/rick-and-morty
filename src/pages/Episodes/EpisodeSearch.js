// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

// Shared components
import { SearchInput } from 'shared-components';

// Helpers
import { getOnChangeValue } from 'helpers/form';


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
  margin-top: 10px;
`;

const EpisodeSearch = ({ onChange, onSearch, resultCount, values }) => {
  const { t } = useTranslation();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSearch();
  };

  const handleNameChange = (event) => {
    onChange({ name: getOnChangeValue(event) });
  }

  return (
    <Form onSubmit={handleFormSubmit}>
      <SearchInput
        name="name"
        placeholder={t('episodes.search.filters.name.placeholder')}
        value={values.name || ''}
        onChange={handleNameChange}
        onSubmit={onSearch}
      />
      <Result>{t('episodes.search.results.message', { count: resultCount })}</Result>
    </Form>
  );
}

EpisodeSearch.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  resultCount: PropTypes.number.isRequired,
  values: PropTypes.shape({
    name: PropTypes.string,
    status: PropTypes.string,
    gender: PropTypes.string,
  })
};

export default EpisodeSearch;
