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
## Styling (optional)

### Add Nav Style

```javascript
<Navbar navBarStyle={...YOUR_CUSTOM_STYLE_FOR_NAV_BAR...} links={routes}/>
```
### Add Nav Items Style

```javascript
<Navbar navItemStyle={...YOUR_CUSTOM_STYLE_FOR_NAV_ITEMS...} links={routes}/>
```
### Add Trigger Icon

```javascript
<Navbar triggerIcon="blackCircle" links={routes}/>
```
### Add Logo Image

```javascript
<Navbar logoImg="...SOURCE_PATH_OF_YOUR_LOGO..." links={routes}/>
```
### Add Text Logo

```javascript
<Navbar logoTxt="...USE_ANY_TEXT_AS_LOGO..." links={routes}/>
```
### Add Text Logo Style

```javascript
<Navbar logoTxt="...USE_ANY_TEXT_AS_LOGO..." logoTxtStyle={...YOUR_CUSTOM_STYLE_FOR_TEXT_LOGO...} links={routes}/>
```
## Api

| Api | Type | Description |
|-------|-----------| ---------------------|
| links | Array of multiple Array | Required two properties,first one is the link of file path and the second one is the title for the page  |
| navBarStyle | Object | Defines the style for the Navbar |
| navItemStyle | Object | Defines the style for eatch item of the Navbar |
| triggerIcon | String | Icon of navigaton bar trigger |
| logoImg | String | Address of you logo |
| logoTxt | String | Text logo this basically refers your website name |
| logoTxtStyle | Object | Defines the style of the text logo |

## Trigger Icons

### Some integrated Trigger Icon

 * whiteCircle
 * BlackCircle
 * whiteLine
 * blackLine

>Note : You Can Use Your Own Custom Icon By Adding The Source

## Example

```javascript
import Reactfrom 'react';
import {BrowserRouter} from 'react-router-dom';
import Home from './files/home';
import About from './files/about';
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
  const routes = [
      ["/","Home"],
      ["/about","About"]
    ]
return (
<BrowserRouter>
    <Navbar logoTxt="hello" logoTxtStyle={text} navBarStyle={nav} navItemStyle={item} links={routes}/>
</BrowserRouter>
 );
}

export default App;

```
>Note : This will not work outside or without the BrowserRouter

## License
[MIT](https://choosealicense.com/licenses/mit/)