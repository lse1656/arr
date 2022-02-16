//header scroll
const header = document.querySelector('.header-wrapper');
const gnb = document.querySelector('.gnb');
const lnb = document.querySelectorAll('.lnb');
const navBg = document.querySelector('.navBg');

gnb.addEventListener('mouseover', () => {
  navBg.classList.add('scroll');
});
gnb.addEventListener('mouseleave', () => {
  navBg.classList.remove('scroll');
});

//footer-tab
const tabItem = document.querySelectorAll(
  '.footer-tab .tab-menu .tab-menu-item'
);

tabItem.forEach((element) => {
  element.addEventListener('click', (e) => {
    e.preventDefault();
    tabItem.forEach((element) => {
      element.classList.remove('active');
    });
    e.target.parentNode.classList.add('active');
  });
});

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
