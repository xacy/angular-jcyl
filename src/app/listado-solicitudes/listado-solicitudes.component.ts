import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import {Component, Input, OnInit} from '@angular/core';
import {Solicitud} from "../Solicitud";
import {SolicitudesService} from "../solicitudes.service";

@Component({
  selector: 'app-listado-solicitudes',
  templateUrl: './listado-solicitudes.component.html',
  styleUrls: ['./listado-solicitudes.component.css']
})
export class ListadoSolicitudesComponent implements OnInit {

  constructor(private solicitudesService:SolicitudesService) {
    this.solicitudes = solicitudesService.getSolicitudes();
  }

  ngOnInit(): void {
  }
  @Input()
  solicitudes:any;
  @Output()
  clickEnElemento = new EventEmitter();

}
