/**
*Represents a customer review.
*/
export interface Review {
  id: number;
  name: string;
  initials: string;
  service: string;
  rating: number;
  text: string;
}

/**
*Provides five demo reviews for the freelancer website.
*/
export const DEMO_REVIEWS: Review[] = [
  {
    id: 1,
    name: 'Sophie K.',
    initials: 'SK',
    service: 'Bridal Makeup',
    rating: 5,
    text: 'Lisa made me feel so beautiful and confident on my wedding day. The look was exactly what I imagined – timeless, elegant and long-lasting!'
  },
  {
    id: 2,
    name: 'Laura M.',
    initials: 'LM',
    service: 'Beauty Makeup',
    rating: 5,
    text: 'A truly professional and warm experience. Lisa understands what suits you and enhances your natural beauty perfectly. I will definitely book again!'
  },
  {
    id: 3,
    name: 'Maya R.',
    initials: 'MR',
    service: 'Editorial Makeup',
    rating: 5,
    text: 'Incredible creativity and attention to detail. The look was bold, unique and absolutely stunning – exactly what our photoshoot needed.'
  },
  {
    id: 4,
    name: 'Emma L.',
    initials: 'EL',
    service: 'SFX & Creative',
    rating: 4,
    text: 'Lisa brought our creative concept to life with impressive precision. The results looked fantastic both on set and in the final photos.'
  },
  {
    id: 5,
    name: 'Anna B.',
    initials: 'AB',
    service: 'Bridal Makeup',
    rating: 5,
    text: 'From the first consultation to the final touch, everything felt relaxed and professional. My makeup stayed beautiful throughout the entire celebration.'
  }
];
