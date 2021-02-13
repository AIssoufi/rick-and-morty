// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

// Svg
import { ReactComponent as LeftIcon } from './chevron-left.svg';
import { ReactComponent as RightIcon } from './chevron-right.svg';

const PaginationItem = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: none;
  color: ${({ isActive }) => isActive ? css`var(--text-color)`: css`var(--text-color-light)`};
  background-color: ${({ isActive }) => isActive ? css`var(--gray-bg-color)`: css`var(--gray-bg-color-light)`};
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(1);
  transition-property: transform;
  transition-duration: .3s;

  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 400px;
  margin: 50px auto;

  svg {
    width: 50px;
    height: 50px;
    color: var(--gray);

    transform: scale(1);
    transition-property: transform;
    transition-duration: .3s;

    &:hover {
      cursor: pointer;
      transform: scale(1.2);
    }
  }
`

const Pagination = ({ currentPage, pageCount, onPageChange }) => {
  if (typeof currentPage !== 'number') return null;
  if (typeof pageCount !== 'number') return null;

  const pages = [];

  for(let i = 1; i <= pageCount; i++) {
    pages.push(i)
  }

  let min = (currentPage - 2) <= 1 ? 1 : (currentPage - 2);
  let max = (currentPage + 2) >= pageCount ? pageCount : (currentPage + 2);

  if (currentPage <= 2) max = 5;
  if (max > pageCount) max = pageCount;
  if (min > 3 && min >= (pageCount - 4)) min = (pageCount - 4);

  return (
    <Container>
      <LeftIcon
        onClick={() => onPageChange(currentPage - 1)}
      />
      {pages.slice(min - 1, max).map(page => (
        <PaginationItem
          isActive={page === currentPage}
          onClick={() => onPageChange(page)}
        >
          {page}
        </PaginationItem>
      ))}
      <RightIcon
        onClick={() => onPageChange(currentPage + 1)}
      />
    </Container>
  );
}


Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  pageCount: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};

export default Pagination;
