import { AnimationController, Animation } from '@ionic/angular';

/**
 * Creates a slide-in animation.
 * @param baseEl - The HTML element to which the animation will be applied.
 * @param opts - Additional options for the animation (optional).
 * @returns An Animation object representing the slide-in animation.
 */
export const slideInAnimation = (
  baseEl: HTMLElement,
  opts?: any,
): Animation => {
  const animationCtrl = new AnimationController();
  const baseAnimation = animationCtrl
    .create()
    .addElement(baseEl)
    .duration(500) // Duration of the animation in milliseconds.
    .easing('cubic-bezier(0.36,0.66,0.04,1)') // Easing function for smooth animation.
    .fromTo('transform', 'translateX(-100%)', 'translateX(0%)'); // Define the transformation from and to values.

  return baseAnimation;
};
