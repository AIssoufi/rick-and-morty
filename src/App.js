// Dependencies
import React, { useState } from "react";
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
  /* Theme */
  --text-color: var(--${({ theme }) => theme.textColor});
  --text-color-light: var(--${({ theme }) => theme.textColorLight});

  --bg-color: var(--${({ theme }) => theme.bgColor});
  --box-shadow-color: var(--${({ theme }) => theme.boxShadowColor});

  color: var(--text-color);

  display: grid;
  grid-template-areas: "header" "main";
  grid-template-rows: 50px 1fr;
  grid-template-columns: minmax(25em, 1440px);
  height: 100vh;
  justify-content: center;

  @media (min-width: 50em) {
    grid-template-rows: 70px 1fr;
  }
`;

const Main = styled.main`
  grid-area: main;
  background-color: var(--bg-color);
`;

const theme = {
  light: {
    textColor: 'black',
    textColorLight: 'gray',
    bgColor: 'white',
    boxShadowColor: 'black-shadow'
  },
  dark: {
    textColor: 'white',
    textColorLight: 'gray',
    bgColor: 'black',
    boxShadowColor: 'white-shadow'
  }
}

function App() {
  const [currentTheme, setCurrentTheme] = useState('light');

  const handleThemeChange = (themeName) => {
    if (theme[themeName]) {
      setCurrentTheme(themeName);
    }
  };

  return (
    <Router>
      <Wrapper theme={theme[currentTheme]}>
        <Header
          onThemeChange={handleThemeChange}
          currentTheme={currentTheme}
        />
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
