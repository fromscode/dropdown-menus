import "./styles/styles.css";
import "./styles/reset.css";

import initDropDown from "./initDropDown";

const btnClick = document.querySelector(".dropdown-click");
const menuClick = document.querySelector(".dropdown-menu");

initDropDown(btnClick, "click", menuClick);

const btnHover = document.querySelector(".dropdown-hover");
const menuHover = document.querySelector(".dropdown-2 .dropdown-menu");

initDropDown(btnHover, "hover", menuHover);
