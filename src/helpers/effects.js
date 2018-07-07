export const fadeInAndOut = (el) => {
    let fadeInInterval;

        const fadeIn = () => {
            el.style.opacity = Number(el.style.opacity) + 0.15;

            if (el.style.opacity >= 1) {
                clearInterval(fadeInInterval);
            }
        }

        const fadeOut = () => {
            el.style.opacity = Number(el.style.opacity) - 0.15;

            if(el.style.opacity <= 0) {
            clearInterval(fadeOutInterval);
            el.style.borderTop = '30px solid #FF7412';
            fadeInInterval = setInterval(fadeIn, 50);
          }
        }

        const fadeOutInterval = setInterval(fadeOut, 50);

  }

