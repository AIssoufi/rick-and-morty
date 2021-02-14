// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

const Container = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
  padding: 10px;
  border-radius: 17px;
  background-color: transparent;

  &:hover {
    background-color: var(--gray-bg-color)
  }

  @media (min-width: 50em) {
    width: 170px;
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
  max-width: 100px;
  overflow: hidden;
  text-align: center;

  @media (min-width: 50em) {
    max-width: 150px;
  }
`;

const SpeciesAndStatus = styled.div`
  font-size: 14px;
  font-weight: var(--font-weight-light);
  text-align: center;
  text-overflow: ellipsis;
  max-width: 100px;
  overflow: hidden;
  @media (min-width: 50em) {
    max-width: 170px;
  }
`;


const Character = ({ characterUrl, imageUrl, name, species, status }) => {
  const { t } = useTranslation();

  return (
    <Container to={characterUrl}>
      <Image src={imageUrl} alt={name} />
      <Name>{name}</Name>
      <SpeciesAndStatus>{t(`character.species.${species.toLowerCase()}`, species)} · {t(`character.status.${status.toLowerCase()}`, status)}</SpeciesAndStatus>
    </Container>
  );
};


Character.propTypes = {
  characterUrl: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired
};

export default Character;
