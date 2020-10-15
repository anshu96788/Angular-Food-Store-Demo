import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { re } from './product.model';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
res: re[] =[];
@Output() valueChange2 = new EventEmitter();
  constructor(private http: HttpClient) { }


Add(img: string , price: number, name: string)
{
  var str:string=name+" "+price.toString()+" "+img;
  this.valueChange2.emit(str);
}

  ngOnInit() {
    /*this.http.post('https://management-42c85.firebaseio.com/posts.json',{
      "Name":'Banana',"Price": 30,"count" :67,"img": 'https://upload.wikimedia.org/wikipedia/commons/5/55/Banana_%281%29.jpg'
    }).subscribe(respons=>{
      console.log(respons)
    })*/

    this.http.get('https://management-42c85.firebaseio.com/posts.json').pipe(map(red=>{
      const arr=[];
      for(const key in red)
      {
        arr.push({...red[key], id : key});
      }
return arr;
    })).subscribe(res=>{
     this.res= res;
    })
  }

}
