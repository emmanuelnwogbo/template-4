import '../scss/main.scss';
import Slider from './models/slider';
import Switch from './models/switch';
import img from '../imgs/project0.jpg';

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

const portfolioCards = [{
    id: 'portfolio-1',
    img: img,
    category: 'branding',
    name: 'Project Caption'
  },
  {
    id: 'portfolio-2',
    img: img,
    category: 'photography',
    name: 'Project Caption'
  },
  {
    id: 'portfolio-3',
    img: img,
    category: 'seo',
    name: 'Project Caption'
  },
  {
    id: 'portfolio-4',
    img: img,
    category: 'branding',
    name: 'Project Caption'
  },
  {
    id: 'portfolio-5',
    img: img,
    category: 'webdevelopment',
    name: 'Project Caption'
  },
  {
    id: 'portfolio-6',
    img: img,
    category: 'seo',
    name: 'Project Caption'
  },
  {
    id: 'portfolio-7',
    img: img,
    category: 'webdevelopment',
    name: 'Project Caption'
  }
]

const btnLabels = [
  'all',
  'webdevelopment',
  'branding',
  'photography',
  'seo'
];

const portfolioSwitch = new Switch('portfolio__container', 'port_btns', 'port_cards');
portfolioSwitch.initialize(btnLabels, portfolioCards);