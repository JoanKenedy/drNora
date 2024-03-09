import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css',
})
export class ServiciosComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {}
  amalgamas() {
    this.router.navigate(['remocion']);
  }
}
