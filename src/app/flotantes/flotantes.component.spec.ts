import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlotantesComponent } from './flotantes.component';

describe('FlotantesComponent', () => {
  let component: FlotantesComponent;
  let fixture: ComponentFixture<FlotantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlotantesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlotantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
