import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { CentroComponent } from './centro/centro.component';
import { SelectorCentroComponent } from './selector-centro/selector-centro.component';
import { ListadoSolicitudesComponent } from './listado-solicitudes/listado-solicitudes.component';
import { FilaListadoComponent } from './fila-listado/fila-listado.component';
import {HttpClientModule} from "@angular/common/http";
import { ListadoCentrosComponent } from './listado-centros/listado-centros.component';
import {SolicitudModule} from './solicitud-module/solicitud-module.component';
import { DatosBancariosComponent } from './datos-bancarios/datos-bancarios.component';
import { ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CentroComponent,
    ListadoSolicitudesComponent,
    FilaListadoComponent,
    ListadoCentrosComponent,
    DatosBancariosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SolicitudModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
