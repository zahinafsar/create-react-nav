import React from 'react';
import './nav.css';
import { NavLink } from 'react-router-dom';

const Navbar = props => {
  const value = props.links;
  return (
    /*#__PURE__*/
    React.createElement("div", {
      className: "Navbar"
    }, value.map(u =>
    /*#__PURE__*/
    React.createElement(NavLink, {
      activeStyle: {
        padding: "50px 10px 8px 10px",
        backgroundColor: "blueviolet",
        borderRadius: "0px 0px 15px 15px"
      },
      className: "link",
      exact: true,
      to: u.link
    }, u.title)))
  );
};

export default Navbar;