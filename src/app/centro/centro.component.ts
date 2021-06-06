import { Component, Input, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-centro',
  templateUrl: './centro.component.html',
  styleUrls: ['./centro.component.css']
})
export class CentroComponent implements OnInit {

  nombreCentro:any;

  constructor(private route: ActivatedRoute) {

  }


  ngOnInit(): void {
    this.route.params.subscribe(
      params => this.nombreCentro = params.centroId
    )
  }

}
export interface Centros{
  nombreCentro:String;
  direccionCentro:String;
}
