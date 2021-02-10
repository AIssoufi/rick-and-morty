// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";


const MainNav = ({ }) => (
  <nav>
    <ul>
      <li>
        <NavLink to="/">Episodes</NavLink>
      </li>
      <li>
        <NavLink to="/characters">Characters</NavLink>
      </li>
    </ul>
  </nav>
);

MainNav.propTypes = {

};

MainNav.defaultProps = {

};

export default MainNav;
