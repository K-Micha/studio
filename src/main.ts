import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { registerLicense } from './app/license';

registerLicense();

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
