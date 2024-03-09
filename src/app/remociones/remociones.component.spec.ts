import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemocionesComponent } from './remociones.component';

describe('RemocionesComponent', () => {
  let component: RemocionesComponent;
  let fixture: ComponentFixture<RemocionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RemocionesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RemocionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
