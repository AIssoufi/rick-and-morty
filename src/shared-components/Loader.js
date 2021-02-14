// Dependencies
import React from 'react';
import styled, { keyframes } from 'styled-components';

const opacity = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Container = styled.div`
    width: 100%;
    height: 100%;
    max-height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Text = styled.div`
  color: var(--text-color);
  margin: 5px 0;
  text-transform: uppercase;
  text-align: center;
  font-family: 'Arial', sans-serif;
  font-size: 10px;
  letter-spacing: 2px;
`;

const LineContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100px;
`;

const Line = styled.span`
  width: 1px;
  height: 12px;
  background: var(--text-color);
  margin: 0 1px;
  display: inline-block;
  animation: ${opacity} 1000ms infinite ease-in-out;
`;

const Line1 = styled(Line)`
  animation-delay: 800ms;
`;

const Line2 = styled(Line)`
  animation-delay: 600ms;
`;

const Line3 = styled(Line)`
  animation-delay: 400ms;
`;

const Line4 = styled(Line)`
  animation-delay: 200ms;
`;

const Line5 = styled(Line)`
  animation-delay: 200ms;
`;

const Line6 = styled(Line)`
  animation-delay: 400ms;
`;

const Line7 = styled(Line)`
  animation-delay: 600ms;
`;

const Line8 = styled(Line)`
  animation-delay: 800ms;
`;

const Loader = () => (
  <Container>
    <Text>Rick and Morty</Text>
    <LineContainer>
      <Line1 />
      <Line2 />
      <Line3 />
      <Line4 />
      <Line5 />
      <Line6 />
      <Line7 />
      <Line8 />
    </LineContainer>
  </Container>
);

export default Loader;
