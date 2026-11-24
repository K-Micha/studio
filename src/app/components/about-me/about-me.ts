import { Component, inject, signal } from '@angular/core';
import { WebsiteContentService } from '../../core/website-content.service';

/**
*Displays the expandable freelancer profile section.
*/
@Component({
  selector: 'app-about-me',
  imports: [],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss'
})
export class AboutMe {
  private readonly content = inject(WebsiteContentService);

  readonly profile = this.content.about;
  readonly expanded = signal(false);

  /**
  *Toggles the extended profile description.
  */
  toggleDetails(): void {
    this.expanded.update(value => !value);
  }
}
