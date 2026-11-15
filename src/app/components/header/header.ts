import { Component, inject, signal,HostListener, computed } from '@angular/core';
import { WebsiteModeService } from '../../core/website-mode.service';
import { WebsiteContentService } from '../../core/website-content.service';
import { BurgerAnimation } from './ts/burger';
import { HoverAnimation } from './ts/hover-anim';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './scss/header.scss',
})
export class Header {
  readonly mode = inject(WebsiteModeService);
  readonly burger = new BurgerAnimation();
  readonly hover = new HoverAnimation();
  readonly brand = inject(WebsiteContentService);

  readonly location = signal('Köstendorf');
  readonly locations = computed(() => ['Köstendorf', 'Salzburg', 'Wien'].slice(0, this.mode.locationCount()));
  readonly isLocationOpen = signal(false);

  readonly language = signal('DE');
  readonly languages = signal(['DE', 'EN']);
  readonly isLanguageOpen = signal(false);

/**
*Selects an available website language.
*@param {string} code Language code.
*/
  selectLanguage(code: string): void {
    if (!this.languages().includes(code)) return;
    this.language.set(code);
    this.isLanguageOpen.set(false);
  }

/**
*Selects an available studio location.
*@param {string} name Location name.
*/
  selectLocation(name: string): void {
    if (!this.locations().includes(name)) return;
    this.location.set(name);
    this.isLocationOpen.set(false);
  }

/**
*Closes switchers when clicking outside their areas.
*/
  @HostListener('document:pointerdown', ['$event'])
  onOutsideClick(event: PointerEvent): void {
    const target = event.target;
    if (!(target instanceof Element)) return;

    if (!target.closest('.lang.switcher')) {
      this.isLanguageOpen.set(false);
    }

    if (!target.closest('.location.switcher')) {
      this.isLocationOpen.set(false);
    }
  }
}
