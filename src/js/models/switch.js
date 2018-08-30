import Gallery from './gallery';

export default class Switch {
  constructor(topPar, btnsPar, cardsPar) {
    this.topPar = document.getElementById(topPar);
    this.btnsPar = document.getElementById(btnsPar);
    this.cardsPar = document.getElementById(cardsPar);
  }

  initialize(labels, cards) {
    let markup;
    let portGallery;
    const cardsClass = '.portfolio__card';
    labels.forEach(label => {
      markup = `<li class="portfolio__container-listitem" data-itemid=${label}>${label}</li>`;
      this.btnsPar.insertAdjacentHTML(`beforeend`, markup);
    });

    cards.forEach(card => {
      markup = `
        <div class="portfolio__card" data-itemid=${card.category} id="${card.id}">
          <figure class="portfolio__card-figure">
            <img src="${card.img}" alt="" class="portfolio__card-img">
            <p class="portfolio__card-category">${card.category}</p>
            <p class="portfolio__card-name">${card.name}</p>
          </figure>
      </div>`;
      this.cardsPar.insertAdjacentHTML(`beforeend`, markup);
    });
    portGallery = new Gallery(cardsClass);
    portGallery.initialize();
    this.switcher('.portfolio__container-listitem', cardsClass, cards);
  }

  switcher(btnClassName, cardClassName, cardsArr) {
    const btns = document.querySelectorAll(btnClassName);
    const cardsParent = this.cardsPar;
    let cards;
    let markup;
    let currentBtn;
    let portGallery;

    function triggerSwitch() {
      cards = document.querySelectorAll(cardClassName);
      cards.forEach(card => {
        card.style.transform = `scale(0)`
      })
      setTimeout(function () {
        while (cardsParent.firstChild) {
          cardsParent.removeChild(cardsParent.firstChild);
        }
      }, 300);
    }

    function insertCard(itemid) {
      setTimeout(() => {
        cardsArr.forEach(card => {
          if (card.category === itemid) {
            markup = `
              <div class="portfolio__card" data-itemid=${card.category} id="${card.id}">
                <figure class="portfolio__card-figure">
                  <img src="${card.img}" alt="" class="portfolio__card-img">
                  <p class="portfolio__card-category">${card.category}</p>
                  <p class="portfolio__card-name">${card.name}</p>
                </figure>
              </div>`;
            cardsParent.insertAdjacentHTML(`beforeend`, markup);
            cards = document.querySelectorAll(cardClassName);
            cards.forEach(card => {
              card.style.transform = `scale(0)`;
              setTimeout(function () {
                card.style.transform = `scale(1)`;
              }, 30)
            })
          }
        })
        portGallery = new Gallery(cardClassName);
        portGallery.initialize();
      }, 300);
    }

    btns.forEach(btn => {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        if (currentBtn === this.dataset.itemid) {
          return;
        }
        currentBtn = this.dataset.itemid
        if (this.dataset.itemid === 'all') {
          let markup;
          let alreadyPresent = [];
          let notPresent = [];
          cards = document.querySelectorAll(cardClassName);
          if (cards.length === cardsArr.length) {
            return;
          }

          cards.forEach(card => {
            alreadyPresent.push(card.id);
          });

          cardsArr.forEach(card => {
            if (!alreadyPresent.includes(card.id)) {
              notPresent.push(card.id);
              markup = `
              <div class="portfolio__card" data-itemid=${card.category} id="${card.id}">
                <figure class="portfolio__card-figure">
                  <img src="${card.img}" alt="" class="portfolio__card-img">
                  <p class="portfolio__card-category">${card.category}</p>
                  <p class="portfolio__card-name">${card.name}</p>
                </figure>
              </div>`;
              cardsParent.insertAdjacentHTML(`beforeend`, markup);
            }
          });
          cards = document.querySelectorAll(cardClassName);
          cards.forEach(card => {
            if (notPresent.includes(card.id)) {
              card.style.transform = `scale(0)`;
              setTimeout(function () {
                card.style.transform = `scale(1)`;
                portGallery = new Gallery(`#${card.id}`);
                portGallery.initialize();
              }, 50);
            }
          })
          return;
        }

        triggerSwitch();
        insertCard(this.dataset.itemid);
      })
    })
  }
}