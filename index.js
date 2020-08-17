import React, { useRef, useEffect } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import './nav.css';
import o from './icon/o/0White.png';
import ob from './icon/o/0Black.png';
import l from './icon/-/-White.png';
import lb from './icon/-/-Black.png';

const Navbar = props => {
  const mainnav = useRef();
  var trig = true;
  const value = props.routes;
  var displaytxt;
  var triggerIcon;
  var logoImg = false;
  var logoTxt = false;
  useEffect(() => {
    if (props.yToggle === "true") {
      mainnav.current.style.left = "0";
      window.innerWidth < 700 ? mainnav.current.style.top = "-110%" : mainnav.current.style.top = "0";
    }
  });

  if (props.triggerIcon === undefined || props.triggerIcon === "whiteCircle") {
    triggerIcon = o;
  } else if (props.triggerIcon === "blackCircle") {
    triggerIcon = ob;
  } else if (props.triggerIcon === "whiteLine") {
    triggerIcon = l;
  } else if (props.triggerIcon === "blackLine") {
    triggerIcon = lb;
  } else {
    triggerIcon = props.triggerIcon;
  }

  if (props.logoImg !== undefined) {
    logoImg = true;
  }

  if (props.logoTxt !== undefined) {
    logoTxt = true;
  }

  if (props.logoTxtStyle !== undefined) {
    displaytxt = props.logoTxtStyle;
  }

  const trigger = () => {
    var nav = mainnav.current.style;

    if (window.innerWidth < 700) {
      nav.transition = "1s";

      if (trig) {
        props.yToggle === "true" ? nav.top = "0" : nav.left = "0";
        trig = false;
      } else {
        props.yToggle === "true" ? nav.top = "-110%" : nav.left = "-100%";
        trig = true;
      }
    }
  };

  window.addEventListener('resize', () => {
    var nav = mainnav.current.style;
    nav.transition = "none";

    if (trig && window.innerWidth > 700) {
      props.yToggle === "true" ? nav.top = "0" : nav.left = "0";
      trig = false;
    }

    if (!trig && window.innerWidth < 700) {
      props.yToggle === "true" ? nav.top = "-110%" : nav.left = "-100%";
      trig = true;
    }
  });

  const page = () => {
    window.location.href = window.location.origin;
  };

  return (
    /*#__PURE__*/
    React.createElement(BrowserRouter, null,
    /*#__PURE__*/
    React.createElement("div", {
      className: "Appbar"
    }, logoImg ?
    /*#__PURE__*/
    React.createElement("img", {
      onClick: page,
      alt: "logo",
      src: props.logoImg
    }) : "", logoTxt ?
    /*#__PURE__*/
    React.createElement("span", {
      onClick: page,
      style: displaytxt
    }, props.logoTxt) : ""),
    /*#__PURE__*/
    React.createElement("div", {
      onClick: trigger,
      className: "trigger"
    },
    /*#__PURE__*/
    React.createElement("img", {
      alt: "nav",
      src: triggerIcon
    })),
    /*#__PURE__*/
    React.createElement("div", {
      className: "Navbar",
      style: props.yToggle === "true" ? {
        width: "100%"
      } : {},
      ref: mainnav
    }, value.map(u =>
    /*#__PURE__*/
    React.createElement(NavLink, {
      onClick: trigger,
      key: u[1],
      activeClassName: "selected",
      className: "NavItems",
      exact: true,
      to: u[0]
    }, u[1]))),
    /*#__PURE__*/
    React.createElement("div", {
      style: {
        width: "100%",
        height: "50px"
      }
    }),
    /*#__PURE__*/
    React.createElement(Switch, null, value.map(u =>
    /*#__PURE__*/
    React.createElement(Route, {
      key: u[1],
      exact: true,
      path: u[0],
      component: u[2]
    }))))
  );
};

export default Navbar;