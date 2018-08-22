import '../scss/main.scss';
const container = document.getElementById('container');
const sideNavCheck = document.getElementById('container__sidenav-check');
const sideNavBtn = document.getElementById('container__sidenav-btndiv');

sideNavBtn.addEventListener('click', function () {
  sideNavCheck.checked = true;
})

container.addEventListener('click', function () {
  sideNavCheck.checked = false;
})