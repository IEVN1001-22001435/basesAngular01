export class OperacionesResistencias {

  calcular(
    banda1: number, 
    banda2: number, 
    banda3: number, 
    tolerancia: number) {

    let colores = [
      "Negra", "Café", "Roja", "Naranja", "Amarilla", 
      "Verde", "Azul", "Morada", "Gris", "Blanca"
    ];
    
   
    let multiplicador = Math.pow(10, banda3);

   
    let valorBase = (banda1 * 10 + banda2) * multiplicador;
    
 
    let variacion = valorBase * tolerancia;
    let valorMinimo = valorBase - variacion;
    let valorMaximo = valorBase + variacion;

    let colorTolerancia: string;
    
    if (tolerancia === 0.05) {
      colorTolerancia = 'Dorada 5%';
    } else if (tolerancia === 0.10) {
      colorTolerancia = 'Plateado 10%';
    } else {
      colorTolerancia = 'Indefinida';
    }

  
    return {
      color1: colores[banda1],
      color2: colores[banda2],
      color3: colores[banda3], 
      tolerancia: colorTolerancia,
      valor: valorBase,
      valorMaximo: valorMaximo,
      valorMinimo: valorMinimo,
    };
  }
}