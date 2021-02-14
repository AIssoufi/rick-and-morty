// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { components } from "react-select";

// Shared components
import Select from '../Select';

const options = [
  { value: 'en-US', flag: '🇬🇧', label: 'English' },
  { value: 'fr-FR', flag: '🇫🇷', label: 'Français' }
];

const LangItem = styled.div`
  display: flex;
  align-items: center;
`;

const Label = styled.span`
  margin-left: 10px;
`;

const Flag = styled.span`
`;

const SingleValue = ({ children, ...props }) => (
  <components.SingleValue {...props}>
    <LangItem>
      <Flag>{props.data.flag}</Flag>
      <Label>{children}</Label>
    </LangItem>
  </components.SingleValue>
);

const IconOption = (props) => (
  <components.Option {...props}>
    <LangItem>
      <Flag>{props.data.flag}</Flag>
      <Label>{props.data.label}</Label>
    </LangItem>
  </components.Option>
);

const SelectLang = ({ onChange, value }) => {
  const handleChange = ({ value }) => {
    onChange(value);
  };

  return (
    <Select
      value={options.find(lang => lang.value === value) || options[0]}
      onChange={handleChange}
      options={options}
      components={{ Option: IconOption, SingleValue }}
    />
  );
};

SelectLang.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default SelectLang;
