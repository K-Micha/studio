
import { Component, computed } from '@angular/core';
import { DEMO_REVIEWS } from './demo';
import { Star } from '../../shared/star/star';

/**
*Displays customer reviews and their average rating.
*/
@Component({
  selector: 'app-reviews',
  imports: [Star],
  templateUrl: './reviews.html',
  styleUrl: './reviews.scss'
})
export class Reviews {
  readonly reviews = DEMO_REVIEWS;

/**
*Calculates the average rating of all demo reviews.
*/
  readonly ergebniss = computed(() => {
    const total = this.reviews.reduce((sum, review) => sum + review.rating, 0);
    return this.reviews.length ? total / this.reviews.length : null;
  });

  readonly totalReviews = this.reviews.length;
}
