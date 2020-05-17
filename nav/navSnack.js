import React from 'react';
import './nav.css';
import { NavLink } from 'react-router-dom';

const Navbar = props => {
  var trig = true;
  const value = props.links;
  var navStyle;
  var itemStyle;
  var displayimg = {
    "display": "none"
  };
  var displaytxt = {
    "display": "none"
  };

  if (props.logoImg !== undefined) {
    displayimg = {
      "display": "block"
    };
  }

  if (props.logoTxt !== undefined) {
    displaytxt = {
      "display": "block"
    };
  }

  if (props.navBarStyle === undefined) {
    navStyle = undefined;
  } else {
    navStyle = props.navBarStyle;
  }

  if (props.textStyle !== undefined) {
    displaytxt = { ...displaytxt,
      ...props.textStyle
    };
  }

  if (props.navItemStyle === undefined) {
    itemStyle = undefined;
  } else {
    itemStyle = props.navItemStyle;
  }

  const trigger = () => {
    if (window.innerWidth < 700) {
      if (trig) {
        document.querySelector(".Navbar").style.left = "0";
        trig = false;
      } else {
        document.querySelector(".Navbar").style.left = "-100%";
        trig = true;
      }
    }
  };

  return (
    /*#__PURE__*/
    React.createElement(React.Fragment, null,
    /*#__PURE__*/
    React.createElement("div", {
      className: "Navbar2",
      style: navStyle
    },
    /*#__PURE__*/
    React.createElement("img", {
      alt: "logo",
      style: displayimg,
      src: props.logoImg
    }),
    /*#__PURE__*/
    React.createElement("span", {
      style: displaytxt
    }, props.logoTxt)),
    /*#__PURE__*/
    React.createElement("div", {
      onClick: trigger,
      className: "trigger"
    },
    /*#__PURE__*/
    React.createElement("img", {
      style: {
        'position': 'fixed'
      },
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
      onClick: trigger,
      key: u[1],
      activeClassName: "selected",
      className: "all",
      style: itemStyle,
      exact: true,
      to: u[0]
    }, u[1]))))
  );
};

export default Navbar;