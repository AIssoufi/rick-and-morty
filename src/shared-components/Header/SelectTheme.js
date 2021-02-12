// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import Select, { components } from "react-select";

const options = [
  { value: 'white', label: 'Light theme' },
  { value: 'gray', label: 'Gray theme' },
  { value: 'black', label: 'Dark theme' },
];

const ThemeItem = styled.div`
  display: flex;
  align-items: center;
`;

const ColoredCircle = styled.div`
  height: 15px;
  width: 15px;
  background-color: var(--${
    ({ color = 'light' }) => color
  });
  border: 1px solid gray;
  border-radius: 50%;
`;

const Label = styled.span`
  margin-left: 12px;
`;

const SingleValue = ({ children, ...props }) => (
  <components.SingleValue {...props}>
    <ThemeItem>
      <ColoredCircle color={props.data.value} />
      <Label>{children}</Label>
    </ThemeItem>
  </components.SingleValue>
);

const IconOption = props => (
  <components.Option {...props}>
    <ThemeItem>
      <ColoredCircle color={props.data.value} />
      <Label>{props.data.label}</Label>
    </ThemeItem>
  </components.Option>
);

const StyledSelect = styled(Select)`
  width: 165px;
`;

const SelectTheme = ({ className }) => (
  <StyledSelect
    className={className}
    defaultValue={options[0]}
    options={options}
    components={{ Option: IconOption, SingleValue }}
  />
);

SelectTheme.propTypes = {
  className: PropTypes.string
};

SelectTheme.defaultProps = {
  className: ''
};

export default SelectTheme;
