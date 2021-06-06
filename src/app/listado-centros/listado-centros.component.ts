import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-centros',
  templateUrl: './listado-centros.component.html',
  styleUrls: ['./listado-centros.component.css']
})
export class ListadoCentrosComponent implements OnInit {

  centros =[{nombre:"Federico García Lorca"},{nombre:"Fernando de Rojas"},{nombre:"Agustinas"}];

  constructor() { }

  ngOnInit(): void {
  }

}
