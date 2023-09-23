//MOBILE NAV TOGGLE

const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');
const navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {

  const visibility = primaryNav.getAttribute('data-visible');

  if (visibility === "false") {
    primaryNav.setAttribute('data-visible', true);
    navToggle.setAttribute('aria-expaned', true);
  } else if (visibility === "true") {
    primaryNav.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expaned', false);
  }
});


navLinks.forEach(link => link.addEventListener('click', () => {

    primaryNav.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expaned', false);

  // console.log('nav link clicked')
}))

//CONTACT FORM

