import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

    public heroes : string [] = ['WonderWoman','Batman','Superman','Hulk','Thor', 'Captain America']
    public deleteHeroe? : string = '' ;

    removeLast():void{

      this.deleteHeroe = this.heroes.pop();

    }

}
