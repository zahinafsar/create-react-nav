import React from 'react';
import './nav.css';
import {NavLink} from 'react-router-dom';

const Navbar =(props)=>{
      const value = props.links;
      return (
        <div className="Navbar">
       {value.map(u => (
                <NavLink 

                    activeStyle={{
                    padding: "50px 10px 8px 10px",
                    backgroundColor: "blueviolet",
                    borderRadius: "0px 0px 15px 15px"
                    }}

                    className="link"

                    exact

                    to={u.link}
                >
                {u.title}
                </NavLink>
            ))}
        </div>
     )
}


export default Navbar;
