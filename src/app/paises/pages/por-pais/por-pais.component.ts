import { Component } from '@angular/core';
import { PaisesService } from '../../services/paises.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent{

  termino : string    = '';
  noExiste: string    = '';
  hayError: boolean   = false;
  paises  : Country[] = [];
  paisesSugeridos: Country[] = [];

  constructor( private paisesService: PaisesService) {}

  buscar(termino: string){
    this.hayError = false;
    
    this.termino = termino;
    this.noExiste = this.termino;
    this.paisesService.buscarPais(this.termino)
      .subscribe( (paises) => {
        console.log(paises);
        this.paises = paises;
      }, (err) => {
        this.hayError = true;
      })
  }

  sugerencias(termino: string){
    this.hayError = false;

    this.paisesService.buscarPais(termino)
      .subscribe( paises => this.paisesSugeridos = paises.splice(0,5),
      (err) => this.paisesSugeridos = []
      );
  }

}
