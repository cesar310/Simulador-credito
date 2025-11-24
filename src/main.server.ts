import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';

// The server engine (CommonEngine) will call this exported function with a
// BootstrapContext. Forward that context to `bootstrapApplication` so the
// server platform is used when rendering (fixes NG0401 Missing Platform).
const bootstrap = (context: unknown) => bootstrapApplication(AppComponent, config, context as any);

export default bootstrap;
