## [Create-React-Nav]((create-react-nav)) &middot; React Navigation Bar Creator &middot; ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg) ![npm version](https://img.shields.io/npm/v/create-react-nav)

Create your react app menu bar more easily with ```create-react-nav```

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install create-react-nav.

```bash
npm install create-react-nav
```

## Usages

### Step-1 (Import the Library)

```javascript
import Navbar from 'create-react-nav/nav/...NAV_NAME...';
```
### Step-2 (Use the Component)

```javascript
const routes = [
  [ "...ROUTER_PATH..." , "...PAGE_NAME..." ],
  [ "...ROUTER_PATH..." , "...PAGE_NAME..." ]
];

<Navbar links={routes}/>
```
## Basic Configuration (optional)

### Add Trigger Icon
####This is the button which works as a trigger to open hidden navigation bar when you are using mobile or smaller devices.

```javascript
<Navbar triggerIcon="blackCircle" links={routes}/>
```
### Some integrated Trigger Icon

 * whiteCircle
 * BlackCircle
 * whiteLine
 * blackLine

>Note : You Can Use Your Own Custom Icon By Adding The Source

### Add Logo Image
#### This is your app logo which will appear on the top of the navigation bar

```javascript
<Navbar logoImg="...SOURCE_PATH_OF_YOUR_LOGO..." links={routes}/>
```
### Add Text Logo
#### This is your app name which will appear on the top of the navigation bar

```javascript
<Navbar logoTxt="...USE_ANY_TEXT_AS_LOGO..." links={routes}/>
```
## Api

| Api | Type | Description |
|-------|-----------| ---------------------|
| links | Array of multiple Array | Required two properties,first one is the link of file path and the second one is the title for the page  |
| triggerIcon | String | Icon of navigaton bar trigger |
| logoImg | String | Address of you logo |
| logoTxt | String | Text logo this basically refers your website name |

## Styling (optional) -- Under Development
### Class Names to customize or over write the styles given from create-react-nav.

| Class Name | Description |
|-------|-----------|
| .navbar | Style of the navigation bar |
| .NavItems | Style of all the  links |
| .selected | Style Of the active navigation link |
| .navbar span | Style of Text logo |

>Note : You may have to use !important for most of the style attribute.

>Note : To change the style Of the active navigation link for mobile screen use the following code
```css
@media only screen and (max-width: 700px){
  .selected{
    .....
  }
}
```


## Example

```javascript
import Reactfrom 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './files/home';
import About from './files/about';
import Navbar from 'create-react-nav/nav/navSnack';

const App=()=>{

  const routes = [
      ["/","Home"],
      ["/about","About"]
    ]

return (
  <BrowserRouter>
      <Navbar logoTxt="hello" links={routes}/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
      </Switch>
  </BrowserRouter>
 );
}

export default App;

```
>Note : This will not work outside or without the BrowserRouter

## License
[MIT](https://choosealicense.com/licenses/mit/)