import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RemocionesComponent } from './remociones/remociones.component';

const routes: Routes = [
  // Estas son las rutas de nuestra aplicación
  { path: '', component: HomeComponent },
  { path: 'remocion', component: RemocionesComponent },
  // Esta objeto redirecciona a una ruta especifica cuando no encuentra una ruta específica
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
