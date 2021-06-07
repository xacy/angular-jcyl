import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SolicitudesService {

  constructor(private httpClient:HttpClient) {

  }

  getSolicitudes():any{
    /*return [{
      nombre: "Javier",
      apellidos: "Prueba",
      fechaNacimiento: new Date()
      }, {
      nombre: "Javier2",
      apellidos: "Prueba2",
      fechaNacimiento: new Date()
      }];*/
    const accessToken = 'w553KmY_mhtkpRngkuh6qoYMPc-McVjwAjSNbQ0IxNs';
    return this.httpClient.get(
      `https://cdn.contentful.com/spaces/im9x7su136k8/environments/master/entries?access_token=${accessToken}`)
      .toPromise().then(
        (x: any) => {
          x.items.map((data: any) => data.fields);
        }
      );

  }
}
