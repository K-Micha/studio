import { Component, inject } from '@angular/core';
import { WebsiteModeService } from '../../core/website-mode.service';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
   readonly mode = inject(WebsiteModeService);
}
