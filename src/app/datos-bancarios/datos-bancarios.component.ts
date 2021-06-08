import { Component, OnInit ,} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-datos-bancarios',
  templateUrl: './datos-bancarios.component.html',
  styleUrls: ['./datos-bancarios.component.css']
})
export class DatosBancariosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  submit(f:any) {
    console.log(f);
    if (f.controls.DigitoControl.errors) {
      console.log(f.controls.DigitoControl.errors);
    }
  }
}
