function menuShow() {
    let menuMobile = document.querySelector('.menu-mobile');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "../../../landingpage.centextecnologia.com.br/assets/images/menu.png";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "../../../landingpage.centextecnologia.com.br/assets/images/closed.png";

    }
}