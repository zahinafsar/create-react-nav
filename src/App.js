import React from 'react';
import './app.css';
import Navbar from './components/navSnack'
import Home from './home'
import Contact from './contact'


const App=()=>{
    const r = [
      ["/","Home", Home],
      ["/contact","Contact", Contact]
    ]
return (
    <Navbar logoTxt="zahin" triggerIcon="whiteLine" routes={r}/>
 );
}

export default App;
