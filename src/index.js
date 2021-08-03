import './sass/main.scss';



const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

const themeSwitcher = document.querySelector('#theme-switch-toggle');






themeSwitcher.addEventListener("change", theme);



function theme (evt) {
    console.log(evt.target.checked);
    if (evt.target.checked){
        console.log(`темна тема`);
        localStorage.setItem('bodyTheme', "dark")
        document.body.classList.add(Theme.DARK);
            }
    else{
         console.log(`світла тема`);
         localStorage.setItem('bodyTheme', "light")
         document.body.classList.replace(Theme.DARK, Theme.LIGHT)
    
}
    
}