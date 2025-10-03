import { Component } from '@angular/core';
import { OperacionesDistancia } from './operacionesDistancias'; 

@Component({
  selector: 'app-distancias',
  standalone: false,
  templateUrl: './distancias.component.html',
  styleUrls: ['./distancias.component.css']
})
export class DistanciasComponent {
  punto = {
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 0,
  };

  distanciaResultado: number=0;
  
  calculadora = new OperacionesDistancia();

  calcular() {
    let x1;
    let y1;
    let x2;
    let y2;

    x1 = Number(this.punto.x1);
    y1 = Number(this.punto.y1);
    x2 = Number(this.punto.x2);
    y2 = Number(this.punto.y2);
    
    this.distanciaResultado = this.calculadora.calcularDistancia(x1, y1, x2, y2);
}
}