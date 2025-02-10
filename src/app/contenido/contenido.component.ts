import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-contenido',
  imports: [FormsModule],
  templateUrl: './contenido.component.html',
  styleUrl: './contenido.component.css'
})
export class ContenidoComponent {

//huespedes

  constructor(){}
  numero: number = 1;
  numero1: number = 1;

  restaH(num:number):void{
    num--;
    if(num>=1){
      this.numero=num
    }else{
      this.numero=1
    }
  }

sumaH(num:number):void{
    if(this.numero>=1){
      num++;
      this.numero=num
    }else{
      this.numero=1
    }
  }

  //noches
  

  restaN(num:number):void{
    num--;
    if(num>=1){
      this.numero1=num
    }else{
      this.numero1=1
    }
  }

sumaN(num:number):void{
    if(this.numero1>=1){
      num++;
      this.numero1=num
    }else{
      this.numero1=1
    }
  }


  //total variable

  total:number=1500

  //suma huespedes

  huesped:boolean=false

  sumaHuespedes():void{
    if(!this.sumaHuespedes){
      this.total+=1500;
    }else{
      this.total-=1500
    }
  }

  //suma NOCHES


  //suma estancia 
  // MASCOTAS

  pet:boolean=false

  sumarCheck():void{
    if(!this.pet){
      this.total+=250;
    }else{
      this.total-=250
    }
  }

  //suma estancia calefaccion

  heat:boolean=false

  sumarCheck1():void{
    if(!this.heat){
      this.total+=500;
    }else{
      this.total-=500
    }
  }

//suma estancia ruta

  route:boolean=false

  sumarCheck2():void{
    if(!this.route){
      this.total+=150;
    }else{
      this.total-=150
    }
  }

//suma estancia senderismo

  hik:boolean=false

  sumarCheck3():void{
    if(!this.hik){
      this.total+=200;
    }else{
      this.total-=200
    }
  }
 
//suma estancia cascada

  fall:boolean=false

  sumarCheck4():void{
    if(!this.fall){
      this.total+=50;
    }else{
      this.total-=50
    }
  }





  

}
