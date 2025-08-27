import "./styles/styles.css";
import "./styles/reset.css";

function initDropDown(
  button,
  action,
  menu,
  hiddenClass = "none",
) {
  if (!button || !action || !menu) {
    console.log("Missing / Inaccurate parameters");
    return;
  }

  if (action === "click") {
    button.addEventListener(action, () => {
      menu.classList.toggle(hiddenClass);
    });
  }

  if (action === "hover") {
    const container = button.parentElement;
    container.addEventListener("mouseover", () => {
      menu.classList.remove(hiddenClass);
    });
    container.addEventListener("mouseleave", () => {
      menu.classList.add(hiddenClass);
    });
  }
}


const btnClick = document.querySelector(".dropdown-click");
const menuClick = document.querySelector(".dropdown-menu");

initDropDown(btnClick, "click", menuClick);

const btnHover = document.querySelector(".dropdown-hover");
const menuHover = document.querySelector(".dropdown-2 .dropdown-menu");

initDropDown(btnHover, "hover", menuHover);

export default initDropDown;
