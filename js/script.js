//menu
const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu__item__link'),
    body = document.querySelector('body'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
        body.classList.toggle('body_fixed');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
            body.classList.toggle('body_fixed');
        });
    });

    //маска для телефона

let element = document.querySelectorAll('.phone');
let maskOptions = {
    mask: '0(000)000-00-00'
};
for (let i = 0; i < element.length; i++) {
    let mask = IMask(element[i], maskOptions);
}

//modal
$('.consult').on('click', function(){
    $('.overlay, .modal').fadeIn();
});
$('.modal__close, .overlay').on('click', function(){
    $('.overlay, .modal').fadeOut();
});