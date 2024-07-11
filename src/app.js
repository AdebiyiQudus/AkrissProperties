const howItWork = document.querySelectorAll('.a');
const howItWorksContainer = document.querySelector('.how_it_work_container');

const openWork = e => {
  const selectedWorkParent = e.target.closest('.how_it_work');

  if (!selectedWorkParent) return;
  const all = howItWork;

  all.forEach(each => {
    if (
      each.classList.contains('open') ||
      each.closest(`.how_it_work`).classList.contains('color')
    ) {
      each.classList.remove('open');
      each.closest(`.how_it_work`).classList.remove('color');
    } else {
      document
        .querySelector(`.a_${selectedWorkParent.dataset.show}`)
        .classList.toggle('open');
      document
        .querySelector(`.work_${selectedWorkParent.dataset.show}`)
        .classList.toggle('color');
    }
  });
};

howItWorksContainer.addEventListener('click', openWork);
