import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListadoSolicitudesComponent} from "./listado-solicitudes/listado-solicitudes.component";

import {ListadoCentrosComponent} from "./listado-centros/listado-centros.component";
import {CentroComponent} from "./centro/centro.component";
import {DatosBancariosComponent} from "./datos-bancarios/datos-bancarios.component";
import {RouteActivateGuardGuard} from "./route-activate-guard.guard";

const routes: Routes = [
  {path: '', component: ListadoSolicitudesComponent},
  {path: 'centros', component: ListadoCentrosComponent, canActivate: [RouteActivateGuardGuard]},
  {path: 'entidades', component: DatosBancariosComponent},
  {path: 'centros/:centroId', component: CentroComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
