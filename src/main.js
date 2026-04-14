import './style.css'
import { getTime } from './time'
import { getProjects } from './components/projects';
import { getHeader } from './components/header';
import { loadMainPage } from './components/mainpage';
import { getFooter } from './components/footer';
import { initRouter } from './router';

const main = document.querySelector("main")

function renderHeader() {
  getHeader();
}

function renderMain() {
  main.appendChild(loadMainPage());
}


function renderFooter() {
  getFooter();
}

function init() {
  renderHeader();
  renderMain();
  renderFooter();
}



document.addEventListener("DOMContentLoaded", () => {
  init();
  initRouter();
  getTime();
  setInterval(() => {
    getTime()
  }, 10 * 1000);
  getProjects();

})








