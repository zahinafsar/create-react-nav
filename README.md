## [Create-React-Nav](<(create-react-nav)>) &middot; React Navigation Bar Creator &middot; ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg) ![npm version](https://img.shields.io/npm/v/create-react-nav)

Create your react app menu bar more easily with `create-react-nav`

## Why `create-react-nav`

1. You don't need extra dependencies like react-router-dom.
2. You don't need to write extra code.
3. Getting more comfort with the navigation system
4. Super easy to maintain.

## Limitation of `create-react-nav`

1. It doesn't support subnavigation.
2. It doesn't have NEXT.JS support.

[example:](https://zahin.netlify.app/)

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install create-react-nav.

```bash
npm install create-react-nav
```

## Usages

### Step-1 (Import the Library)

```javascript
import Navbar from "create-react-nav";
```

### Step-2 (Use the Component)

```javascript
const links = [
  [ "...ROUTER_PATH..." , "...PAGE_NAME..." , ...COMPONENT_NAME... ],
  [ "...ROUTER_PATH..." , "...PAGE_NAME..." , ...COMPONENT_NAME... ]
];

<Navbar routes={links}/>
```

## Basic Configuration (optional)

### Add Trigger Icon

####This is the button which works as a trigger to open hidden navigation bar when you are using mobile or smaller devices.

```javascript
<Navbar triggerIcon="blackCircle" routes={links} />
```

### Some integrated Trigger Icon

- whiteCircle
- blackCircle
- whiteLine
- blackLine

> Note : You Can Use Your Own Custom Icon By Adding The Source

### Add Logo Image

##### This is your app logo which will appear on the top of the navigation bar

```javascript
<Navbar logoImg="...SOURCE_PATH_OF_YOUR_LOGO..." routes={links} />
```

### Add Text Logo

##### This is your app name which will appear on the top of the navigation bar

```javascript
<Navbar logoTxt="...USE_ANY_TEXT_AS_LOGO..." routes={links} />
```

## Api

| Api         | Type                     | Description                                                                                                                |
| ----------- | ------------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| routes      | Array of multiple Arrays | Required three properties first one is the route path, second one is the title for the page and third one is the component |
| triggerIcon | String                   | trigger icon for the navigaton bar (mobile device)                                                                         |
| logoImg     | String                   | Source link of your logo                                                                                                   |
| logoTxt     | String                   | Text logo which basically refers your website name                                                                         |
| yToggle     | String                   | boolean as string to toggle the nav by y axis                                                                              |

## Styling (optional)

### Class Names to customize or over write the styles given from create-react-nav.

| Class Name       | Description                                                          |
| ---------------- | -------------------------------------------------------------------- |
| .Navbar          | Style of the navigation bar                                          |
| .Appbar          | Style of the app bar in mobile mode                                  |
| a.NavItems       | Style of all the links (Don't need to use '!important')              |
| a.selected       | Style Of the active navigation link (Don't need to use '!important') |
| .Appbar span     | Style of Text logo                                                   |
| .selected::after | Style of active page indicator (For Desktop mode)                    |
| .NavItems::after | Style of all page indicator                                          |

### How does active class workes in create-react-nav?

Basically the ".NavItems::after" has 0% of width. When you click on a Nav we add "selected" class and then it's got 100% width and you see the indicator is apearing.

> Note :
>
> 1.  You may have to use "!important" keyword for most of the style attributes.
> 2.  To change the style for mobile screen use max-width to 700px.

## Example (CSS)

```css
.Navbar {
  background-color: white !important;
}

.NavItems::after {
  background-color: red !important;
}

@media only screen and (max-width: 700px) {
  .selected {
    color: white !important;
    background-color: red !important;
  }
}
```

## Example (JSX)

```javascript
import React from "react";
import Home from "./files/home";
import About from "./files/about";
import Navbar from "create-react-nav";

const App = () => {
  const links = [
    ["/", "Home", Home],
    ["/about", "About", About],
  ];

  return <Navbar logoTxt="hello" yToggle="true" routes={links} />;
};

export default App;
```

> Note : Place the Navbar component where you want to do page routing.

## License

[MIT](https://choosealicense.com/licenses/mit/)
