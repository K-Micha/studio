import { Component, inject, signal, computed } from '@angular/core';
import { WebsiteModeService } from '../../core/website-mode.service';
import { BurgerAnimation } from './burger';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './scss/header.scss',
})
export class Header {
  readonly mode = inject(WebsiteModeService);
  readonly burger = new BurgerAnimation();

  readonly location = signal('Köstendorf');
  readonly locations = computed(() =>
    ['Köstendorf', 'Salzburg', 'Wien'].slice(0, this.mode.locationCount())
  );
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
}
