let nav__button = document.getElementsByClassName("nav__button")[0];
let nav = document.getElementsByClassName("nav")[0];
/* NAV BUTTON ONCLICK EVENT */

function exp() {
       if(nav.style.display === "none") 
              nav.style.display = "flex";
       else 
              nav.style.display = "none";
}

nav__button.addEventListener("click", exp);
