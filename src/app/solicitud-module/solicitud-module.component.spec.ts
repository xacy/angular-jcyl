import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudModuleComponent } from './solicitud-module.component';

describe('SolicitudModuleComponent', () => {
  let component: SolicitudModuleComponent;
  let fixture: ComponentFixture<SolicitudModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
