import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AlojamientosComponent } from './alojamientos/alojamientos.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { EstanciasComponent } from './estancias/estancias.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { InformacionComponent } from './informacion/informacion.component';


@Component({
  selector: 'app-root',
  imports: [AlojamientosComponent, CarruselComponent, ContenidoComponent, EstanciasComponent, FooterComponent, HeaderComponent, InformacionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'sprint1';
}
