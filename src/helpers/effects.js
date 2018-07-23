const moveUp = el => {
  el.style.transition = 'all 600ms';
  el.style.transform += 'translateY(-35px)';
}

const moveDown = el => {
  setTimeout(() => {
    el.style.transform += 'translateY(35px)'
  }, 300);
}

export const bounce = el => {
  moveUp(el);
  moveDown(el);
}