import { Component, inject, signal } from '@angular/core';
import { WebsiteContentService } from '../../core/website-content.service';

const TABLET_QUERY = '(min-width: 601px) and (max-width: 1199px)';

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
  readonly animating = signal(false);

/**
*Toggles the extended profile description.
*/
  toggleDetails(): void {
    if (this.animating()) return;
    this.expanded.update(value => !value);
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    this.animating.set(true);
  }

/**
*Unlocks the button after the final relevant transition.
*@param event - Completed CSS transition.
*/
  onAnimationEnd(event: TransitionEvent): void {
    if (!this.animating()) return;
    if (event.target !== event.currentTarget) return;
    if (!this.isFinalTransition(event)) return;
    this.animating.set(false);
  }

/**
*Identifies the final transition for the current layout.
*@param event - Completed CSS transition.
*@returns Whether the complete animation has finished.
*/
  private isFinalTransition(event: TransitionEvent): boolean {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return false;
    if (matchMedia(TABLET_QUERY).matches && !this.expanded()) {
      return target.classList.contains('profile__visual')
        && event.propertyName === 'opacity';
    }
    return target.classList.contains('profile__details')
      && event.propertyName === 'grid-template-rows';
  }
}
