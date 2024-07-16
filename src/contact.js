const NavBar = document.querySelector('#bars');

const Navs = document.querySelector('#navs');

const NavLinks = document.querySelector('.nav__links');

const LoadEvenListerners = () => {
  NavBar.addEventListener('click', toogleNavs);
  NavLinks.addEventListener('click', closeNavs);
};

const toogleNavs = () => {
  Navs.classList.toggle('show');
  NavBar.classList.toggle('active');
};

const closeNavs = e => {
  const selectedLink = e.target.closest('li');

  if (!selectedLink) return;

  if (selectedLink) {
    Navs.classList.remove('show');
    NavBar.classList.remove('active');
    return;
  }
};

LoadEvenListerners();

// Revealing Section on Scroll

const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

// Scroll onto view

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});
