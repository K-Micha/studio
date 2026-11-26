import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { Footer } from './components/footer/footer';
import { Touch } from './animations/touch/touch';
import { DemoAside } from './demo/demo-aside/demo-aside';
import { Icons } from './shared/icons/icons';
import { Services } from './components/services/services';
import { AboutMe } from './components/about-me/about-me';
import { Reviews } from './components/reviews/reviews';

/**
*Defines components shared by all website types.
*/
export const SHARED_IMPORTS = [
    RouterOutlet,
    Header,
    Hero,
    Footer,
    Touch,
    DemoAside,
    Icons
];

/**
*Defines components used by freelancer websites.
*/
export const FREELANCER_IMPORTS = [
    Services,
    AboutMe,
    Reviews
];

/**
*Defines components used by single-studio websites.
*/
export const STUDIO_IMPORTS = [];

/**
*Defines components used by multi-studio websites.
*/
export const MULTI_STUDIO_IMPORTS = [];
