// Dependencies
import React from 'react';
import styled from 'styled-components';
import { components } from "react-select";
import { useTranslation } from 'react-i18next';

// Shared components
import Select, { controlStyle } from '../Select';

const options = [
  { value: 'light', iconColor: 'white', label: 'Light theme' },
  { value: 'dark', iconColor: 'black', label: 'Dark theme' },
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
  margin-left: 10px;
`;

const SingleValue = ({ children, ...props }) => (
  <components.SingleValue {...props}>
    <ThemeItem>
      <ColoredCircle color={props.data.iconColor} />
      <Label>{children}</Label>
    </ThemeItem>
  </components.SingleValue>
);

const IconOption = props => (
  <components.Option {...props}>
    <ThemeItem>
      <ColoredCircle color={props.data.iconColor} />
      <Label>{props.data.label}</Label>
    </ThemeItem>
  </components.Option>
);

const customStyles = {
  control: () => ({
    ...controlStyle,
    width: '140px'
  }),
};

const SelectTheme = ({ onChange, value }) => {
  const { t } = useTranslation();

  const handleChange = ({ value }) => {
    onChange(value);
  };

  const opt = options.map(theme => ({
    ...theme,
    label: t(`theme.label.${theme.label.toLowerCase()}`, theme.label)
  }));

  return (
    <Select
      value={options.find(theme => theme.value === value) || opt[0]}
      onChange={handleChange}
      options={opt}
      components={{ Option: IconOption, SingleValue }}
      styles={customStyles}
    />
  );
};

export default SelectTheme;
