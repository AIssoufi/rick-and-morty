// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import Select from "react-select";

export const controlStyle = {
  alignItems: 'center',
  backgroundColor: 'transparent',
  borderColor: 'var(--gray-light)',
  borderRadius: 4,
  borderStyle: 'solid',
  borderWidth: 1,
  cursor: 'default',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  outline: '0!important',
  position: 'relative',
  transition: 'all 100ms',
  boxSizing: 'border-box',
  width: '120px'
};

export const dropdownIndicatorStyle = {
  color: 'var(--gray)',
  display: 'flex',
  padding: '0 5px 0 0',
  transition: 'color 150ms',
  boxSizing: 'border-box'
};

export const indicatorSeparatorStyle = {
  display: 'none'
};

export const valueContainerStyle = {
  alignItems: 'center',
  display: 'flex',
  flex: '1',
  flexWrap: 'wrap',
  padding: '0px 8px',
  position: 'relative',
  overflow: 'hidden',
  boxSizing: 'border-box'
};

export const singleValueStyle = {
  color: 'var(--text-color)',
  marginLeft: '2px',
  marginRight: '2px',
  maxWidth: 'calc(100% - 8px)',
  overflow: 'hidden',
  position: 'absolute',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  top: '50%',
  transform: 'translateY(-50%)',
  boxSizing: 'border-box',
  fontWeight: 'var(--font-weight-medium)'
};

const CustomSelect = ({ styles, ...otherProps }) => (
  <Select
    {...otherProps}
    styles={{
      control: () => controlStyle,
      dropdownIndicator: () => dropdownIndicatorStyle,
      indicatorSeparator: () => indicatorSeparatorStyle,
      valueContainer: () => valueContainerStyle,
      singleValue: () => singleValueStyle,
      ...styles
    }}
  />
);

CustomSelect.propTypes = {
  styles: PropTypes.shape({})
};

CustomSelect.defaultProps = {
  styles: {}
};

export default CustomSelect;
