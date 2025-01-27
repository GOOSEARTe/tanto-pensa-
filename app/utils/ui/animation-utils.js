import { Animation } from '@nativescript/core';

export const AnimationUtils = {
  fadeIn(view, duration = 300) {
    view.opacity = 0;
    return new Animation([{
      target: view,
      opacity: 1,
      duration
    }]).play();
  },

  fadeOut(view, duration = 300) {
    return new Animation([{
      target: view,
      opacity: 0,
      duration
    }]).play();
  },

  slideIn(view, distance = 100, duration = 300) {
    view.translateY = distance;
    view.opacity = 0;
    return new Animation([{
      target: view,
      translate: { x: 0, y: 0 },
      opacity: 1,
      duration
    }]).play();
  }
};