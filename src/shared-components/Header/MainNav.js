// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";


const MainNav = ({ }) => (
  <nav>
    <ul>
      <li>
        <Link to="/">Episodes</Link>
      </li>
      <li>
        <Link to="/characters">Characters</Link>
      </li>
    </ul>
  </nav>
);

MainNav.propTypes = {

};

MainNav.defaultPros = {

};

export default MainNav;
