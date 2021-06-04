import { Component } from '@angular/core';
import {SolicitudesService} from "./solicitudes.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-jcyl';
  solicitudes = [];
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
    this.solicitudes=solicitudesService.getSolicitudes();
  }
}
