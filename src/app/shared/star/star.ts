
import { Component, computed, input } from '@angular/core';

/**
*Displays a rating using five proportionally filled stars.
*/
@Component({
  selector: 'app-star',
  imports: [],
  templateUrl: './star.html',
  styleUrl: './star.scss'
})
export class Star {
  readonly rating = input(0);

/**
*Calculates the percentage of filled stars.
*/
  readonly percentage = computed(() => {
    const rating = Math.max(0, Math.min(5, this.rating()));
    return (rating / 5) * 100;
  });

  readonly stars = [1, 2, 3, 4, 5];
}
