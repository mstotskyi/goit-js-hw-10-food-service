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
 console.log(savedTheme);
if ( savedTheme !== null){
    document.body.classList.add(savedTheme);
    if(savedTheme === Theme.DARK)
    {themeSwitcher.checked = true};
    }
else {
    document.body.classList.add(Theme.LIGHT);
    themeSwitcher.checked = false;
    console.log(savedTheme);
}
}

function theme (evt) {
    console.log(evt.target.checked);
    if (evt.target.checked){
        console.log(`темна тема`);
        document.body.classList.replace(Theme.LIGHT, Theme.DARK);
        localStorage.setItem('bodyTheme', Theme.DARK)
            }
    else{
        console.log(`світла тема`);
        document.body.classList.replace(Theme.DARK, Theme.LIGHT)
        localStorage.setItem('bodyTheme', Theme.LIGHT)
    }
}

const menuCard = createMenuCard(menuArr);
menu.insertAdjacentHTML('beforeend', menuCard);

function createMenuCard (menuArr) {
return menuCardTpl (menuArr);
}