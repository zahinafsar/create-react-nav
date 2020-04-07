## [Create-React-Nav]((create-react-nav)) &middot; React Navigation Bar Creator &middot; ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg) ![npm version](https://img.shields.io/npm/v/create-react-nav)

Create your react app menu bar more easily with ```create-react-nav```

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install create-react-nav.

```bash
npm install create-react-nav
```

## Usages

## Step-1 (Import the Library)

```javascript
import Navbar from 'create-react-nav/nav/<...nav_name....>';
```
## Step-2 (Use the Component)

```javascript
<Navbar links={[
  [ "<...link_path...>" , "<...nav_title...>" ],
  [ "<...link_path...>" , "<...nav_title...>" ],
  ...................................
  ]}
/>
```
## Styling (optional)

## Add Nav Style

```javascript
<Navbar navBarStyle={<...style...>} links={[
  [ "<...link_path...>" , "<...nav_title...>" ],
  [ "<...link_path...>" , "<...nav_title...>" ],
  ...................................
  ]}
/>
```
## Add Nav Items Style

```javascript
<Navbar navItemStyle={<...style...>} links={[
  [ "<...link_path...>" , "<...nav_title...>" ],
  [ "<...link_path...>" , "<...nav_title...>" ],
  ...................................
  ]}
/>
```
## Add Logo Img

```javascript
<Navbar logoImg="<...source...>" links={[
  [ "<...link_path...>" , "<...nav_title...>" ],
  [ "<...link_path...>" , "<...nav_title...>" ],
  ...................................
  ]}
/>
```
## Add Text Logo

```javascript
<Navbar logoTxt="<...name...>" links={[
  [ "<...link_path...>" , "<...nav_title...>" ],
  [ "<...link_path...>" , "<...nav_title...>" ],
  ...................................
  ]}
/>
```
## Add Text Logo Style

```javascript
<Navbar logoTxt="<...name...>" textStyle={<...style...>} links={[
  [ "<...link_path...>" , "<...nav_title...>" ],
  [ "<...link_path...>" , "<...nav_title...>" ],
  ...................................
  ]}
/>
```
## Api

| Api | Type | Description |
|-------|-----------| ---------------------|
| links | Array of multiple Array | Required two properties,first one is the link of file path and the second one is the title for the page  |
| navBarStyle | Object | Defines the style for the Navbar |
| navItemStyle | Object | Defines the style for eatch item of the Navbar |
| logoImg | String | Address of you logo |
| logoTxt | String | Text logo this basically refers your website name |
| textStyle | Object | Defines the style of the text logo |

## Example

```javascript
import Reactfrom 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './files/home';
import Skills from './files/skills';
import About from './files/about';
import Contact from './files/contact';
import Project from './files/project';
import Navbar from 'create-react-nav/nav/navSnack';

const App=()=>{
  const nav = {
    backgroundColor: 'red'
  }
  const item = {
    color: 'blue'
  }
  const text = {
    color: 'red'
  }
return (
<Router>
    <Navbar logoTxt="hello" textStyle={text} navBarStyle={nav} navItemStyle={item} links={[
      ["/","Home"],
      ["/about","About"],
      ["/skills","Skills"],
      ["/project","Projects"],
      ["/contact","Contact"]
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
## Note : [``This will not work outside or without the BrowserRouter``]

## License
[MIT](https://choosealicense.com/licenses/mit/)