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
      {/* <Navbar logoTxt="ZAHIN" triggerIcon="blackLine" routes={r} /> */}
      <Navbar logoImg="https://img.icons8.com/fluent/48/000000/mac-os.png" yToggle="true" triggerIcon="blackLine" routes={r} />
    </div>
  );
}

export default App;