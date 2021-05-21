import React, { useRef, useEffect } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import * as reactRouterDom from 'react-router-dom';
import './nav.css';
import l from './icon/-/-White.png'
import lb from './icon/-/-Black.png'

const Navbar = (props) => {
  const mainnav = useRef()
  var trig = true;
  const value = props.routes;
  var displaytxt;
  var triggerIcon;
  var logoImg = false;
  var logoTxt = false;

  useEffect(() => {
    if (props.yToggle === "true") {
      mainnav.current.style.transition = "none";
      mainnav.current.style.width = "100%"
      window.innerWidth < 700 ? mainnav.current.style.top = "-110%" : mainnav.current.style.top = "0px"
      mainnav.current.style.left = "0px";
    }
  })

  if (props.triggerIcon === undefined || props.triggerIcon === "dark") {
    triggerIcon = l;
  } else if (props.triggerIcon === "light") {
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
    displaytxt = props.logoTxtStyle
  }


  const trigger = () => {
    var nav = mainnav.current.style;
    if (window.innerWidth < 700) {
      nav.transition = "0.5s";
      if (trig) {
        props.yToggle === "true" ? nav.top = "0px" : nav.left = "0px";
        trig = false;
      } else {
        props.yToggle === "true" ? nav.top = "-110%" : nav.left = "-100%";
        trig = true;
      }
    }
  }


  window.addEventListener('resize', () => {
    var nav = mainnav.current.style;
    nav.transition = "none";
    if (trig && window.innerWidth > 700) {
      props.yToggle === "true" ? nav.top = "0px" : nav.left = "0px";
      trig = false
    }
    if (!trig && window.innerWidth < 700) {
      props.yToggle === "true" ? nav.top = "-110%" : nav.left = "-100%";
      trig = true
    }
  })

  const page = () => {
    window.location.href = window.location.origin
  }

  return (
    <BrowserRouter>

      <div className="Appbar">
        {logoImg ? <img onClick={page} alt="logo" src={props.logoImg} /> : ""}
        {logoTxt ? <span onClick={page} style={displaytxt}>{props.logoTxt}</span> : ""}
      </div>

      <div onClick={trigger} className="trigger">
        <img alt="nav" src={triggerIcon} />
      </div>

      <div className="Navbar" ref={mainnav}>
        {value.map(u => u[1] ? (
          <NavLink

            onClick={trigger}

            key={u[1]}

            activeClassName="selected"

            className="NavItems"

            exact

            to={u[0]}
          >
            {u[1]}
          </NavLink>
        ):'')}
      </div>
      <div style={{ width: "100%", height: "50px" }}></div>
      <Switch>
        {value.map(u => (
          <Route key={u[1]} exact path={u[0]} component={u[2]} />
        ))}
      </Switch>

    </BrowserRouter>
  )
}
export const navigation = reactRouterDom;
export default Navbar;
