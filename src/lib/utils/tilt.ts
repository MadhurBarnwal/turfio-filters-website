import { browser } from '$app/environment';

interface TiltOptions {
  max?: number;
  perspective?: number;
  scale?: number;
  speed?: number;
  easing?: string;
  reset?: boolean;
}

export function tilt(node: HTMLElement, options: TiltOptions = {}) {
  if (!browser) return;

  const {
    max = 15,
    perspective = 1000,
    scale = 1.05,
    speed = 500,
    easing = 'cubic-bezier(.03,.98,.52,.99)',
    reset = true,
  } = options;

  let rect = node.getBoundingClientRect();

  function onMouseEnter() {
    rect = node.getBoundingClientRect();
  }

  function onMouseMove(e: MouseEvent) {
    const { clientX, clientY } = e;
    const { left, top, width, height } = rect;

    const x = clientX - left;
    const y = clientY - top;

    const rotateX = map(y, 0, height, -max, max);
    const rotateY = map(x, 0, width, max, -max);

    node.style.transition = `transform ${speed / 2}ms ${easing}`;
    node.style.transform = `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`;
  }

  function onMouseLeave() {
    if (reset) {
		node.style.transition = `transform ${speed}ms ${easing}`;
      	node.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    }
  }

  const map = (val: number, in_min: number, in_max: number, out_min: number, out_max: number) => {
    return (val - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }

  node.addEventListener('mouseenter', onMouseEnter);
  node.addEventListener('mousemove', onMouseMove);
  node.addEventListener('mouseleave', onMouseLeave);

  return {
    destroy() {
      node.removeEventListener('mousemove', onMouseMove);
      node.removeEventListener('mouseleave', onMouseLeave);
	  node.removeEventListener('mouseenter', onMouseEnter);
    }
  };
}