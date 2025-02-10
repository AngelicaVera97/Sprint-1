import { Component } from '@angular/core';


@Component({
  selector: 'app-carrusel',
  imports: [],
  templateUrl: './carrusel.component.html',
  styleUrl: './carrusel.component.css'
})


export class CarruselComponent {

  imagen:string ="/imagenes/Casa-portada.webp"

  changePic(aux:number):void{
    switch(aux){
      case 1:
        this.imagen="/imagenes/Casa-portada.webp";
        break
      case 2:
        this.imagen="/imagenes/sala.webp";
        break
      case 3:
        this.imagen="/imagenes/recámara.webp";
        break        
    }
  }
}

