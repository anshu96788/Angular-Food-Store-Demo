import { Component, OnInit, ElementRef, EventEmitter, Output } from '@angular/core';
import {NgForm} from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  @Output() valueChange1 = new EventEmitter();

  res= [];
str : string='Please LogIN to continue shopping';
str1="";
str2="";
str0="";
  constructor(private http: HttpClient) { }
  sub(from : NgForm){
    for(var z=0; z<this.res.length;z++)
{
  if(this.res[z].Email==from.value.email)
  {
    if(this.res[z].Password==from.value.psw)
    {
      this.valueChange1.emit(from.value.email);
    }
    else
    {
      break;
    }
    
    
   

  }
}
this.str2="Incorrect Credentials"

  }
  sub0(from : NgForm){

    if(from.value.email==='Admin' && from.value.psw==='Password')
    {
      this.valueChange1.emit(from.value.email);
    }
 
    else{this.str0="Incorrect Credentials"}
  }
  sub1(from : NgForm){

    var i=1;
for(var z=0; z<this.res.length;z++)
{
  if(this.res[z].Email==from.value.email)
  i=0;
}
    if(i==1){ this.http.post('https://login-acec5.firebaseio.com/posts.json',{
      "Email":from.value.email,"Password": from.value.psw }).subscribe(respons=>{
      this.valueChange1.emit(from.value.email);
    })
}
  else
  {
this.str1="This Email is already been used"
  }  

  }
  ngOnInit() {


    this.http.get('https://login-acec5.firebaseio.com/posts.json').pipe(map(red=>{
      const arr=[];
      for(const key in red)
      {
        arr.push({...red[key], id : key});
      }
return arr;
    })).subscribe(res=>{
      this.res=res;
   
    })

  }

}
