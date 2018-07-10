import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BuyComponent } from './components/buy/buy.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { LowComponent } from './components/boxes/low/low.component';
import { MediumComponent } from './components/boxes/medium/medium.component';
import { HightComponent } from './components/boxes/hight/hight.component';
import { FaqComponent } from './components/faq/faq.component';
import { ShowRaoninosComponent } from './components/show-raoninos/show-raoninos.component';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BuyComponent,
    NavbarComponent,
    LowComponent,
    MediumComponent,
    HightComponent,
    FaqComponent,
    ShowRaoninosComponent
  ],
  imports: [
    routing,
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
