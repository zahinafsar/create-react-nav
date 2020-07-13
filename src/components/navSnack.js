import React from 'react';
import './nav.css';
import {NavLink} from 'react-router-dom';
import o from './icon/o/0White.png'
import ob from './icon/o/0Black.png'
import l from './icon/-/-White.png'
import lb from './icon/-/-Black.png'

const Navbar =(props)=>{

      var trig = true;
      const value = props.links;
      var navStyle;
      var itemStyle;
      var displayimg={"display":"none"};
      var displaytxt={"display":"none"};
      var logo;

      if (props.triggerIcon === undefined || props.triggerIcon === "whiteCircle") {
        logo = o;
      } else if (props.triggerIcon === "blackCircle") {
        logo = ob;
      }else if (props.triggerIcon === "whiteLine") {
        logo = l;
      }else if (props.triggerIcon === "blackLine") {
        logo = lb;
      }else{
        logo = props.triggerIcon;
      }

      if (props.logoImg !== undefined ) {
          displayimg={
        "display":"block"
          }
      }
      if (props.logoTxt !== undefined ) {
          displaytxt={
        "display":"block"
          }
      }

      if (props.navBarStyle === undefined ) {
        navStyle = undefined;
      }else{
        navStyle = props.navBarStyle;
      }

      if (props.logoTxtStyle !== undefined ) {
        displaytxt={...displaytxt,...props.logoTxtStyle}
      }

      if (props.navItemStyle === undefined ) {
        itemStyle = undefined;
      }else{
        itemStyle = props.navItemStyle;
      }

      const trigger=()=>{
        if (window.innerWidth < 700) {
        if (trig) {
        document.querySelector(".Navbar").style.left = "0";
        trig = false;
        }else{
        document.querySelector(".Navbar").style.left = "-100%";
        trig = true;
        }
      }
      }
      
      return (
        <React.Fragment>
        <div className="Navbar2" style={navStyle}>
        <img alt="logo" style={displayimg} src={props.logoImg}/>
        <span style={displaytxt}>{props.logoTxt}</span>
        </div>
        <div onClick={trigger} className="trigger"><img style={{'position':'fixed'}} alt="nav" src={logo}/></div>
        <div className ="Navbar" style={navStyle}>
        {value.map(u => (
                <NavLink

                    onClick={trigger}

                    key={u[1]}

                    activeClassName="selected"

                    className="all"

                    style={itemStyle}

                    exact

                    to={u[0]}
                >
                {u[1]}
                </NavLink>
            ))}
        </div>
        </React.Fragment>
     )
}


export default Navbar;
