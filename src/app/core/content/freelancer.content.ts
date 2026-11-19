/**
*Defines the demo content for freelancer websites.
*/
export const FREELANCER_CONTENT = {
  logo: 'assets/img/L&S-Monogram.png',
  name: 'LISA SCHÖNFELD',
  subtitle: 'MAKE-UP ARTISTIN',

  hero: {
    layout: 'portrait' as const,
    image: 'assets/img/hero.png',
    backgroundColor: 'rgb(14, 10, 7)',
    textColor: '#F5EEE5',
    label: 'BEAUTY IS ART.',
    title: 'I enhance beauty.\nI reveal confidence.',
    description: 'Professional makeup \nI for special occasions, \nI photoshoots & events.',
    button: 'MEIN PORTFOLIO'
  },

  services: {
    eyebrow: 'SERVICES',
    title: 'My Range of Services',
    description: 'EVERY LOOK. EVERY MOMENT. UNIQUELY YOU.',
    items: [
      {
        id: 'bridal',
        title: 'BRIDAL',
        description: 'Bridal makeup for your most beautiful day.',
        image: 'assets/img/services/bridal.webp'
      },
      {
        id: 'beauty',
        title: 'BEAUTY',
        description: 'Daytime and evening makeup for every occasion.',
        image: 'assets/img/services/beauty.webp'
      },
      {
        id: 'editorial',
        title: 'EDITORIAL',
        description: 'Creative looks for photoshoots and campaigns.',
        image: 'assets/img/services/editorial.webp'
      },
      {
        id: 'sfx',
        title: 'SFX & CREATIVE',
        description: 'Special effects and creative transformations.',
        image: 'assets/img/services/sfx.webp'
      }
    ]
  }
};