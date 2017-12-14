const raf = setTimeout;
const ric = function ric(cb) {
  const start = Date.now();
  return setTimeout(() => {
    cb({
      didTimeout: false,
      timeRemaining() {
        return Math.max(0, 50 - (Date.now() - start));
      },
    });
  }, 1);
};

const render = (timeout = 50) => new Promise(r => setTimeout(r, timeout));

const commis = () => {
  window.requestAnimationFrame = window.requestAnimationFrame || raf;
  window.requestIdleCallback = window.requestIdleCallback || ric;

  return { render };
};

export { commis, render };
