import { computed, inject, Injectable } from '@angular/core';
import { WebsiteModeService } from './website-mode.service';

/**
*Provides website branding and hero content.
*/
@Injectable({ providedIn: 'root' })
export class WebsiteContentService {
  private readonly mode = inject(WebsiteModeService);

  private readonly freelancerData = {
    logo: 'assets/img/L&S-Monogram.png',
    name: 'LISA SCHÖNFELD',
    subtitle: 'MAKE-UP ARTISTIN',
    hero: {
      layout: 'portrait' as const,
      image: 'assets/img/hero.png',
      backgroundColor: 'rgb(14, 10, 7)',
      textColor: '#F5EEE5',
      label: 'BEAUTY IS ART.',
      title: 'I enhance beauty.\nI reveal confidence.',
      description: 'Professional makeup \nI for special occasions, \nI photoshoots & events.',
      button: 'MEIN PORTFOLIO'
    }
  };

  private readonly studioData = {
    logo: 'assets/img/L&S-Monogram.png',
    name: 'STUDIO DEMO',
    subtitle: 'HAIR & BEAUTY',
    hero: {
      layout: 'layer' as const,
      image: 'assets/img/hero.png',
      backgroundColor: 'rgb(14, 10, 7)',
      textColor: '#F5EEE5',
      label: '',
      title: 'Köstendorf',
      description: 'Dein Friseursalon.\nPersönlich. Modern. Nah.',
      button: 'TERMIN BUCHEN'
    }
  };

  readonly content = computed(() =>
    this.mode.freelancer() ? this.freelancerData : this.studioData
  );

  readonly logo = computed(() => this.content().logo);
  readonly name = computed(() => this.content().name);
  readonly subtitle = computed(() => this.content().subtitle);

  readonly hero = computed(() => this.content().hero);
}
