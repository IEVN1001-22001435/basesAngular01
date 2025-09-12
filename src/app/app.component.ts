import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Arely Torres';

  duplicarNumero(valor:number){
    return valor*2;
  }
  pelicula=
  {
    titulo:"El conjuro 4",
    anio:2025,
    genero:"terror"
  }
}
