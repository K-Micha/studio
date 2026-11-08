import { computed, Injectable, signal } from '@angular/core';

export type BusinessType = 'freelancer' | 'studio';

/**
*Manages the global website display modes.
*/
@Injectable({
  providedIn: 'root'
})
export class WebsiteModeService {
  readonly businessType = signal<BusinessType>('freelancer');
  readonly isDemo = signal(false);

  readonly freelancer = computed(() => this.businessType() === 'freelancer');
  readonly studio = computed(() => this.businessType() === 'studio');
  readonly demo = this.isDemo.asReadonly();
}