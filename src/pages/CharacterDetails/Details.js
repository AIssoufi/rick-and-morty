// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Hoc
import { withLoading } from 'hoc/withLoading';

const Wrapper = styled.section`
  padding: var(--page-padding);

  @media (min-width: 50em) {
    max-width: 500px;
    margin: 1.5rem auto 0 auto;
  }
`;

const Image = styled.img`
    width: auto;
    height: 100%;
    border-radius: 50%;
`;

const ImageContainer = styled.div`
  position: relative;
  margin-bottom: 7px;
  width: 150px;
  height: 150px;
  z-index: -1;

  --color: var(--${({ status }) => (status && status === 'Alive') ? 'green' : 'red'});

  &::before {
    content: '';
    display: block;
    top: -10px;
    bottom: -10px;
    left: -10px;
    right: -10px;
    border-radius: 50%;
    position: absolute;
    border: 2px solid var(--color);
  }

  &::after {
    content: '${({ status }) => status}';
    display: block;
    position: absolute;
    color: #FFF;
    bottom: 85%;
    right: 0;
    background-color: var(--color);
    padding: 5px 10px;
    border-radius: 15px;
  }
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;
`;

const Name = styled.p`
  font-size: 18px;
  font-weight: var(--font-weight-regular);
  margin: 12px 0 0 0;
`;

const Main = styled.main`
  padding: 10px;
  border: 1px solid var(--gray-light);
  @media (min-width: 50em) {
    margin-top: 2.5rem;
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  &:not(:last-of-type) {
    margin-bottom: 20px;
  }
`;

const ItemLabel = styled.span`
  font-size: 14px;
  font-weight: var(--font-weight-medium);
`;

const ItemValue = styled.span`
  font-size: 14px;
  font-weight: var(--font-weight-light);
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  list-style: none;
  text-align: right;
  font-size: 14px;
  font-weight: var(--font-weight-light);
  margin-top: 10px;
`;

const Separator = styled.hr`
  max-width: 300px;
  border: none;
  margin: 10px auto 20px auto;
  height: 1px;
  background-color: var(--gray-light);
`;

const Details = ({
  name, gender, imageUrl, status, species, location, origin, episodes
}) => {
  return (
    <Wrapper>
      <Header>
        <ImageContainer status={status}>
          <Image src={imageUrl} alt={name} />
        </ImageContainer>
        <Name>{name}</Name>
      </Header>
      <Main>
        <Item>
          <ItemLabel>Species</ItemLabel>
          <ItemValue>{species}</ItemValue>
        </Item>
        <Item>
          <ItemLabel>Gender</ItemLabel>
          <ItemValue>{gender}</ItemValue>
        </Item>
        <Separator />
        <Item>
          <ItemLabel>Location</ItemLabel>
          <ItemValue>{location && location.name}</ItemValue>
        </Item>
        <Item>
          <ItemLabel>Origin</ItemLabel>
          <ItemValue>{origin && origin.name}</ItemValue>
        </Item>
        <Separator />
        <div>
          <ItemLabel>Episodes</ItemLabel>
          <List>
            {episodes.map(episode => (
              <ListItem>{episode.episode} · {episode.name}</ListItem>
            ))}
          </List>
        </div>
      </Main>
    </Wrapper>
  )
};

Details.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  location: PropTypes.shape({
    name: PropTypes.string
  }).isRequired,
  origin: PropTypes.shape({
    name: PropTypes.string
  }).isRequired,
  episodes: PropTypes.arrayOf(PropTypes.shape({
    episode: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }))
};

Details.defaultProps = {
  episodes: []
};

export default withLoading(Details);
