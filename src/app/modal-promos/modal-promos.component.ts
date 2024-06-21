import {
  animate,
  style,
  transition,
  trigger,
  AnimationEvent,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-promos',
  templateUrl: './modal-promos.component.html',
  styleUrl: './modal-promos.component.css',
  animations: [
    trigger('animation', [
      transition('void => visible', [
        style({ transform: 'scale(0.5)' }),
        animate('150ms', style({ transform: 'scale(1)' })),
      ]),
      transition('visible => void', [
        style({ transform: 'scale(1)' }),
        animate('150ms', style({ transform: 'scale(0.5)' })),
      ]),
    ]),
    trigger('animation2', [
      transition(':leave', [
        style({ opacity: 1 }),
        animate('50ms', style({ opacity: 0.8 })),
      ]),
    ]),
  ],
})
export class ModalPromosComponent implements OnInit {
  abrirModal = false;
  ngOnInit(): void {}
  ngAfterViewInit() {
    setTimeout(() => {
      this.abrirModal = true;
    }, 6000);
  }

  cerrarModal() {
    this.abrirModal = false;
  }
  onAnimationEnd(event: AnimationEvent) {
    if (event.toState === 'void') {
      this.abrirModal = false;
    }
  }
}
