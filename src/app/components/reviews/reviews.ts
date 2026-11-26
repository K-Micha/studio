import { AfterViewInit, Component, computed, ElementRef, OnDestroy, signal, ViewChild } from '@angular/core';
import { Star } from '../../shared/star/star';
import { PointerGesture } from '../../shared/pointer/pointer';
import { DEMO_REVIEWS } from './demo';

/**
*Displays reviews with responsive carousel navigation.
*/
@Component({
  selector: 'app-reviews',
  imports: [Star],
  templateUrl: './reviews.html',
  styleUrl: './reviews.scss'
})
export class Reviews implements AfterViewInit, OnDestroy {
  @ViewChild('reviewSection') private section?: ElementRef<HTMLElement>;

  readonly reviews = DEMO_REVIEWS;
  readonly totalReviews = this.reviews.length;
  readonly visibleCount = signal(1);
  readonly page = signal(0);
  readonly pageStep = signal(0);
  readonly dragOffset = signal(0);
  readonly dragging = signal(false);

  private readonly pointer = new PointerGesture();
  private readonly cardMinWidth = 300;
  private readonly cardGap = 20;
  private resizeObserver?: ResizeObserver;
  private pointerStartX = 0;

  readonly ergebniss = computed(() => {
    const total = this.reviews.reduce((sum, review) => sum + review.rating, 0);
    return this.totalReviews ? total / this.totalReviews : null;
  });

  readonly pageCount = computed(() =>
    Math.max(1, Math.ceil(this.totalReviews / this.visibleCount()))
  );

  readonly pages = computed(() =>
    Array.from({ length: this.pageCount() }, (_, index) => index)
  );

  readonly trackOffset = computed(() =>
    -this.page() * this.pageStep() + this.dragOffset()
  );

/**
*Starts observing the responsive review section.
*/
  ngAfterViewInit(): void {
    const element = this.section?.nativeElement;
    if (!element) return;
    this.resizeObserver = new ResizeObserver(() => this.updateWidth());
    this.resizeObserver.observe(element);
    this.updateWidth();
  }

/**
*Measures available width excluding section padding.
*/
  private availableWidth(): number {
    const element = this.section?.nativeElement;
    if (!element) return 0;
    const style = getComputedStyle(element);
    const padding = parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
    return Math.max(0, Math.min(1440, element.clientWidth - padding));
  }

/**
*Calculates the visible cards and carousel step.
*/
  private updateWidth(): void {
    const width = this.availableWidth();
    if (width <= 0) return;
    const count = Math.floor((width + this.cardGap) / (this.cardMinWidth + this.cardGap));
    const visible = Math.max(1, Math.min(count, this.totalReviews));
    this.pageStep.set(width + this.cardGap);
    if (visible === this.visibleCount()) return;
    this.visibleCount.set(visible);
    this.page.set(0);
  }

/**
*Starts tracking a carousel pointer gesture.
*/
  onPointerDown(event: PointerEvent): void {
    if (!event.isPrimary || (event.pointerType === 'mouse' && event.button !== 0)) return;
    this.pointer.press(event);
    this.pointerStartX = event.clientX;
    const element = event.currentTarget;
    if (element instanceof HTMLElement) element.setPointerCapture(event.pointerId);
  }

/**
*Moves the carousel track with a horizontal drag.
*/
  onPointerMove(event: PointerEvent): void {
    const action = this.pointer.move(event);
    if (action !== 'drag') return;
    this.dragging.set(true);
    this.dragOffset.set(event.clientX - this.pointerStartX);
  }

/**
*Completes a drag and selects the destination page.
*/
  onPointerUp(event: PointerEvent): void {
    const result = this.pointer.release(event);
    this.dragging.set(false);
    this.dragOffset.set(0);
    if (result?.action !== 'drag') return;
    const threshold = Math.min(90, this.pageStep() / 5);
    if (Math.abs(result.deltaX) < threshold) return;
    this.goToPage(this.page() + (result.deltaX < 0 ? 1 : -1));
  }

/**
*Resets an interrupted pointer gesture.
*/
  onPointerCancel(): void {
    this.pointer.cancel();
    this.dragging.set(false);
    this.dragOffset.set(0);
  }

/**
*Changes the active carousel page.
*/
  goToPage(index: number): void {
    if (index < 0 || index >= this.pageCount()) return;
    this.page.set(index);
  }

/**
*Releases carousel observers and pointer state.
*/
  ngOnDestroy(): void {
    this.resizeObserver?.disconnect();
    this.pointer.cancel();
  }
}