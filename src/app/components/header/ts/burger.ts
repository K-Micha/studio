import { signal } from '@angular/core';

type BurgerLine = {
  w: number;
  x: number;
  y: number;
  r: number;
};

type BurgerFrame = {
  top: BurgerLine;
  mid: BurgerLine;
  bot: BurgerLine;
};

const FRAME_DELAY = 50;

const FRAMES: BurgerFrame[] = [
  {
    top: { w: 40, x: 0, y: -14, r: 0 },
    mid: { w: 40, x: 0, y: 0, r: 0 },
    bot: { w: 40, x: 0, y: 14, r: 0 }
  },
  {
    top: { w: 20, x: 0, y: -14, r: 0 },
    mid: { w: 40, x: 0, y: 0, r: 0 },
    bot: { w: 20, x: 0, y: 14, r: 0 }
  },
  {
    top: { w: 20, x: 10, y: -14, r: 0 },
    mid: { w: 40, x: 0, y: 0, r: 0 },
    bot: { w: 20, x: -10, y: 14, r: 0 }
  },
  {
    top: { w: 20, x: 10, y: -10, r: -45 },
    mid: { w: 40, x: 0, y: 0, r: 45 },
    bot: { w: 20, x: -10, y: 10, r: -45 }
  },
  {
    top: { w: 40, x: 0, y: 0, r: -45 },
    mid: { w: 40, x: 0, y: 0, r: 45 },
    bot: { w: 0, x: 0, y: 0, r: 0 }
  }
];

/**
*Controls the five-frame burger animation.
*/
export class BurgerAnimation {
  readonly frame = signal<BurgerFrame>(FRAMES[0]);
  readonly isOpen = signal(false);
  readonly isAnimating = signal(false);

  private timer?: ReturnType<typeof setTimeout>;

  /**
*Toggles the burger between open and closed.
*/
  toggle(): void {
    if (this.isAnimating()) return;
    this.isOpen.update(value => !value);
    const frames = this.isOpen() ? FRAMES : [...FRAMES].reverse();
    this.play(frames);
  }

  /**
*Starts the frame sequence.
*@param {BurgerFrame[]} frames Ordered animation frames.
*/
  private play(frames: BurgerFrame[]): void {
    this.isAnimating.set(true);
    this.runFrame(frames, 0);
  }

  /**
*Applies a frame and schedules the next one.
*@param {BurgerFrame[]} frames Animation frames.
*@param {number} index Current frame index.
*/
  private runFrame(frames: BurgerFrame[], index: number): void {
    this.frame.set(frames[index]);
    this.timer = setTimeout(() => {
      if (index + 1 < frames.length) {
        this.runFrame(frames, index + 1);
      } else {
        this.isAnimating.set(false);
      }
    }, FRAME_DELAY);
  }

  /**
*Builds the CSS transform for a burger line.
*@param {BurgerLine} line Frame line properties.
*@returns {string} CSS transform value.
*/
  transform(line: BurgerLine): string {
    return `translate(-50%, -50%) translate(${line.x}px, ${line.y}px) rotate(${line.r}deg)`;
  }

  /**
*Clears pending animation work.
*/
  destroy(): void {
    clearTimeout(this.timer);
  }
}
