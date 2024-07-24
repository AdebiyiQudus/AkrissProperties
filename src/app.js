const howItWork = document.querySelectorAll('.a');
const howItWorksContainer = document.querySelector('.how_it_work_container');
const howItWorks = document.querySelectorAll('.how_it_work');

// How it works functionality
const openWork = e => {
  const selectedWorkParent = e.target.closest('.how_it_work');

  if (!selectedWorkParent) return;
  const all = howItWork;

  all.forEach((each, i) => {
    const init = () => {
      each.classList.remove('open');
      each.closest(`.how_it_work`).classList.remove('color');
    };

    init();

    if (
      !each.classList.contains('open') ||
      !each.closest(`.how_it_work`).classList.remove('open')
    ) {
      document
        .querySelector(`.a_${selectedWorkParent.dataset.show}`)
        .classList.add('open');

      document
        .querySelector(`.work_${selectedWorkParent.dataset.show}`)
        .classList.add('color');
      document.querySelector(`.a_${selectedWorkParent.dataset.show}`);
    }
  });
};

howItWorksContainer.addEventListener('click', openWork);

// Navigation functionality

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
  } else {
    const select = e.target.closest('.text-sm').getAttribute('href');

    window.location.href = `${select}`;
  }
});

// Sticky Nav

const NavContainer = document.querySelector('#navLinks');

const header = document.querySelector('.header');
const navHeight = NavContainer.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    NavContainer.classList.add('sticky');
    NavContainer.style.marginBottom = `-${navHeight}px`;
  } else NavContainer.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
});

headerObserver.observe(header);

function checkUrlForShowSection(e) {
  const link = e.target.location.hash;
  const urlParams = new URLSearchParams(window.location.search);
  console.log(urlParams);

  const showSection = urlParams.get('showSection');
  console.log(showSection);
  
  if (showSection === 'true') {
    const targetSection = document.querySelector(`${link}`);
    targetSection.classList.add('visible');
    // Optional: Scroll to the target section
    targetSection.scrollIntoView({ behavior: 'smooth' });
  }
}

window.onload = checkUrlForShowSection;
