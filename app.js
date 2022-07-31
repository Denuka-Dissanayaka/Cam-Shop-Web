const img = document.querySelector('.show-case-img img');
const li = document.querySelectorAll('.show-case-img ul li');
const ul = document.querySelector('.show-case-img ul');
const text = document.querySelector('.show-case-text');

li[1].addEventListener('click', () => {
    img.setAttribute('src', './img/camera-soon-v2 1.png');
    img.classList.add('img-class');
    text.classList.add('text-class');
    ul.classList.add('ul-class');
    li[1].style.color = '#f54538';
    li[0].style.color = '#000000'
})

li[0].addEventListener('click', () => {
    img.setAttribute('src', './img/camera 1.png');
    img.classList.remove('img-class');
    text.classList.remove('text-class');
    ul.classList.remove('ul-class');
    li[0].style.color = '#f54538';
    li[1].style.color = '#000000';
})