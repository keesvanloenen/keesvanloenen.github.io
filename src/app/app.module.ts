import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CamelCasePipe } from './pipes/camel-case.pipe';

@NgModule({
  declarations: [   // components, pipes, directives
    AppComponent,
    CamelCasePipe
  ],
  imports: [        // modules (met daarin components, pipes, directives)
    BrowserModule,
    FormsModule,
  ],
  providers: [],    // services (dependency injection), globale instellingen
  bootstrap: [AppComponent]
})
export class AppModule { }
