import React from 'react';
import './nav.css';
import { NavLink } from 'react-router-dom';

const Navbar = props => {
  const value = props.links;
  var navStyle;
  var itemStyle;

  if (props.navBarStyle === undefined) {
    navStyle = undefined;
  } else {
    navStyle = props.navBarStyle;
  }

  if (props.navItemStyle === undefined) {
    itemStyle = undefined;
  } else {
    itemStyle = props.navItemStyle;
  }

  var trig = true;
  var triggerHeight = window.innerHeight - 50;

  const trigger = () => {
    if (trig) {
      document.querySelector(".Navbar").style.top = "0";
      document.querySelector(".trigger").style.top = triggerHeight + "px";
      trig = false;
    } else {
      document.querySelector(".Navbar").style.top = "-100%";
      document.querySelector(".trigger").style.top = "20px";
      trig = true;
    }
  };

  return (
    /*#__PURE__*/
    React.createElement(React.Fragment, null,
    /*#__PURE__*/
    React.createElement("div", {
      onClick: trigger,
      className: "trigger"
    },
    /*#__PURE__*/
    React.createElement("img", {
      alt: "nav",
      src: "https://img.icons8.com/office/26/000000/menu.png"
    })),
    /*#__PURE__*/
    React.createElement("div", {
      className: "Navbar",
      style: navStyle
    }, value.map(u =>
    /*#__PURE__*/
    React.createElement(NavLink, {
      key: u.title,
      activeClassName: "selected",
      className: "all",
      style: itemStyle,
      exact: true,
      to: u.link
    }, u.title))))
  );
};

export default Navbar;