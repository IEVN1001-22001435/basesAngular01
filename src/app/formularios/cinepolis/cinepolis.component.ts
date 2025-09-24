import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css'],
  standalone: false
})
export class CinepolisComponent {

  nombre: string = '';
  cantidadCompradores: number = 0;
  cantidadBoletos: number = 0;
  tieneTarjetaCineco: boolean = false;
  totalAPagar: number = 0;

  private precioBoleto: number = 12; 
  
  calcularCosto(): void {
  
    const maxBoletosPermitidos = this.cantidadCompradores * 7;
    if (this.cantidadBoletos > maxBoletosPermitidos) {
      alert(`Excede el máximo permitido de boletos. Solo 7 por comprador:)`);
      this.totalAPagar = 0;
      return;
    }

    let subtotal = this.cantidadBoletos * this.precioBoleto;
    let descuentoBoletos = 0;

  
    if (this.cantidadBoletos > 5) {
      descuentoBoletos = 0.15;
    
    } else if (this.cantidadBoletos >= 3 && this.cantidadBoletos <= 5) {
      descuentoBoletos = 0.10;
    }
    

    let totalConDescuentoBoletos = subtotal - (subtotal * descuentoBoletos);

    if (this.tieneTarjetaCineco) {
      let descuentoCineco = 0.10;
      this.totalAPagar = totalConDescuentoBoletos - (totalConDescuentoBoletos * descuentoCineco);
    } else {
      this.totalAPagar = totalConDescuentoBoletos;
    }
  }


  limpiar(): void {
    this.nombre = '';
    this.cantidadCompradores = 0;
    this.cantidadBoletos = 0;
    this.tieneTarjetaCineco = false;
    this.totalAPagar = 0;
  }
}