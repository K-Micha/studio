import { Component, ElementRef, HostListener, inject, signal } from '@angular/core';
import { WebsiteModeService } from '../../core/website-mode.service';

/**
*Steuert die Einstellungen des StudioFlow-Demo-Asides.
*/
@Component({
  selector: 'app-demo-aside',
  templateUrl: './demo-aside.html',
  styleUrl: './demo-aside.scss'
})
export class DemoAside {
  readonly mode = inject(WebsiteModeService);
  readonly isOpen = signal(false);
  readonly isNear = signal(false);
  readonly serviceCounts = [1, 2, 3, 4, 5, 6, 7, 8];

  private readonly element = inject(ElementRef<HTMLElement>);

  /**
  *Öffnet oder schließt das Demo-Aside.
  */
  toggleAside(): void {
    this.isOpen.update(open => !open);
  }

  /**
  *Aktiviert den Farbverlauf.
  *@param state Zustand der Mausnähe.
  */
  setNear(state: boolean): void {
    this.isNear.set(state);
  }

  /**
  *Ändert die Anzahl der angezeigten Demo-Leistungen.
  *@param count Gewünschte Anzahl.
  */
  setServiceCount(count: number): void {
    if (count < 1 || count > 8) return;
    this.mode.serviceCount.set(count);
  }

  /**
  *Erkennt die Maus im Umkreis von 110 Pixeln.
  *@param event Aktuelle Mausposition.
  */
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    const toggle = this.element.nativeElement.querySelector('.demo-aside__toggle');
    if (!toggle) return;

    const rect = toggle.getBoundingClientRect();
    const dx = Math.max(rect.left - event.clientX, 0, event.clientX - rect.right);
    const dy = Math.max(rect.top - event.clientY, 0, event.clientY - rect.bottom);

    this.isNear.set(Math.hypot(dx, dy) <= 110);
  }
}