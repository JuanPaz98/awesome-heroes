import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListOfHeroesComponent } from './components/list-of-heroes/list-of-heroes.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroeDetailComponent } from './components/heroe-detail/heroe-detail.component';
import { HeroeCardComponent } from './components/heroe-card/heroe-card.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    ListOfHeroesComponent,
    FooterComponent,
    HeroeDetailComponent,
    HeroeCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
