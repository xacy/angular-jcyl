import { EventEmitter, Output } from '@angular/core';
import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-fila-listado',
  templateUrl: './fila-listado.component.html',
  styleUrls: ['./fila-listado.component.css']
})
export class FilaListadoComponent implements OnInit {

  @Input() solicitudes: any=[];
  @Output() solicitudClick = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

}
