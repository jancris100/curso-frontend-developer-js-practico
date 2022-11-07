const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const productDetail = document.querySelector(".product-detail");

menuEmail.addEventListener("click", toggleMenu);
menuHamMenu.addEventListener("click", toggleMenuMobile);
menuCarritoIcon.addEventListener("click", toggleMenuProduct);

function toggleMenu() {
    const isMenuEmailclosed = productDetail.classList.contains("inactive");
    if(!isMenuEmailclosed){
        menuEmail.classList.add("inactive")
    }

  desktopMenu.classList.toggle("inactive");
}

function toggleMenuMobile() {
  const isMenuAsideClosed = productDetail.classList.contains("inactive");

  if (!isMenuAsideClosed) {
    productDetail.classList.add("inactive");
  }
  mobileMenu.classList.toggle("inactive");
}

function toggleMenuProduct() {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  }
  productDetail.classList.toggle("inactive");
}
