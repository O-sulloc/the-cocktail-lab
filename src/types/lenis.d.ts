declare module '@studio-freight/lenis' {
  interface LenisOptions {
    duration?: number;
    easing?: (t: number) => number;
    orientation?: 'vertical' | 'horizontal';
    gestureOrientation?: 'vertical' | 'horizontal';
    smoothWheel?: boolean;
    smoothTouch?: boolean;
    touchMultiplier?: number;
    infinite?: boolean;
  }

  interface LenisScrollEvent {
    scroll: number;
    limit: number;
    velocity: number;
    direction: number;
    animate: boolean;
  }

  export default class Lenis {
    constructor(options?: LenisOptions);
    destroy(): void;
    on(event: 'scroll', callback: (e: LenisScrollEvent) => void): void;
    off(event: 'scroll', callback: (e: LenisScrollEvent) => void): void;
    raf(time: number): void;
    scrollTo(target: number | HTMLElement, options?: { offset?: number; duration?: number; easing?: (t: number) => number }): void;
    stop(): void;
    start(): void;
  }
} 