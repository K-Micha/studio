import { Injectable, signal } from '@angular/core';

/**
*Provides website content and temporary demo values.
*/
@Injectable({ providedIn: 'root' })
export class WebsiteContentService {
  readonly logo = signal('assets/img/L&S-Monogram.png');
  readonly name = signal('LISA SCHÖNFELD');
  readonly subtitle = signal('MAKE-UP ARTISTIN');
}