let body = document.querySelector('body');
body.style.backgroundColor = prompt('Какой будет фон у страницы?');

let pageTxt = document.querySelector('.page');
pageTxt.style['color'] = prompt('Какой будет цвет текста на странице?');

let spanName = document.querySelector('span');
spanName.innerHTML = prompt('Как зовут человека, который вас вдохновляет?');

let image = document.querySelector('img');
image.setAttribute('src',prompt('Введите адрес картинки'));

let text = document.querySelector('.shortBio');
text.innerHTML = prompt('Введите текст страницы');
text.className += ' animated';


