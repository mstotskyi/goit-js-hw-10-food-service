import menuCardTpl from './templates/template.hbs';
import menuArr from './menu.json'
import './sass/main.scss';

const themeSwitcher = document.querySelector('#theme-switch-toggle');
const menu = document.querySelector('.js-menu');

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

checkTheme ()

themeSwitcher.addEventListener("change", theme);

function checkTheme () {

    let savedTheme = localStorage.getItem('bodyTheme')
 if (savedTheme){
    document.body.classList.add(savedTheme);
    if(savedTheme === Theme.DARK) 
    {themeSwitcher.checked = true};//Свойство checked false по умолчанию. Нет необходимости 
    // явно его прописывать. Указывается только если меняется на true.
    }
else {
    document.body.classList.add(Theme.LIGHT);
    }
}

function theme (evt) {
    if (evt.target.checked){
        document.body.classList.replace(Theme.LIGHT, Theme.DARK);
        localStorage.setItem('bodyTheme', Theme.DARK)
            }
    else{
        document.body.classList.replace(Theme.DARK, Theme.LIGHT)
        localStorage.setItem('bodyTheme', Theme.LIGHT)
    }
}

const menuCard = createMenuCard(menuArr);
menu.insertAdjacentHTML('beforeend', menuCard);

function createMenuCard (menuArr) {
return menuCardTpl (menuArr);
}