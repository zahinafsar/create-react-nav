import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './nav.css';
import {NavLink} from 'react-router-dom';
import o from './icon/o/0White.png'
import ob from './icon/o/0Black.png'
import l from './icon/-/-White.png'
import lb from './icon/-/-Black.png'

const Navbar =(props)=>{

      var trig = true;
      const value = props.links;
      var displaytxt;
      var triggerIcon;
      var logoImg = false;
      var logoTxt = false;

      if (props.triggerIcon === undefined || props.triggerIcon === "whiteCircle") {
        triggerIcon = o;
      } else if (props.triggerIcon === "blackCircle") {
        triggerIcon = ob;
      }else if (props.triggerIcon === "whiteLine") {
        triggerIcon = l;
      }else if (props.triggerIcon === "blackLine") {
        triggerIcon = lb;
      }else{
        triggerIcon = props.triggerIcon;
      }

      if (props.logoImg !== undefined ) {
          logoImg = true;
      }
      if (props.logoTxt !== undefined ) {
          logoTxt = true;
      }

      if (props.logoTxtStyle !== undefined ) {
        displaytxt = props.logoTxtStyle
      }

      const trigger=()=>{
      var navWidth = document.querySelector(".Navbar");
        if (window.innerWidth < 700) {
          if (trig) {
            navWidth.style.left = "0";
            trig = false;
          }else{
            navWidth.style.left = "-100%";
            trig = true;
          }
        }
        
      }

      window.addEventListener('resize', ()=>{
        var navWidth = document.querySelector(".Navbar");
        if (navWidth.style.left === "-100%" && window.innerWidth > 700) {
            navWidth.style.left = "0px";
        }
        if (window.innerWidth < 700 && navWidth.style.left === "0px") {
            navWidth.style.left = "-100%";
        }
      })
      
      return (
        <BrowserRouter>

        <div className="Appbar">
            {logoImg ? <img alt="logo" src={props.logoImg}/> :""}
            {logoTxt ? <span style={displaytxt}>{props.logoTxt}</span> : ""}
        </div>
        <div onClick={trigger} className="trigger">
            <img alt="nav" src={triggerIcon}/>
        </div>
        
        <div className ="Navbar">
        {value.map(u => (
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
            ))}
        </div>
        <br/>
        <br/>
        <br/>
        <Switch>
            {value.map(u => (
              <Route exact path={u[0]} component={u[2]}/>
            ))}
        </Switch>

        </BrowserRouter>
     )
}


export default Navbar;
