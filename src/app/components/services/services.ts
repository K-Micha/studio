import { afterRenderEffect, Component, computed, DestroyRef, ElementRef, HostListener, inject, signal, viewChild } from '@angular/core';
import { WebsiteContentService } from '../../core/website-content.service';
import { WebsiteModeService } from '../../core/website-mode.service';
import { PointerGesture } from '../../shared/pointer/pointer';
import { CircleArrow } from '../../shared/icons/circle-arrow/circle-arrow';


/**
*Displays the configured services for the current website.
*/
@Component({
  selector: 'app-services',
  imports: [CircleArrow],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {
  private readonly websiteContent = inject(WebsiteContentService);
  private readonly mode = inject(WebsiteModeService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly section = viewChild<ElementRef<HTMLElement>>('servicesSection');
  private readonly pointer = new PointerGesture();
  private readonly pointerInside = signal(false);

  private observer: IntersectionObserver | null = null;
  private observedPreview: Element | null = null;
  private suppressTouchClick = false;

  readonly content = this.websiteContent.services;
  readonly activeIndex = signal(1);
  readonly scrollHighlight = signal(false);

  readonly visibleItems = computed(() =>
    this.content().items.slice(0, this.mode.serviceCount())
  );

  /**
  *Initializes observation of the active carousel preview.
  */
  constructor() {
    afterRenderEffect(() => {
      this.activeIndex();
      const preview = this.section()?.nativeElement.querySelector(
        '.carousel__wrapper.is-active .carousel__preview'
      );
      this.observePreview(preview ?? null);
    });
    this.destroyRef.onDestroy(() => this.observer?.disconnect());
  }

  /**
  *Observes the active preview within the viewport trigger zone.
  *@param preview - Active preview element.
  */
  private observePreview(preview: Element | null): void {
    if (this.observedPreview === preview) return;
    this.observer?.disconnect();
    this.observedPreview = preview;
    this.scrollHighlight.set(false);
    if (!preview || typeof IntersectionObserver === 'undefined') return;
    this.observer ??= this.createScrollObserver();
    this.observer.observe(preview);
  }

  /**
  *Creates the observer for the carousel scroll highlight.
  *@returns Configured intersection observer.
  */
  private createScrollObserver(): IntersectionObserver {
    return new IntersectionObserver(
      entries => this.scrollHighlight.set(entries[0]?.isIntersecting ?? false),
      { rootMargin: '-55% 0px -35% 0px', threshold: 0 }
    );
  }

  /**
  *Returns the relative position of a carousel item.
  *@param index - Index of the service item.
  *@returns Relative position or 3 for a hidden item.
  */
  carouselPosition(index: number): number {
    const count = this.visibleItems().length;
    const offset = (index - this.activeIndex() + count) % count;

    if (offset <= 2) return offset;
    if (offset >= count - 2) return offset - count;
    return 3;
  }

  /**
  *Activates the selected carousel item.
  *@param index - Index of the selected item.
  */
  selectCarouselItem(index: number): void {
    if (index === this.activeIndex()) return;
    this.activeIndex.set(index);
  }

  /**
  *Handles clicks while preventing touch gestures from activating cards.
  *@param event - Click event.
  *@param index - Selected service index.
  */
  onCarouselClick(event: MouseEvent, index: number): void {
    if (this.suppressTouchClick && event.detail !== 0) {
      event.preventDefault();
      event.stopPropagation();
      this.suppressTouchClick = false;
      return;
    }
    this.selectCarouselItem(index);
  }

  /**
  *Starts tracking a touch gesture on the carousel.
  *@param event - Pointer event.
  */
  onCarouselPointerDown(event: PointerEvent): void {
    if (event.pointerType !== 'touch') return;
    this.suppressTouchClick = false;
    this.pointer.press(event);
  }

  /**
  *Updates the current touch gesture.
  *@param event - Pointer event.
  */
  onCarouselPointerMove(event: PointerEvent): void {
    if (event.pointerType !== 'touch') return;
    this.pointer.move(event);
  }

  /**
  *Completes a touch gesture and navigates on horizontal swipes.
  *@param event - Pointer event.
  */
  onCarouselPointerUp(event: PointerEvent): void {
    if (event.pointerType !== 'touch') return;
    const result = this.pointer.release(event);
    if (!result) return;

    this.suppressTouchClick = result.action !== 'press';
    if (result.action !== 'drag') return;
    if (Math.abs(result.deltaX) < 35) return;

    this.moveCarousel(result.deltaX < 0 ? 1 : -1);
  }

  /**
  *Cancels a touch gesture without changing the active card.
  */
  onCarouselPointerCancel(): void {
    this.pointer.cancel();
    this.suppressTouchClick = true;
  }

  /**
  *Tracks whether a non-touch pointer enters the services section.
  *@param event - Pointer event.
  */
  onPointerEnter(event: PointerEvent): void {
    this.pointerInside.set(event.pointerType !== 'touch');
  }

  /**
  *Clears the pointer state when leaving the services section.
  */
  onPointerLeave(): void {
    this.pointerInside.set(false);
  }

  /**
  *Handles arrow keys while the services section is active.
  *@param event - Keyboard event.
  */
  @HostListener('document:keydown', ['$event'])
  onKeydown(event: KeyboardEvent): void {
    if (this.visibleItems().length < 5 || this.isTyping(event)) return;
    if (event.altKey || event.ctrlKey || event.metaKey) return;
    if (!this.isKeyboardActive(event)) return;
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;

    event.preventDefault();
    this.moveCarousel(event.key === 'ArrowRight' ? 1 : -1);
  }

  /**
  *Checks whether a text input is receiving keyboard events.
  *@param event - Keyboard event.
  *@returns Whether the target is editable.
  */
  private isTyping(event: KeyboardEvent): boolean {
    const target = event.target;
    if (!(target instanceof Element)) return false;
    return !!target.closest('input, textarea, select, [contenteditable], [role="textbox"]');
  }

  /**
  *Checks whether the services section is active for keyboard navigation.
  *@param event - Keyboard event.
  *@returns Whether keyboard navigation is allowed.
  */
  private isKeyboardActive(event: KeyboardEvent): boolean {
    const focused = this.section()?.nativeElement.contains(event.target as Node);
    return this.pointerInside() || !!focused;
  }

  /**
  *Moves the carousel and wraps around its items.
  *@param direction - Navigation direction.
  */
  private moveCarousel(direction: number): void {
    const count = this.visibleItems().length;
    const next = (this.activeIndex() + direction + count) % count;
    this.selectCarouselItem(next);
  }
}
