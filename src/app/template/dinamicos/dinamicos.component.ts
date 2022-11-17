import { Component, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;

}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent  {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  nuevoJuego: string = '';

  persona: Persona = {
    nombre: 'Irati',
    favoritos: [
      {id: 1, nombre: 'Alan Wake'},
      {id: 1, nombre: 'P.T.'},
      {id: 1, nombre: 'Alien Isolation'}
    ]
  }

  valido() {
    return this.miFormulario?.controls['nombre']?.errors &&
           this.miFormulario?.controls['nombre'].touched;
  }

  agregarJuego() {
    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego
    }

    this.persona.favoritos.push({...nuevoFavorito});
    this.nuevoJuego = '';
  }

  eliminar(index: number) {
    this.persona.favoritos.splice(index, 1);
  }

  guardar() {
    console.log('formulario posteado');
  }

}
