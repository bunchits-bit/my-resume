// ---------- 1. ปุ่มเมนูแฮมเบอร์เกอร์สำหรับมือถือ ----------
const menuToggle = document.querySelector('#menu-toggle');
const siteNav = document.querySelector('.site-nav');

if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', function () {
    siteNav.classList.toggle('open');
    const isOpen = siteNav.classList.contains('open');
    menuToggle.setAttribute('aria-expanded', isOpen);
  });
}

// ---------- 2. ทำเมนู active อัตโนมัติตามหน้าปัจจุบัน ----------
let currentPage = window.location.pathname.split('/').pop();

if (currentPage === '') {
  currentPage = 'index.html';
}

const navLinks = document.querySelectorAll('.site-nav a');
navLinks.forEach(function (link) {
  const linkPage = link.getAttribute('href');
  if (linkPage === currentPage) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
});