import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListadoSolicitudesComponent} from "./listado-solicitudes/listado-solicitudes.component";

import {ListadoCentrosComponent} from "./listado-centros/listado-centros.component";

const routes: Routes = [
  {path: '', component: ListadoSolicitudesComponent},
  {path: 'centros', component: ListadoCentrosComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
