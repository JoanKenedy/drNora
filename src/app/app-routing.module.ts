import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RemocionAmalgamasComponent } from './remocion-amalgamas/remocion-amalgamas.component';
import { OzonoterapiaDentalComponent } from './ozonoterapia-dental/ozonoterapia-dental.component';
import { BlanqueamientoOzonoComponent } from './blanqueamiento-ozono/blanqueamiento-ozono.component';
import { LaserTerapeuticoComponent } from './laser-terapeutico/laser-terapeutico.component';

const routes: Routes = [
  // Estas son las rutas de nuestra aplicación
  { path: '', component: HomeComponent },
  { path: 'remocion-amalgamas', component: RemocionAmalgamasComponent },
  { path: 'ozonoterapia-dental', component: OzonoterapiaDentalComponent },
  { path: 'blanqueamiento-ozono', component: BlanqueamientoOzonoComponent },
  { path: 'laser-terapeutico', component: LaserTerapeuticoComponent },

  // Esta objeto redirecciona a una ruta especifica cuando no encuentra una ruta específica
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
