import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selector-centro',
  templateUrl: './selector-centro.component.html',
  styleUrls: ['./selector-centro.component.css']
})
export class SelectorCentroComponent implements OnInit {

  centros =[{nombre:"Federico García Lorca"},{nombre:"Fernando de Rojas"},{nombre:"Agustinas"}];
  centrosFiltrados:any;
  constructor() { }

  ngOnInit(): void {
  }
  centro($event: KeyboardEvent){
    const element = $event.target as HTMLInputElement
    this.centrosFiltrados = [...this.centros].filter(centro =>
    centro.nombre.includes(element.value))
  }

}
