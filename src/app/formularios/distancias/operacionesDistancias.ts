export class OperacionesDistancia {

  calcularDistancia(
    x1: number, 
    y1: number, 
    x2: number, 
    y2: number):number
  {
    let difX = x2 - x1;
    let difY = y2 - y1;
    
    let difX_cuadrado = difX * difX; 
    let difY_cuadrado = difY * difY; 

    let suma_cuadrados = difX_cuadrado + difY_cuadrado;
    let distancia = Math.sqrt(suma_cuadrados);

    return distancia;
  }
}