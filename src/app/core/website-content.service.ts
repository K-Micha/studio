import { computed, inject, Injectable } from '@angular/core';
import { WebsiteModeService } from './website-mode.service';
import { FREELANCER_CONTENT } from './content/freelancer.content';
import { STUDIO_CONTENT } from './content/studio.content';
import type { HeroConfig } from './types/hero.types';

/**
*Provides the active website content based on business type.
*/
@Injectable({ providedIn: 'root' })
export class WebsiteContentService {
  private readonly mode = inject(WebsiteModeService);

  readonly content = computed(() =>
    this.mode.freelancer() ? FREELANCER_CONTENT : STUDIO_CONTENT
  );

  readonly logo = computed(() => this.content().logo);
  readonly name = computed(() => this.content().name);
  readonly subtitle = computed(() => this.content().subtitle);

  readonly hero = computed<HeroConfig>(() => this.content().hero);
  readonly services = computed(() => this.content().services);
}
