export const addSwipeEvent = (): Record<string, (e: TouchEvent) => void> => {
  let nm = true;
  let startPoint = { x: 0, y: 0 };
  let endPoint = { x: 0, y: 0 };
  const customEvent = (e, eventName): void => {
    let swipeEvent = document.createEvent('CustomEvent');
    swipeEvent.initCustomEvent(eventName, true, true, e.target);
    e.target.dispatchEvent(swipeEvent);
    swipeEvent = null;

    return;
  };

  return {
    touchstart: (e: TouchEvent): void => {
      startPoint = { x: e.touches[0].pageX, y: e.touches[0].pageY };
    },
    touchmove: (e: TouchEvent): void => {
      nm = false;
      endPoint = { x: e.touches[0].pageX, y: e.touches[0].pageY };
    },
    touchend: (e: TouchEvent): void => {
      if (nm) {
        customEvent(e, 'fastClick');
      } else {
        const x = endPoint.x - startPoint.x;
        const y = endPoint.y - startPoint.y;
        const xr = Math.abs(x);
        const yr = Math.abs(y);

        if (xr > yr) {
          if (Math.max(xr) > 50) {
            customEvent(e, x < 0 ? 'swipeLeft' : 'swipeRight');
          }
        } else {
          if (Math.max(yr) > 50) {
            customEvent(e, y < 0 ? 'swipeUp' : 'swipeDown');
          }
        }
      }
      nm = true;
    },
    touchcancel: (): void => {
      nm = false;
    },
  };
};
