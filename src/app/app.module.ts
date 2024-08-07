import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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

import { BlanqueamientoOzonoComponent } from './blanqueamiento-ozono/blanqueamiento-ozono.component';
import { LaserTerapeuticoComponent } from './laser-terapeutico/laser-terapeutico.component';
import { FlotantesComponent } from './flotantes/flotantes.component';
import { ModalPromosComponent } from './modal-promos/modal-promos.component';
import { OpinionesComponent } from './opiniones/opiniones.component';
import { NeurofocalComponent } from './neurofocal/neurofocal.component';

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
    BlanqueamientoOzonoComponent,
    LaserTerapeuticoComponent,
    FlotantesComponent,
    ModalPromosComponent,
    OpinionesComponent,
    NeurofocalComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgFor, BrowserAnimationsModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
