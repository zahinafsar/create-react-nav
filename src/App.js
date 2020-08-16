import React from 'react';
import Navbar from './components'
import Home from './home'
import Contact from './contact'


const App = () => {
  const r = [
    ["/", "Home", Home],
    ["/contact", "Contact", Contact]
  ]
  return (
    <div>
      <Navbar logoImg="https://cdn.freebiesupply.com/images/large/2x/apple-logo-transparent.png" triggerIcon="blackLine" routes={r} />
    </div>
  );
}

export default App;
