// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

// Shared components
import { SearchInput } from 'shared-components';
import Select, { controlStyle, singleValueStyle } from 'shared-components/Select';

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
    max-width: 600px;
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

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 10px;
  & > :not(:last-child) {
    margin-right: 10px;
  }
`;

const statusOptions = [
  { value: '', label: 'All status' },
  { value: 'alive', label: 'Alive' },
  { value: 'dead', label: 'Dead' },
  { value: 'unknown', label: 'Unknown' }
];

const genderOptions = [
  { value: '', label: 'All gender' },
  { value: 'female', label: 'Female' },
  { value: 'male', label: 'Male' },
  { value: 'genderless', label: 'Genderless' },
  { value: 'unknown', label: 'Unknown' }
];

const customStyles = {
  control: () => ({
    ...controlStyle,
    width: '100px'
  }),
  singleValue: () => ({
    ...singleValueStyle,
    fontWeight: 'var(--font-weight-light)'
  })
};

const CharacterSearch = ({ onChange, onSearch, resultCount, values }) => {
  const { t } = useTranslation();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSearch();
  };

  const handleStatusChange = ({ value }) => {
    onChange({ status: value });
  };

  const handleGenderChange = ({ value }) => {
    onChange({ gender: value });
  };

  const handleNameChange = (event) => {
    onChange({ name: getOnChangeValue(event) });
  }

  const statusOpt = statusOptions.map(s => ({
    ...s,
    label: t(`character.status.${s.label.toLowerCase()}`, s.label)
  }));

  const genderOpt = genderOptions.map(g => ({
    ...g,
    label: t(`character.gender.${g.label.toLowerCase()}`, g.label)
  }));

  return (
    <Form onSubmit={handleFormSubmit}>
      <InputContainer>
        <SearchInput
          name="name"
          placeholder={t('characters.search.filters.name.placeholder', 'character name')}
          value={values.name || ''}
          onChange={handleNameChange}
          onSubmit={onSearch}
        />
        <FilterContainer>
          <Select
            value={statusOpt.find(status => status.value === values.status) || statusOpt[0]}
            options={statusOpt}
            styles={customStyles}
            name='status'
            onChange={handleStatusChange}
          />
          <Select
            value={genderOpt.find(gender => gender.value === values.gender) || genderOpt[0]}
            options={genderOpt}
            styles={customStyles}
            name='gender'
            onChange={handleGenderChange}
          />
        </FilterContainer>
      </InputContainer>
      <Result>{t('characters.search.results.message', { count: resultCount })}</Result>
    </Form>
  );
}

CharacterSearch.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  resultCount: PropTypes.number.isRequired,
  values: PropTypes.shape({
    name: PropTypes.string,
    status: PropTypes.string,
    gender: PropTypes.string,
  })
};

export default CharacterSearch;
