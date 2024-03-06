import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-inicio',
  templateUrl: './modal-inicio.component.html',
  styleUrl: './modal-inicio.component.css',
})
export class ModalInicioComponent implements AfterViewInit {
  @ViewChild('contenido', { static: false }) contenidoModal: any;
  constructor(private modalService: NgbModal) {}
  ngAfterViewInit(): void {
    this.openSM();
  }
  openSM() {
    this.modalService.open(this.contenidoModal, {
      size: 'lg',
      centered: true,
    });
  }
}
