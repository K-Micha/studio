import { Component, inject } from '@angular/core';
import { WebsiteContentService } from '../../core/website-content.service';
import { WebsiteModeService } from '../../core/website-mode.service';

/**
*Displays the website hero section.
*/
@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  readonly content = inject(WebsiteContentService);
  readonly mode = inject(WebsiteModeService);
  readonly hero = this.content.hero;
}