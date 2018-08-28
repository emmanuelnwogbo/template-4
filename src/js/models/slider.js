export default class Slider {
  constructor(id, transitionVal) {
    this.id = id;
    this.transitionVal = transitionVal;
    this.cardsContainer = document.getElementById(this.id);
    this.btns = this.cardsContainer.nextElementSibling.children[0];
    this.idTracker = 0;
  }

  initialize() {
    if (window.matchMedia('(max-width: 800px)').matches) {
      return this.smallerScreenInit();
    }

    if (window.matchMedia('(max-width: 998px)').matches) {
      return this.smallScreenInit();
    }

    const cardsSlide = this.cardsContainer;
    const btnsArray = Array.from(this.btns.children);
    const percentage = this.transitionVal;

    btnsArray.forEach(btn => {
      btn.dataset.id = this.idTracker;
      btn.id = `slider-btn-${this.idTracker++}`;
      btn.addEventListener('click', function () {
        cardsSlide.style.transform = `translateX(-${percentage * this.dataset.id}%)`;
        btnsArray.forEach(btn => {
          btn.dataset.id === this.dataset.id ? btn.style.background = `rgba(255, 143, 0, 1.0)` : btn.style.background = `transparent`;
        })
      })
    })
  }

  smallScreenInit() {
    const cardsSlide = this.cardsContainer;
    const markup = `<li class="clients__btn-listitem"></li>`;

    this.btns.insertAdjacentHTML(`beforeend`, markup);
    const btnsArray = Array.from(this.btns.children);
    const smallScreenPerc = this.transitionVal + 4;

    btnsArray.forEach(btn => {
      btn.dataset.id = this.idTracker;
      btn.id = `slider-btn-${this.idTracker++}`;
      btn.addEventListener('click', function () {
        cardsSlide.style.transform = `translateX(-${smallScreenPerc * this.dataset.id}%)`;
        btnsArray.forEach(btn => {
          btn.dataset.id === this.dataset.id ? btn.style.background = `rgba(255, 143, 0, 1.0)` : btn.style.background = `transparent`;
        })
      })
    })
  }

  smallerScreenInit() {

  }
}