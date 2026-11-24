import { Component, inject } from '@angular/core';
import { WebsiteModeService } from './core/website-mode.service';
import { WebsiteContentService } from './core/website-content.service';
import { SHARED_IMPORTS, FREELANCER_IMPORTS } from './imports';

/**
*Root component of the StudioFlow website.
*/
@Component({
  selector: 'app-root',
  imports: [
    ...SHARED_IMPORTS,
    ...FREELANCER_IMPORTS
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  readonly mode = inject(WebsiteModeService);
  readonly content = inject(WebsiteContentService);
}