// Dependencies
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// Pages
import {
  Characters,
  CharacterDetails,
  Episodes
} from 'pages';

// Shared components
import Header from './shared-components/Header';

// CSS
import './App.css';

function App() {
  return (
    <Router>
      <>
        <Header />
        <Switch>
          <Route exact path="/">
            <Episodes />
          </Route>
          <Route path="/characters">
            <Characters />
          </Route>
          <Route path="/characters/:id">
            <CharacterDetails />
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
