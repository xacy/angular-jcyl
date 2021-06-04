import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SolicitudesService {

  constructor() { }

  getSolicitudes():any{
    return [{
      nombre: "Javier",
      apellidos: "Prueba",
      fechaNacimiento: new Date()
      }, {
      nombre: "Javier2",
      apellidos: "Prueba2",
      fechaNacimiento: new Date()
      }];
  }
}
