export default class Slider {
  constructor(id, transitionVal) {
    this.id = id;
    this.transitionVal = transitionVal;
  }

  initialize() {
    const cardsContainer = document.getElementById(this.id);
    const btns = cardsContainer.nextElementSibling.children[0];
    const btnsArray = Array.from(btns.children);
    const percentage = this.transitionVal;
    let idTracker = 0;
    btnsArray.forEach(btn => {
      btn.dataset.id = idTracker;
      btn.id = `slider-btn-${idTracker++}`;
      btn.addEventListener('click', function () {
        cardsContainer.style.transform = `translateX(-${percentage * this.dataset.id}%)`;
        btnsArray.forEach(btn => {
          btn.dataset.id === this.dataset.id ? btn.style.background = `rgba(255, 143, 0, 1.0)` : btn.style.background = `transparent`;
        })
      })
    })
  }
}