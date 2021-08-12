const menu = {
  class: ".principal",
  activateMenu() {
    const menuElement = document.querySelector(this.class);
    menuElement.classList.add("active");
  },
};

const body = document.querySelector("body");
body.classList.add("js");


