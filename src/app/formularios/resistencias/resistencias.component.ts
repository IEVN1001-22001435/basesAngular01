import { Component } from '@angular/core';
import { OperacionesResistencias } from './operacionesResistencias';

@Component({
  selector: 'app-resistencias',
  standalone: false,
  templateUrl: './resistencias.component.html',
  styleUrl: './resistencias.component.css'
})
export class ResistenciasComponent {
  seleccion = {
    banda1: 0,
    banda2: 0,
    banda3: 0,
    tolerancia: 0.05
  };

  resultados: any = null;
  
  calculadora = new OperacionesResistencias();

  calcularResistencia() {
    let { banda1, banda2, banda3, tolerancia } = this.seleccion;

    this.resultados = this.calculadora.calcular(banda1, banda2, banda3, tolerancia);
  }
}