import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilaListadoComponent } from './fila-listado.component';

describe('FilaListadoComponent', () => {
  let component: FilaListadoComponent;
  let fixture: ComponentFixture<FilaListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilaListadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilaListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
