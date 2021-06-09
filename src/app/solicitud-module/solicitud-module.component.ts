import {Component, NgModule, OnInit} from '@angular/core';
import {SolicitudComponent} from "../solicitud/solicitud.component";
import {SelectorCentroComponent} from "../selector-centro/selector-centro.component";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";


const routes: Routes = [
  { path: '', component: SolicitudComponent },
];


@NgModule({
  declarations: [SolicitudComponent, SelectorCentroComponent],
  imports: [CommonModule,RouterModule.forChild(routes)],
})
export class SolicitudModule {

}
