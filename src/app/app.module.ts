import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ButtonLayoutComponent } from './button-layout/button-layout.component';
import { BodyContainerComponent } from './button-layout/body-container/body-container.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonLayoutComponent,
    BodyContainerComponent
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
