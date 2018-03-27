import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { GettingStartedComponent } from './components/getting-started/getting-started.component';
import { FirstPageComponent } from './components/getting-started/first-page/first-page.component';
import { SecondPageComponent } from './components/getting-started/second-page/second-page.component';
import { ThirdPageComponent } from './components/getting-started/third-page/third-page.component';
import { SliderComponent } from './components/getting-started/slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    GettingStartedComponent,
    FirstPageComponent,
    SecondPageComponent,
    ThirdPageComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
