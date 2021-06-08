import { Component, OnInit ,} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-datos-bancarios',
  templateUrl: './datos-bancarios.component.html',
  styleUrls: ['./datos-bancarios.component.css']
})
export class DatosBancariosComponent implements OnInit {

  f: FormGroup;

  entidades : string='prueba';

  constructor(private formsBuilder: FormBuilder) {
    this.f = formsBuilder.group({ entidad: '', digitoControl: '' });
  }

  ngOnInit(): void {
  }
  submit() {
    console.log(this.f);
    if (this.f.controls.digitoControl.errors) {
      console.log(this.f.controls.digitoControl.errors);
    }
  }
}
