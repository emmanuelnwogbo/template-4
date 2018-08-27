import '../scss/main.scss';
import Slider from './models/slider';

const container = document.getElementById('container');
const sideNavCheck = document.getElementById('container__sidenav-check');
const sideNavBtn = document.getElementById('container__sidenav-btndiv');

sideNavBtn.addEventListener('click', function () {
  sideNavCheck.checked = true;
})

container.addEventListener('click', function () {
  sideNavCheck.checked = false;
})

const clientsSlider = new Slider('clients__content', 96);
clientsSlider.initialize();