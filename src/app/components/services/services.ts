import { Component, computed, inject, signal } from '@angular/core';
import { WebsiteContentService } from '../../core/website-content.service';
import { WebsiteModeService } from '../../core/website-mode.service';
import { AnimatedArrow } from '../../animations/animated-arrow/animated-arrow';

/**
*Displays the configured services for the current website.
*/
@Component({
  selector: 'app-services',
  imports: [AnimatedArrow],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {
  private readonly websiteContent = inject(WebsiteContentService);
  private readonly mode = inject(WebsiteModeService);

  readonly content = this.websiteContent.services;
  readonly activeIndex = signal(1);

  readonly visibleItems = computed(() =>
    this.content().items.slice(0, this.mode.serviceCount())
  );

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
}