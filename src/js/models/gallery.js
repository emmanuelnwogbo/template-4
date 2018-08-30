export default class Gallery {
  constructor(items) {
    this.items = document.querySelectorAll(items);
  }

  initialize() {
    const body = document.body;
    const listener = this.listener;
    let markup;
    let galleryItem;
    this.items.forEach(item => {
      item.addEventListener('click', () => {
        item.classList.add('current')
        window.addEventListener('keydown', listener);
        markup = `
          <div class="gallery" id="gallery">
            <figure class="gallery__figure">
              <img src="${item.children[0].children[0].src}" alt="" class="gallery__img">
            </figure>
          </div>
          `;
        //console.log(item.children[0].children[0].src)
        body.insertAdjacentHTML('afterbegin', markup);
        galleryItem = document.querySelector('.gallery');
        galleryItem.children[0].style.transform = 'scale(0)';
        setTimeout(function () {
          galleryItem.children[0].style.transform = `scale(1)`;
        }, 100)
        galleryItem.addEventListener('click', function (e) {
          if (e.target.className === 'gallery') {
            window.removeEventListener('keydown', listener);
            this.children[0].style.transform = `scale(0)`;
            setTimeout(() => {
              this.style.display = `none`;
              item.classList.remove('current');
            }, 100);
          }
        })
      })
    });
  }

  listener(e) {
    let galleryImg = document.querySelector('.gallery__img');
    let current = document.querySelector('.current');
    let nextCurrent;
    let currentImg;

    if (e.key === 'ArrowRight' && current.nextElementSibling) {
      currentImg = current.children[0].children[0].src;
      nextCurrent = current.nextElementSibling;
      nextCurrent.classList.add('current');
      current.classList.remove('current');
      galleryImg.src = nextCurrent.children[0].children[0].src;
    }

    if (e.key === 'ArrowLeft' && current && current.previousElementSibling) {
      currentImg = current.children[0].children[0].src;
      nextCurrent = current.previousElementSibling;
      nextCurrent.classList.add('current');
      current.classList.remove('current');
      galleryImg.src = nextCurrent.children[0].children[0].src;
    }
  }
}