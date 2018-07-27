import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DotdataanalyticstreeModule } from './dotdataanalyticstree.module';

document.addEventListener('DOMContentLoaded', () => {
  platformBrowserDynamic()
    .bootstrapModule(DotdataanalyticstreeModule)
    .catch(err => console.error(err));
});
