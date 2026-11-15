import { Injectable, signal } from '@angular/core';

/**
*Provides website content and temporary demo values.
*/
@Injectable({ providedIn: 'root' })
export class WebsiteContentService {
  readonly logo = signal('assets/img/mk-monogramm.png');
  readonly name = signal('LISA SCHÖNFELD');
  readonly subtitle = signal('MAKE-UP ARTISTIN');
}