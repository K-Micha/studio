import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { Footer } from './components/footer/footer';
import { WebsiteModeService } from './core/website-mode.service';
import { WebsiteContentService } from './core/website-content.service';
import { Touch } from './animations/touch/touch';

/**
*Root component of the StudioFlow website.
*/
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Hero, Footer, Touch],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  readonly mode = inject(WebsiteModeService);
  readonly content = inject(WebsiteContentService);
}