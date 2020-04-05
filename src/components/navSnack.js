import React from 'react';
import './nav.css';
import {NavLink} from 'react-router-dom';

const Navbar =(props)=>{
      const value = props.links;
      var navStyle;
      var itemStyle;

      if (props.navBarStyle === undefined ) {
        navStyle = undefined;
      }else{
        navStyle = props.navBarStyle;
      }

      if (props.navItemStyle === undefined ) {
        itemStyle = undefined;
      }else{
        itemStyle = props.navItemStyle;
      }

      var trig = true;
      var triggerHeight = window.innerHeight-50;
      const trigger=()=>{
        if (trig) {
        document.querySelector(".Navbar").style.top = "0";
        document.querySelector(".trigger").style.top = triggerHeight+"px";
        trig = false;
        }else{
        document.querySelector(".Navbar").style.top = "-100%";
        document.querySelector(".trigger").style.top = "20px";
        trig = true;
        }
      }

      return (
        <React.Fragment>
        <div onClick={trigger} className="trigger"><img alt="nav" src="https://img.icons8.com/office/26/000000/menu.png"/></div>
        <div className ="Navbar" style={navStyle}>
        {value.map(u => (
                <NavLink 
                    key={u.title}

                    activeClassName="selected"

                    className="all"

                    style={itemStyle}

                    exact

                    to={u.link}
                >
                {u.title}
                </NavLink>
            ))}
        </div>
        </React.Fragment>
     )
}


export default Navbar;
