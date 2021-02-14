// Dependencies
import React from 'react';
import styled from 'styled-components';
import { components } from "react-select";
import { useTranslation } from 'react-i18next';

// Shared components
import Select, { controlStyle } from '../Select';

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
  margin-left: 10px;
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

const customStyles = {
  control: () => ({
    ...controlStyle,
    width: '140px'
  }),
};

const SelectTheme = () => {
  const { t } = useTranslation();

  const opt = options.map(theme => ({
    ...theme,
    label: t(`theme.label.${theme.label.toLowerCase()}`, theme.label)
  }));

  return (
    <Select
      defaultValue={opt[0]}
      options={opt}
      components={{ Option: IconOption, SingleValue }}
      styles={customStyles}
    />
  );
};

export default SelectTheme;
