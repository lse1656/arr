// const header = document.querySelector('.header');
// const lnb = document.querySelectorAll('.lnb');

// lnb.forEach((element) => {
//   element.addEventListener('mouseover', () => {
//     header.style.height = '320px';
//   });
// });

//footer-tab

const matchItem = document.querySelectorAll('.footer-tab .tab-menu-item');

for (i = 0; i < matchItem.length; i++) {
  matchItem[i].addEventListener('click', (e) => {
    e.preventDefault();

    for (j = 0; j < matchItem.length; j++) {
      matchItem[j].classList.remove('active');
    }
    e.target.parentNode.classList.add('active');
  });
}

// sidebar 나타나기
const menuBtn = document.querySelector('.menu-btn');
const sidebar = document.querySelector('.sidebar');
const overlay = document.querySelector('.overlay');

function openSidebar() {
  sidebar.classList.add('active');
  overlay.classList.add('active');
}

function closeSidebar() {
  sidebar.classList.remove('active');
  overlay.classList.remove('active');
}

menuBtn.addEventListener('click', openSidebar);
overlay.addEventListener('click', closeSidebar);
