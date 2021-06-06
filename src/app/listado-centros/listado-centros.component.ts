import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-centros',
  templateUrl: './listado-centros.component.html',
  styleUrls: ['./listado-centros.component.css']
})
export class ListadoCentrosComponent implements OnInit {

  centros =[{id:1,nombre:"Federico García Lorca"},{id:2,nombre:"Fernando de Rojas"},{id:3,nombre:"Agustinas"}];

  constructor() { }

  ngOnInit(): void {
  }

}
