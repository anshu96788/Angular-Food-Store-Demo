import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  @Output() valueChan = new EventEmitter();
  constructor(private http: HttpClient) { }
  sub0(from : NgForm){

  


  this.http.post('https://management-42c85.firebaseio.com/posts.json',{
      "Name":from.value.email,"Price": from.value.img,"count" :67,"img": from.value.psw
    }).subscribe(respons=>{
      this.valueChan.emit("Done");
    })
}
  ngOnInit() {
  }

}
