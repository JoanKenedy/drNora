import { Component } from '@angular/core';

@Component({
  selector: 'app-ozonoterapia-dental',
  templateUrl: './ozonoterapia-dental.component.html',
  styleUrl: './ozonoterapia-dental.component.css',
})
export class OzonoterapiaDentalComponent {
  image = false;
  imagen() {
    this.image = !this.image;
  }
  imgCerrar() {
    this.image = false;
  }
}
