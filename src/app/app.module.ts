import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ErrorCodeMapper } from './services/error-code-mapper.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    ErrorCodeMapper
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
