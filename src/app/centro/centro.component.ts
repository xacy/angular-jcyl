import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-centro',
  template: `Solicitud para el centro: {{centro.nombreCentro}}`,
  styleUrls: ['./centro.component.css']
})
export class CentroComponent implements OnInit {

  @Input()
  centro: Centros = {nombreCentro: "Prueba",direccionCentro:"Valor defecto"};

  constructor() { }

  ngOnInit(): void {
  }

}
export interface Centros{
  nombreCentro:String;
  direccionCentro:String;
}
