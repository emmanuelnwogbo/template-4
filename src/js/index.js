import '../scss/main.scss';
import Slider from './models/slider';
import Switch from './models/switch';
import SideNav from './models/sideNav';

import img1 from '../imgs/project0.jpg';
import img2 from '../imgs/project1.jpg';
import img3 from '../imgs/project2.jpg';
import img4 from '../imgs/project3.jpg';
import img5 from '../imgs/project4.jpg';
import img6 from '../imgs/project5.jpg';
import img7 from '../imgs/project6.jpg';

SideNav();

const clientsSlider = new Slider('clients__content', 96);
clientsSlider.initialize();

const portfolioCards = [{
    id: 'portfolio-1',
    img: img1,
    category: 'branding',
    name: 'Project Caption'
  },
  {
    id: 'portfolio-2',
    img: img2,
    category: 'photography',
    name: 'Project Caption'
  },
  {
    id: 'portfolio-3',
    img: img3,
    category: 'seo',
    name: 'Project Caption'
  },
  {
    id: 'portfolio-4',
    img: img4,
    category: 'branding',
    name: 'Project Caption'
  },
  {
    id: 'portfolio-5',
    img: img5,
    category: 'webdevelopment',
    name: 'Project Caption'
  },
  {
    id: 'portfolio-6',
    img: img6,
    category: 'seo',
    name: 'Project Caption'
  },
  {
    id: 'portfolio-7',
    img: img7,
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