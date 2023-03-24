import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projekt4Pkart';

  rzeczy:string[]=[
    "wyprowadzić psa",
    "iść do kina",
    "oglądać film"
  ];
widoczny:boolean = true;
  klikniete:boolean = false;
  napis:string = "";
  wartosc:string ="";
  wybranarzecz:string="";
  przepisz(napis:string):void{
    this.klikniete = true;
    this.napis = napis;
    this.widoczny = true;
    this.wybranarzecz = napis;
  }
  zniknij():void{
    this.widoczny = false;
  }
  wyslij():void{
    console.log(this.wartosc);
    this.rzeczy.push(this.wartosc);
  }
}
