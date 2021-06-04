import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-centro',
  template: `Solicitud para el centro: {{centro.nombreCentro}}`,
  styleUrls: ['./centro.component.css']
})
export class CentroComponent implements OnInit {

  centro = {
    nombreCentro: "IES García Lorca"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
