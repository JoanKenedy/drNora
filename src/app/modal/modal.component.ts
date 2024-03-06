import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent implements AfterViewInit {
  openModal: boolean = false;
  ngAfterViewInit() {
    this.openLg();
  }

  constructor() {}
  openLg() {
    setTimeout(() => {
      this.openModal = true;
    }, 2000);
  }
  closeModal() {
    this.openModal = false;
  }
}
