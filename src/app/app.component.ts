import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-jcyl';
  solicitudes = [ {
    nombre: "Javier",
    apellidos: "Prueba",
    fechaNacimiento: new Date()
  },
    {
      nombre: "Javier2",
      apellidos: "Prueba2",
      fechaNacimiento: new Date()
    }
  ];
  solicitudSeleccionada: any;

  tratarClick($event: any){
    this.solicitudSeleccionada=$event;
  }
  eliminarSolicitud($event: any){
      this.solicitudes.forEach( (solicitud, index) => {
        if(solicitud === $event) this.solicitudes.splice(index,1);
      });
  }
}
