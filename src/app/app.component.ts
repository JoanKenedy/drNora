import { Component } from '@angular/core';
interface Imagenes {
  id: number;
  imageSrc: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'sitioDraNora';
  data: Imagenes[] = [
    {
      id: 1,
      imageSrc: 'galery-1.jpg',
    },
    {
      id: 2,
      imageSrc: 'galery-2.jpg',
    },
    {
      id: 3,
      imageSrc: 'galery-3.jpg',
    },
    {
      id: 4,
      imageSrc: 'galery-4.jpg',
    },
    {
      id: 5,
      imageSrc: 'galery-5.jpg',
    },
    {
      id: 6,
      imageSrc: 'galery-6.jpg',
    },
    {
      id: 7,
      imageSrc: 'galery-7.jpg',
    },
    {
      id: 8,
      imageSrc: 'galery-8.jpg',
    },
    {
      id: 9,
      imageSrc: 'galery-9.jpg',
    },
  ];
}
