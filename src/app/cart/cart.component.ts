import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() hero: string;
  @Input() hero1: string;
  @Input() hero2: string;
  @Input() hero3: string;
  @Output() valueChang = new EventEmitter();
  count: number=1;
  tot : number;
   
  constructor(private http: HttpClient) { }
  Add(){




this.count=this.count+1;
this.tot = this.count * Number(this.hero1)  ;


  }

  sub(from : NgForm)
  {
    var   todayString  = new Date().toDateString();
    
    this.http.post('https://order-3aea6.firebaseio.com//posts.json',{"email" : this.hero2, "name": this.hero, "kg": this.count, "price": this.tot,"img": this.hero3, "add": from.value.add, "pin": from.value.pin,"Date":todayString  }).subscribe(respons=>{
      this.valueChang.emit("DOne");
    })
  }
  Remove(){
    if(this.count>1)
    {
      this.count=this.count-1;
      this.tot = this.count * Number(this.hero1)  ;
    }
  }

  ngOnInit() {
    
    this.tot = this.count * Number(this.hero1)  ;
  }

}
