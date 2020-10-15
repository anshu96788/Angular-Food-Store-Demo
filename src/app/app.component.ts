import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
hero: string;
hero1: string;
hero2: string;
hero3: string;
hero4: string;
load : string= 'login';
load1 : string= 'Admin';
  show(fea: string){
this.load=fea;
  }
  sh(fea: string){
    this.load='odf';
   
      }
      s(fea: string){
        this.load='home';
       
          }
  show2(fea: string){
    this.load='Cart';
    

    var arr=fea.split(" ");
    this.hero=arr[0];
    this.hero1=arr[1];
    this.hero3=arr[2];
    this.hero2=this.load1;
   
      }
  show1(fea: string){
    if(fea==='Admin')
    {
      this.load="adm";

    }
    else
    {  this.load1=fea;
      this.hero4=fea;
      this.load="home";}
  
      }

      lo(){
        this.load= 'login';
      }
}
