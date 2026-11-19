/**
*Defines the demo content for studio websites.
*/
export const STUDIO_CONTENT = {
  logo: 'assets/img/L&S-Monogram.png',
  name: 'STUDIO DEMO',
  subtitle: 'HAIR & BEAUTY',

  hero: {
    layout: 'layer' as const,
    image: 'assets/img/hero.png',
    backgroundColor: 'rgb(14, 10, 7)',
    textColor: '#F5EEE5',
    label: '',
    title: 'Köstendorf',
    description: 'Dein Friseursalon.\nPersönlich. Modern. Nah.',
    button: 'TERMIN BUCHEN'
  },

  services: {
    eyebrow: 'SERVICES',
    title: 'Our Services',
    description: 'YOUR STYLE. OUR PASSION.',
    items: [
      {
        id: 'haircut',
        title: 'HAIRCUT & STYLING',
        description: 'Personalized cuts and styling for every occasion.',
        image: 'assets/img/services/haircut.webp'
      },
      {
        id: 'color',
        title: 'HAIR COLOR',
        description: 'Professional coloring and individual color concepts.',
        image: 'assets/img/services/color.webp'
      },
      {
        id: 'treatment',
        title: 'HAIR TREATMENTS',
        description: 'Professional care for healthy and beautiful hair.',
        image: 'assets/img/services/treatment.webp'
      },
      {
        id: 'bridal-styling',
        title: 'BRIDAL STYLING',
        description: 'Elegant hairstyles for your special day.',
        image: 'assets/img/services/bridal-styling.webp'
      }
    ]
  }
};