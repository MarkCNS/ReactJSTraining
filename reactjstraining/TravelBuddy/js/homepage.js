const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".main-menu");
  const button = document.querySelector(".btn");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
  });
  burger.addEventListener("click", () => {
    button.classList.toggle("nav-active");
  });
};

navSlide();
