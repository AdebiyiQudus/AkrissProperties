const allMembers = document.querySelectorAll('.team-member');

const display = e => {
  e.target.querySelector('.email').classList.add('open');
};

allMembers.forEach(each => each.addEventListener('mouseenter', display));
allMembers.forEach(each =>
  each.addEventListener('mouseleave', e =>
    e.target.querySelector('.email').classList.remove('open')
  )
);

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

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   e.preventDefault();

//   // Matching strategy
//   if (e.target.classList.contains('nav__link')) {
//     const id = e.target.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   } else {
//     const select = e.target.closest('.text-sm').getAttribute('href');

//     window.location.href = `${select}`;
//   }
// });

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const classname = e.target.id;
    const id = e.target.getAttribute('href');

    document.querySelector(`.${classname}`).style.opacity = '1';
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  } else {
    const select = e.target.closest('.text-sm').getAttribute('href');

    window.location.href = `${select}`;
  }
});
