import card from './menu.json';
import templateFunction from './template/template.hbs';
/************************* TEMPLATE MARKUP ************************************************/
const menuList = document.querySelector('.js-menu');
const templateMurkup = createTemplateMarkup(card);
menuList.innerHTML = templateMurkup;

function createTemplateMarkup(card) {
  return card.map(templateFunction).join('');
}
/********************************** TOGGLE Theme *****************************************/
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
document.body.classList.add(Theme.LIGHT);

const toggle = document.querySelector('.theme-switch__toggle');
toggle.addEventListener('change', toggleEvt);

function toggleEvt(evt) {
  if (evt.currentTarget.checked) {
    localStorage.setItem('theme', Theme.DARK);
  } else {
    localStorage.setItem('theme', Theme.LIGHT);
  }
  document.body.classList.toggle(Theme.DARK);
}
function themeCheck() {
  const themeToggleValue = localStorage.getItem('theme');
  if (themeToggleValue === Theme.DARK) {
    toggle.checked = true;
    document.body.classList.add(Theme.DARK);
  } else {
    document.body.classList.add(Theme.LIGHT);
  }
}
themeCheck();
