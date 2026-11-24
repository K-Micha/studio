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
        image: 'assets/img/bridal.webp'
      },
      {
        id: 'beauty',
        title: 'BEAUTY',
        description: 'Daytime and evening makeup for every occasion.',
        image: 'assets/img/beauty.webp'
      },
      {
        id: 'editorial',
        title: 'EDITORIAL',
        description: 'Creative looks for photoshoots and campaigns.',
        image: 'assets/img/editorial.webp'
      },
      {
        id: 'sfx',
        title: 'SFX & CREATIVE',
        description: 'Special effects and creative transformations.',
        image: 'assets/img/sfx.webp'
      },
      {
        id: 'eyes',
        title: 'EYES',
        description: 'Expressive eye makeup that makes every glance unforgettable.',
        image: 'assets/img/eyes.webp'
      }
    ]
  },
  about: {
      image: 'assets/img/lisa.png',
      eyebrow: 'ABOUT ME',
      title: "Hi, I'm Lisa",
      description: "I'm a freelance makeup artist with a passion for beauty, individuality and creative expression. I create personalized looks that highlight your natural beauty and reflect your personality – with attention to detail, high-quality products and a professional, relaxed approach.",
      fullDescription: `Every client brings a unique personality and vision.
                        My goal is to create a look that feels authentic, beautiful and
                        comfortable. From the first consultation to the finishing touches,
                        I take the time to understand your wishes and bring them to life.
                        Whether it's your wedding day, a professional photoshoot or a
                        special occasion, I approach every project with creativity,
                        precision and a genuine passion for makeup artistry.`
  }
};