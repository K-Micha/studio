import { signal } from '@angular/core';

/**
*Controls the moving navigation underline.
*/
export class HoverAnimation {
  readonly x = signal(0);
  readonly width = signal(0);
  readonly animate = signal(false);

  private frameId = 0;
  private isInside = false;
  private targetX = 0;
  private targetWidth = 0;

  /**
*Moves the underline towards the hovered navigation item.
*/
  enter(event: PointerEvent, nav: HTMLElement, _line: HTMLElement): void {
    const item = event.currentTarget;
    if (!(item instanceof HTMLElement)) return;

    const navRect = nav.getBoundingClientRect();
    const itemRect = item.getBoundingClientRect();
    const x = itemRect.left - navRect.left;

    this.targetX = x;
    this.targetWidth = itemRect.width;
    if (!this.isInside) this.start(x, itemRect.width, navRect.width);
    else if (this.animate()) this.move(x, itemRect.width);
  }

/**
*Starts the underline at the nearest navigation edge.
*/
  private start(x: number, width: number, navWidth: number): void {
    this.cancel();
    this.isInside = true;
    this.animate.set(false);
    this.x.set(x + width / 2 > navWidth / 2 ? navWidth : 0);
    this.width.set(0);
    this.schedule();
  }

/**
*Enables the animation after the starting position is rendered.
*/
  private schedule(): void {
    this.frameId = requestAnimationFrame(() => {
      this.frameId = requestAnimationFrame(() => {
        this.animate.set(true);
        this.move(this.targetX, this.targetWidth);
      });
    });
  }

/**
*Updates the underline position and width.
*/
  private move(x: number, width: number): void {
    this.x.set(x);
    this.width.set(width);
  }

/**
*Moves the underline out through the nearest edge.
*/
  leave(nav: HTMLElement, line: HTMLElement): void {
    this.cancel();
    this.isInside = false;

    const navRect = nav.getBoundingClientRect();
    const lineRect = line.getBoundingClientRect();
    const center = lineRect.left + lineRect.width / 2;
    const fromRight = center > navRect.left + navRect.width / 2;

    this.animate.set(true);
    this.move(fromRight ? navRect.width : 0, 0);
  }

/**
*Cancels a pending animation frame.
*/
  private cancel(): void {
    cancelAnimationFrame(this.frameId);
    this.frameId = 0;
  }

/**
*Releases pending animation work.
*/
  destroy(): void {
    this.cancel();
  }
}