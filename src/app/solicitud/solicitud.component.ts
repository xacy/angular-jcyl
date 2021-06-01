import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {

  solicitud = {
    nombre: "Javier",
    apellidos: "Prueba"
  };

  constructor() {
    setInterval(() => {
      this.solicitud.nombre = '' + Math.random();
    }, 2000)

  }

  ngOnInit(): void {
  }

  logear(mensaje: any): void{
    console.log("Hola! "+mensaje);
  }
  apellidos($event: KeyboardEvent) {
    const element = $event.target as HTMLInputElement
    this.solicitud.apellidos = element.value;
    element.classList.remove("largo");
    element.classList.remove("corto");
    this.solicitud.apellidos.length>5?element.classList.add("largo"):element.classList.add("corto");

  }
  nombre($event: KeyboardEvent) {
    const element = $event.target as HTMLInputElement
    this.solicitud.nombre = element.value;
    element.classList.remove("largo");
    element.classList.remove("corto");
    this.solicitud.nombre.length>5?element.classList.add("largo"):element.classList.add("corto");
  }
}
