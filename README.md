# dropdown-menus

Simple and customizable dropdown menu utility in JS.
Supports both **click** and **hover** triggers, and works with multiple dropdowns on the same page.

## Installation

```bash
npm install fromscode-dropdown-menus
```

## Usage

### 1. Consider this is your sample HTML:

```html
<body>
  <div class="dropdown">
    <button class="dropdown-button">Click me</button>
    <ul class="dropdown-menu none">
      <li><a href="#">Item 1</a></li>
      <li><a href="#">Item 2</a></li>
      <li><a href="#">Item 3</a></li>
    </ul>
  </div>
</body>
```

### 2. Add this style:

```css
.none {
  display: none;
}
```

### 3. Initialize dropdown in JS:

```js
import initDropDown from "dropdown-menus"; // import
import './styles/styles.css' // or wherever you defined .none style

const btn = document.querySelector(".dropdown-button");
const menu = document.querySelector(".dropdown-menu");

// Click based dropdown
initDropDown(btn, "click", menu);

// Hover based dropdown
initDropDown(btn, "hover", menu);
```

## API

```js
initDropDown(button, trigger, menu, hiddenClass);
```

- `button`: DOM element that triggers the dropdown
- `trigger`: Currently accepts only two options : `'click'` or `'hover'`
- `menu`: DOM element that will be shown or hidden
- `hiddenClass`(optional, default = `'none'`): CSS class used to hide the menu

## Customization

### 1. You can control the visibility by customizing the the `hiddenClass`(default = `'none'`).

Example CSS:

```css
.none {
  /* display: none; */
  opacity: 0.1;
}
```

### 2. Adding additional listeners

```js
const btn = document.querySelector(".dropdown-button");
const menu = document.querySelector(".dropdown-menu");

/* Add a listener to hide drop-down menu if a random place on the document is clicked.
By default, the menu will be hidden when the btn is clicked again (for click-type dropdowns)*/
document.addEventListener("click", (event) => {
  if (!button.contains(event.target) && !menu.contains(event.target)) {
    menu.classList.add("none");
  }
});
```
