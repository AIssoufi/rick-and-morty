// Dependencies
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import styled from 'styled-components';

// Pages
import {
  Characters,
  CharacterDetails,
  Episodes
} from 'pages';

// Shared components
import Header from './shared-components/Header';


const Wrapper = styled.div`
  display: grid;
  grid-template-areas: "header" "main";
  grid-template-rows: 50px 1fr;
  grid-template-columns: 1fr;
  height: 100vh;
`;

const Main = styled.main`
  grid-area: "main";
`;

function App() {
  return (
    <Router>
      <Wrapper>
        <Header />
        <Main>
          <Switch>
            <Route exact strict path="/">
              <Episodes />
            </Route>
            <Route stric path="/characters/:id">
              <CharacterDetails />
            </Route>
            <Route strict path="/characters">
              <Characters />
            </Route>
          </Switch>
        </Main>
      </ Wrapper>
    </Router>
  );
}

export default App;
