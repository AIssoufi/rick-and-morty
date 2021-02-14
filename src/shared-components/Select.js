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
  padding: '0 5px 0 0'
};

export const indicatorSeparatorStyle = {
  display: 'none'
};

export const valueContainerStyle = {
  padding: '0px 8px'
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

export const menuStyle = {
  backgroundColor: "var(--bg-color)",
  boxShadow: "0 0 0 1px var(--box-shadow-color), 0 4px 11px var(--box-shadow-color)"
}

const CustomSelect = ({ styles, ...otherProps }) => (
  <Select
    {...otherProps}
    styles={{
      control: () => controlStyle,
      dropdownIndicator: (provided) => ({...provided, ...dropdownIndicatorStyle }),
      indicatorSeparator: (provided) => ({...provided, ...indicatorSeparatorStyle }),
      valueContainer: (provided) => ({...provided, ...valueContainerStyle }),
      singleValue: (provided) => ({...provided, ...singleValueStyle }),
      menu: (provided) => ({...provided, ...menuStyle }),
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
