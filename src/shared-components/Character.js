// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Container = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 170px;
  padding: 10px;
  border-radius: 17px;
  background-color: transparent;

  &:hover {
    background-color: var(--gray-bg-color)
  }
`;

const Image = styled.img`
  width: auto;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 7px;
`;

const Name = styled.div`
  font-size: 18px;
  font-weight: var(--font-weight-regular);
  text-overflow: ellipsis;
  max-width: 150px;
  overflow: hidden;
`;

const SpeciesAndStatus = styled.div`
  font-size: 14px;
  font-weight: var(--font-weight-light);
`;


const Character = ({ characterUrl, imageUrl, name, species, status }) => (
  <Container to={characterUrl}>
    <Image src={imageUrl} alt={name} />
    <Name>{name}</Name>
    <SpeciesAndStatus>{species} · {status}</SpeciesAndStatus>
  </Container>
);


Character.propTypes = {
  characterUrl: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired
};

export default Character;
