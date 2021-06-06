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
    solicitudesService.getSolicitudes().then((x: any) => {
      console.log(x);
      x.items.forEach((item:any,index:number) =>{
        this.solicitudes.push({
          nombre: item.fields.nombre,
          apellidos: item.fields.apellidos,
          nacimiento: item.fields.nacimiento || new Date(),
          ayuda: item.fields.ayuda,
          tipoSolicitud: item.fields.tipoSolicitud
        });
      });
      console.log("tamaño:"+this.solicitudes.length);
    });
  }

  ngOnInit(): void {
  }
  @Input()
  solicitudes:Solicitud[]=[];
  @Output()
  clickEnElemento = new EventEmitter();

}
