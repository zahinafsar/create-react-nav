import React from 'react';
import './app.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/navSnack'
import Home from './home'
import Contact from './contact'
import o from './icon/o/0White.png'
import ob from './icon/o/0Black.png'
import _ from './icon/-/-White.png'
import _b from './icon/-/-Black.png'



const App=()=>{
    const r = [
      ["/","Home", Home],
      ["/contact","Contact", Contact]
    ]
return (
    <Navbar logoTxt="zahin" triggerIcon={_} links={r}/>
 );
}

export default App;
