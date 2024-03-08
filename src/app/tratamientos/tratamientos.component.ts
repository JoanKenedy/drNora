import { Component } from '@angular/core';

interface Tratamientos {
  id: number;
  title: string;
}

@Component({
  selector: 'app-tratamientos',
  templateUrl: './tratamientos.component.html',
  styleUrl: './tratamientos.component.css',
})
export class TratamientosComponent {
  showServicios = false;
  isTexto = true;

  Datos: Tratamientos[] = [
    { id: 15, title: 'Ortodoncia' },
    { id: 16, title: 'Prótesis' },
    { id: 17, title: 'Periodoncia' },
    { id: 18, title: 'Odontopediatría' },
    { id: 19, title: 'Cirugía Oral' },
  ];

  showServices() {
    this.showServicios = !this.showServicios;
    this.isTexto = !this.isTexto;
  }
}
