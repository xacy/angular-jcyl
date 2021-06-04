import { Component } from '@angular/core';
import {SolicitudesService} from "./solicitudes.service";
import {Solicitud} from "./Solicitud";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-jcyl';
  solicitudes :Solicitud[] = [];
  solicitudSeleccionada: any;

  tratarClick($event: any){
    this.solicitudSeleccionada=$event;
  }
  eliminarSolicitud($event: any){
      this.solicitudes.forEach( (solicitud, index) => {
        if(solicitud === $event) this.solicitudes.splice(index,1);
      });
  }

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
}
