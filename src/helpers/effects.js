const moveUp = el => {
  el.style.transform += 'translateY(-15px)';
}

const moveDown = el => {
  setTimeout(() => {
    el.style.transform += 'translateY(15px)'
  }, 400);
}

export const bounce = el => {
  moveUp(el);
  moveDown(el);
}