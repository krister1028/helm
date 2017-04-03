import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { HelmModule } from './app/helm.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(HelmModule);
