const toggleMenu = document.querySelector('#toggle-menu');
const closeBtn = document.querySelector('#close-btn');
const menuItems = document.querySelectorAll('.menu-item');
// for-top-nav
function openNav() {
  document.querySelector('.mobile-menu').classList.add('active');
  toggleMenu.classList.add('invisible');
  document.body.style.overflowY = 'hidden';
}

toggleMenu.addEventListener('click', openNav);

function closeNav() {
  document.querySelector('.mobile-menu').classList.remove('active');
  toggleMenu.classList.remove('invisible');
  document.body.style.overflowY = 'auto';
}

closeBtn.addEventListener('click', closeNav);

menuItems.forEach((item) => {
  item.addEventListener('click', closeNav);
});

// for scrolling effect //
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});
