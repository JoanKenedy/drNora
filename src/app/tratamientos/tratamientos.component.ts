import { Component } from '@angular/core';

interface Tratamientos {
  id: number;
  title: string;
  imgSrc: string;
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
    { id: 15, title: 'Coronas', imgSrc: 'coronas.svg' },
    { id: 16, title: 'Limpieza', imgSrc: 'limpieza.svg' },
    { id: 17, title: 'Estética Dental', imgSrc: 'sonrisa.svg' },
    { id: 18, title: 'Cirugía oral y Maxilofacial', imgSrc: 'boca.svg' },
    { id: 19, title: 'Periodoncia', imgSrc: 'cena.svg' },
  ];

  showServices() {
    this.showServicios = !this.showServicios;
    this.isTexto = !this.isTexto;
  }
}
