import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

   public name : string = 'Ironman';
   public age : number = 45;
   public visible : boolean = true;


   get capatilizaName():string{
      return this.name.toUpperCase();
   }

   heroDescription():string {
    return ` ${ this.name } - ${this.age} `;
   }

   changeNameHero():void{
      this.name = 'SpiderMan';
   }

   changeEdadHero():void{
      this.age = 25;
   }

   resetHero(){
    this.name = 'Ironman';
    this.age = 45;
  }



}
