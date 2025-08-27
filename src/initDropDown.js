export default function initDropDown(
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
