import { Component, OnInit ,} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-datos-bancarios',
  templateUrl: './datos-bancarios.component.html',
  styleUrls: ['./datos-bancarios.component.css']
})
export class DatosBancariosComponent implements OnInit {

  f: FormGroup;

  entidades : string='prueba';

  constructor(private formsBuilder: FormBuilder) {
    this.f = formsBuilder.group({
      entidad:  [ '', [Validators.required, this.myValidator]],
      digitoControl: '' });
  }

  ngOnInit(): void {
  }

  myValidator(formControl: FormControl) {
    console.log(formControl);
    if(formControl.value){
      console.log("valido");
    }
    else{
      console.log("invalido");
    }
    return !formControl.value ? { InvalidValue: true } : {};
  }


  submit() {
    console.log(this.f);
    if (this.f.controls.digitoControl.errors) {
      console.log(this.f.controls.digitoControl.errors);
    }
  }
}
