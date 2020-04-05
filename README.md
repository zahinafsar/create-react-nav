## [Create-React-Nav]((create-react-nav)) &middot; React Navigation Bar Creator &middot; ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg) ![npm version](https://img.shields.io/npm/v/create-react-nav)

Create your react app menu bar more easily with ```create-react-nav```

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install create-react-nav.

```bash
npm install create-react-nav
```

## Usage
## Step-1 (Import the library)

```javascript
import Navbar from 'creat-react-nav/nav/<...nav_name....>';
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
## Step-2 (Add nav style)-optional

```javascript
<Navbar navBarStyle={<...style...>} links={[
  {'link':"<...link_path...>",'title':"<...nav_title...>"},
  {'link':"<...link_path...>",'title':"<...nav_title...>"},
  ...................................
  ]}
/>
```
## Step-2 (Add nav items style)-optional

```javascript
<Navbar navItemStyle={<...style...>} links={[
  {'link':"<...link_path...>",'title':"<...nav_title...>"},
  {'link':"<...link_path...>",'title':"<...nav_title...>"},
  ...................................
  ]}
/>
```
## Api

| Api | Type | Description |
|-------|-----------| ---------------------|
| links |Object| Required two properties,first one is the link of file path and the second one is the title for the page  |
| navBarStyle | Object | This refers a style for the main div of the navbar |
| navItemStyle | Object | This refers a style for eatch item of the navbar |

## Example

```javascript
import Reactfrom 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './files/home';
import Skills from './files/skills';
import About from './files/about';
import Contact from './files/contact';
import Project from './files/project';
import Navbar from 'creat-react-nav/nav/navSnack';

const App=()=>{
  const nav = {
    backgroundColor: 'red'
  }
  const item = {
    color: 'blue'
  }
return (
<Router>
    <Navbar navBarStyle={nav} navItemStyle={item} links={[
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