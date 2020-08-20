const mobileMenuIcon = document.getElementById('mobile-menu-icon');
const mobileMenuNav = document.getElementById('mobile-nav');
const mobileMenuBlur = document.getElementsByClassName('container');

mobileMenuIcon.addEventListener('click', () => {
  [...mobileMenuBlur].forEach((item) => {
    // eslint-disable-next-line no-param-reassign
    item.style.filter = 'blur(5px)';
  });

  // eslint-disable-next-line eqeqeq
  if (mobileMenuIcon.classList == 'hamburger-icon open') {
    [...mobileMenuBlur].forEach((item) => {
      // eslint-disable-next-line no-param-reassign
      item.style.filter = 'blur(0px)';
    });
  }

  mobileMenuNav.classList.toggle('d-none');
  mobileMenuIcon.classList.toggle('open');
});
