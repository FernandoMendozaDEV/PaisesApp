import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-tabla-pais',
  templateUrl: './tabla-pais.component.html',
  styles: [
  ]
})
export class TablaPaisComponent  {

  @Input() paises : Country[] = [];

}
