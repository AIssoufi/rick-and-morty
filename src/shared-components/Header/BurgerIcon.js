// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Svg = styled.svg.attrs({
  viewBox: "0 0 100 100",
  width: "50"
})`
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition: transform 400ms;
  user-select: none;
  position: relative;
  z-index: 2;

  ${props => (props.isActive ? css`transform: rotate(45deg);`: '')}
`;

const Line = styled.path`
  fill: none;
  transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
  stroke: var(--black);
  stroke-width: 5.5;
  stroke-linecap: round;
`;

const TopLine = styled(Line).attrs({
  d: "m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
})`
  stroke-dasharray: 40 160;

  ${props => (props.isActive ? css`stroke-dashoffset: -64px;`: '')}
`;

const MiddleLine = styled(Line).attrs({
  d: "m 30,50 h 40"
})`
  stroke-dasharray: 40 142;
  transform-origin: 50%;
  transition: transform 400ms;

  ${props => (props.isActive ? css`transform: rotate(90deg);` : '')}
`;

const BottomLine = styled(Line).attrs({
  d:"m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
})`
  stroke-dasharray: 40 85;
  transform-origin: 50%;
  transition: transform 400ms, stroke-dashoffset 400ms;

  ${props => (props.isActive ? css`stroke-dashoffset: -64px;` : '')}
`;

const BurgerIcon = ({ isOpen, onClick }) => (
  <Svg
    isActive={isOpen}
    onClick={onClick}
  >
    <TopLine isActive={isOpen} />
    <MiddleLine isActive={isOpen} />
    <BottomLine isActive={isOpen} />
  </Svg>
);

BurgerIcon.propTypes = {
  isOpen: PropTypes.bool,
  onClick: PropTypes.func.isRequired
};

BurgerIcon.defaultProps = {
  isOpen: false
};

export default BurgerIcon;
