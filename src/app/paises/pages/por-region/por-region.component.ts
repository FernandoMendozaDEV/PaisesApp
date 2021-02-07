import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent {

  regiones: string[]  = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises  : Country[] = [];
  
  constructor( private paisesService: PaisesService) { }

  activarRegion(region:string){
    this.regionActiva = region;

    this.paisesService.buscarRegion(region)
      .subscribe( (paises) => {
        this.paises = paises;
      }, (err) => {
        console.log(err);
      })

  }

}
