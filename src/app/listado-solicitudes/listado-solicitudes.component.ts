import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import {Component, Input, OnInit} from '@angular/core';
import {Solicitud} from "../Solicitud";

@Component({
  selector: 'app-listado-solicitudes',
  templateUrl: './listado-solicitudes.component.html',
  styleUrls: ['./listado-solicitudes.component.css']
})
export class ListadoSolicitudesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input()
  solicitudes:Solicitud[]=[];
  @Output()
  clickEnElemento = new EventEmitter();

}
