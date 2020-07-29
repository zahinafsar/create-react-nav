## [Create-React-Nav]((create-react-nav)) &middot; React Navigation Bar Creator &middot; ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg) ![npm version](https://img.shields.io/npm/v/create-react-nav)

Create your react app menu bar more easily with ```create-react-nav```

## Why ```create-react-nav``` 
1. You don't need extra dependencies like react-router-dom.
2. You don't need to write extra code.
3. Getting more comfort with the navigation system
4. Super easy to maintain.

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
  [ "...ROUTER_PATH..." , "...PAGE_NAME..." , ...COMPONENT_NAME... ],
  [ "...ROUTER_PATH..." , "...PAGE_NAME..." , ...COMPONENT_NAME... ]
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
| links | Array of multiple Array | Required three properties,first one is the link of file path, second one is the title for the page and thired one is the component |
| triggerIcon | String | Icon of navigaton bar trigger |
| logoImg | String | Address of you logo |
| logoTxt | String | Text logo this basically refers your website name |

## Styling (optional) -- Under Development
### Class Names to customize or over write the styles given from create-react-nav.

| Class Name | Description |
|-------|-----------|
| .Navbar | Style of the navigation bar |
| .Appbar | Style of the app bar in mobile mode |
| .NavItems | Style of all the  links |
| .selected | Style Of the active navigation link |
| .navbar span | Style of Text logo |
| .selected::after | Style of active page indicator |
| .NavItems::after | Style of all page indicator (This will be hiden) |

>Note : 
>1. You may have to use "!important" keyword for most of the style attributes.
>2. To change the style for mobile screen use max-width to 700px.


## Example (CSS)

```css
.Navbar{
  background-color: white !important;
}

.NavItems::after{
  background-color: red !important;
}

@media only screen and (max-width: 700px){
  .selected{
    color : white !important;
    background-color: red !important
  }
}
```


## Example (JSX)

```javascript
import Reactfrom 'react';
import Home from './files/home';
import About from './files/about';
import Navbar from 'create-react-nav/nav/navSnack';

const App=()=>{

  const routes = [
      ["/", "Home", Home],
      ["/about", "About", About]
    ]

return (
    <Navbar logoTxt="hello" links={routes}/>
 );
}

export default App;

```
>Note : This will not work outside or without the BrowserRouter

## License
[MIT](https://choosealicense.com/licenses/mit/)