import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-szcz',
  templateUrl: './szcz.component.html',
  styleUrls: ['./szcz.component.css']
})
export class SzczComponent {
  @Input() napis!:string;
  widoczny:boolean = true;
  zniknij():void{
    this.widoczny = false;
  }
}
