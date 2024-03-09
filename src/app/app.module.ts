import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { NgFor } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { TratamientosComponent } from './tratamientos/tratamientos.component';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { FooterComponent } from './footer/footer.component';
import { PromocionesComponent } from './promociones/promociones.component';
import { GaleryComponent } from './galery/galery.component';
import { InicioComponent } from './inicio/inicio.component';
import { RemocionAmalgamasComponent } from './remocion-amalgamas/remocion-amalgamas.component';
import { HomeComponent } from './home/home.component';
import { RemocionesComponent } from './remociones/remociones.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    ServiciosComponent,
    TratamientosComponent,
    PreguntasComponent,
    FooterComponent,
    PromocionesComponent,
    GaleryComponent,
    InicioComponent,
    RemocionAmalgamasComponent,
    HomeComponent,
    RemocionesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgFor, BrowserAnimationsModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
