import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit{

  miFormulario: FormGroup = this.formBuilder.group({
    genero: ['M', Validators.required],
    notificaciones: [true, Validators.required],
    terminos: [false, Validators.requiredTrue]
  });

  persona = {
    genero: 'F',
    notificaciones: true,
  }

  constructor(private formBuilder: FormBuilder) { }
  
  ngOnInit() {
    this.miFormulario.reset({
      ...this.persona,
      terminos: false
    });

    this.miFormulario.valueChanges.subscribe(({condiciones, ...rest}) => {
      this.persona = rest;
    })
  }

  guardar() {
    const formValue = {...this.miFormulario.value};
    delete formValue.terminos;

    this.persona = formValue;
  }
}
