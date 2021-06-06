import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoCentrosComponent } from './listado-centros.component';

describe('ListadoCentrosComponent', () => {
  let component: ListadoCentrosComponent;
  let fixture: ComponentFixture<ListadoCentrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoCentrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoCentrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
