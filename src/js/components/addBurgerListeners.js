function addBurgerListeners() {
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".header__nav .nav__list");
  const menuLinks = menu.querySelectorAll(".nav__link");

  burger.addEventListener("click",
    function () {
      burger.classList.toggle("burger_active");

      menu.classList.toggle("nav__list_active");

      document.body.classList.toggle("stop-scroll");
    })

  menuLinks.forEach(function (el) {
    el.addEventListener("click",
      function () {
        burger.classList.remove("burger_active");
        menu.classList.remove("nav__list_active");
        document.body.classList.remove("stop-scroll");
      })
  });
}
