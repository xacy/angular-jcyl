import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {

  @Input()
  solicitud = {
    nombre: "Javier",
    apellidos: "Prueba",
    fechaNacimiento: new Date()
  };
  @Output()
  eliminarSolicitud = new EventEmitter();
  esLargo=false;


  constructor() {
    /*setInterval(() => {
      this.solicitud.nombre = '' + Math.random();
    }, 2000)*/

  }

  ngOnInit(): void {
  }

  logear(mensaje: any): void{
    console.log("Hola! "+mensaje);
  }
  apellidos($event: KeyboardEvent) {
    const element = $event.target as HTMLInputElement
    this.solicitud.apellidos = element.value;
    /*element.classList.remove("largo");
    element.classList.remove("corto");
    this.solicitud.apellidos.length>5?element.classList.add("largo"):element.classList.add("corto");*/
    this.esLargo=this.solicitud.apellidos.length>5;
  }
  nombre($event: KeyboardEvent) {
    const element = $event.target as HTMLInputElement
    this.solicitud.nombre = element.value;
    element.classList.remove("largo");
    element.classList.remove("corto");
    this.solicitud.nombre.length>5?element.classList.add("largo"):element.classList.add("corto");
  }
  validaciones($event: Event){
    $event.preventDefault();
    console.log("validaciones");
  }
  eliminar($event: Event){
    $event.preventDefault();
    if(this.solicitud!=null){
      this.eliminarSolicitud.emit(this.solicitud);
    }
    else{
      alert("No se ha seleccionado una solicitud");
    }
  }
}
