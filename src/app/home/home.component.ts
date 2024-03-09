import { Component } from '@angular/core';
interface Imagenes {
  id: number;
  imageSrc: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  data: Imagenes[] = [
    {
      id: 2,
      imageSrc: 'image17.png',
    },

    {
      id: 4,
      imageSrc: 'image18.png',
    },
    {
      id: 4,
      imageSrc: 'image19.jpeg',
    },
    {
      id: 6,
      imageSrc: 'galery-6.jpg',
    },
    {
      id: 7,
      imageSrc: 'img12.png',
    },
    {
      id: 5,
      imageSrc: 'image22.png',
    },
  ];
}
