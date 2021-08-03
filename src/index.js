import './sass/main.scss';



const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

const themeSwitcher = document.querySelector('#theme-switch-toggle');

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