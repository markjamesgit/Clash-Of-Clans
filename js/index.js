document.addEventListener("DOMContentLoaded", function() {
    const burgerMenu = document.getElementById('burger-menu');
    const menus = document.getElementById('menus');

    burgerMenu.addEventListener("click", function() {
        menus.classList.toggle("show");
    });
});
