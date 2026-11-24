type HeroMedia =
  | { layout: 'portrait' | 'layer'; image: string }
  | { layout: 'video'; video: string; image?: string };

/**Defines the hero copy, theme and media. For videos, image is the optional poster.*/
export type HeroConfig = HeroMedia & {
  backgroundColor: string;
  textColor: string;
  label: string;
  title: string;
  description: string;
  button: string;
};
