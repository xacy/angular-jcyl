import {Component, NgModule, OnInit} from '@angular/core';
import {SolicitudComponent} from "../solicitud/solicitud.component";
import {SelectorCentroComponent} from "../selector-centro/selector-centro.component";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [SolicitudComponent, SelectorCentroComponent],
  imports: [CommonModule]
})
export class SolicitudModule {

}
