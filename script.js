onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);

  // Commented out the class addition
  // const firstFlowerPetals = document.querySelectorAll('.flower--1 .flower__leaf');
  // if (firstFlowerPetals[0]) firstFlowerPetals[0].classList.add('flower__leaf--rose-1');
  // if (firstFlowerPetals[1]) firstFlowerPetals[1].classList.add('flower__leaf--rose-2');
  // if (firstFlowerPetals[2]) firstFlowerPetals[2].classList.add('flower__leaf--rose-3');
  // if (firstFlowerPetals[3]) firstFlowerPetals[3].classList.add('flower__leaf--rose-4');
  // if (firstFlowerPetals[4]) firstFlowerPetals[4].classList.add('flower__leaf--rose-5');
  // if (firstFlowerPetals[5]) firstFlowerPetals[5].classList.add('flower__leaf--rose-6');
  // if (firstFlowerPetals[6]) firstFlowerPetals[6].classList.add('flower__leaf--rose-7');
};
