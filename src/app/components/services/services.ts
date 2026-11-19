import { Component, computed, inject } from '@angular/core';
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

  readonly visibleItems = computed(() =>
    this.content().items.slice(0, this.mode.serviceCount())
  );
}