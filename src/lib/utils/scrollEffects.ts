import { onMount } from 'svelte';
import { browser } from '$app/environment';

/**
 * Sets up an Intersection Observer for a given element.
 * When the element becomes visible, the onVisible callback is invoked once.
 * @param element The HTMLElement to observe.
 * @param onVisible A callback function to execute when the element becomes visible.
 */
export function observeElementVisibility(element: HTMLElement, onVisible: () => void) {
  if (!browser) {
    // If not in browser, just call onVisible immediately for SSR or static rendering
    onVisible();
    return;
  }

  if (!element) {
    console.warn('IntersectionObserver: Element is undefined or null.');
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        onVisible();
        observer.disconnect();
      }
    },
    { threshold: 0.1 }
  );

  observer.observe(element);

  // Return a cleanup function for Svelte's onMount
  return () => observer.disconnect();
}