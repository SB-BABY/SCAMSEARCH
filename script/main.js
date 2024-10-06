// ищем кнопк
const navBtn = document.querySelector('.nav-icon-btn');
// ищем иконку кнопки
const navIcon = document.querySelector('.nav-icon');
// Ищем контейнер header Nav
const nav = document.querySelector('.header__list')

navBtn.onclick = function () {
    navIcon.classList.toggle('nav-icon--active');
    nav.classList.toggle('header__top-row-mobile');
    document.body.classList.toggle('no-scroll')
}


// Добалвение класса для подчеркивания
let headerLink = document.querySelectorAll('.header__link');

for (let i = 0; i < headerLink.length; i++){
    headerLink[i].addEventListener('click', function(){

        if(headerLink[i].classList.contains('active')){
            headerLink[i].classList.remove('active');
        } else {
            headerLink[i].classList.add('active');
        };
    });
}
