import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { Footer } from './components/footer/footer';
import { WebsiteModeService } from './core/website-mode.service';

/**
*Root component of the StudioFlow website.
*/
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Hero, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  readonly mode = inject(WebsiteModeService);
}