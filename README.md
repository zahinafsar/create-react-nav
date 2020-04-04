## [Create-React-Nav]((http://create-react-nav.com/)) &middot; React Navigation Bar Creator &middot; ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg) ![npm version](https://img.shields.io/npm/v/create-react-nav)

Create your react app menu bar more easily with ```create-react-nav```

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install create-react-nav.

```bash
npm install create-react-nav
```

## Usage
## Step-1 (Import the library)

```javascript
import Navbar from 'creat-react-nav/dist/<...nav_name....>';
```
## Step-2 (Use the Component)

```javascript
<Navbar links={[
  {'link':"<...link_path...>",'title':"<...nav_title...>"},
  {'link':"<...link_path...>",'title':"<...nav_title...>"},
  ...................................
  ]}
/>
```
## Example

```javascript
import Reactfrom 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './files/home';
import Skills from './files/skills';
import About from './files/about';
import Contact from './files/contact';
import Project from './files/project';
import Navbar from 'creat-react-nav/dist/navSnack';

const App=()=>{
return (
<Router>
    <Navbar links={[
      {'link':"/",'title':"Home"},
      {'link':"/about",'title':"About"},
      {'link':"/skills",'title':"Skills"},
      {'link':"/project",'title':"Projects"},
      {'link':"/contact",'title':"Contact"}
    ]}/>

    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/skills" component={Skills}/>
      <Route path="/project" component={Project}/>
      <Route path="/about" component={About}/>
      <Route path="/contact" component={Contact}/>
    </Switch>
</Router>
 );
}

export default App;

```

## License
[MIT](https://choosealicense.com/licenses/mit/)