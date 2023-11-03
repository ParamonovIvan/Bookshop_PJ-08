const menuBuger = () => {
  const burger = document.querySelector(".header__nav-burger");
  const menu = document.querySelector(".nav__hidden");
  burger.addEventListener("click", () => {
    let menuHeight = menu.style.height;
    if (menuHeight == "0px" || !menuHeight) {
      menu.style.height = "90px";
    } else {
      menu.style.height = "0";
    }
    burger.classList.toggle("header__nav-burger-active");
  });
};

menuBuger();

export {menuBuger};