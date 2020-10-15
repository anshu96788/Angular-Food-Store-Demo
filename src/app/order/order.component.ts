import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators'
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  @Input() hero1: string;
  res =[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    
    this.http.get('https://order-3aea6.firebaseio.com/posts.json').pipe(map(red=>{
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
