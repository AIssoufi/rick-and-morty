// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Select, { components } from "react-select";

const options = [
  { value: 'en-US', flag: '🇬🇧', label: 'English' },
  { value: 'fr-FR', flag: '🇫🇷', label: 'Français' }
];

const LangItem = styled.div`
  display: flex;
  align-items: center;
`;

const Label = styled.span`
  margin-left: 15px;
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

const StyledSelect = styled(Select)`
  width: 150px;
`;

const SelectLang = ({ className }) => (
  <StyledSelect
    className={className}
    defaultValue={options[0]}
    options={options}
    components={{ Option: IconOption, SingleValue }}
  />
);

SelectLang.propTypes = {
  className: PropTypes.string,
};

SelectLang.defaultProps = {
  className: ''
};

export default SelectLang;
