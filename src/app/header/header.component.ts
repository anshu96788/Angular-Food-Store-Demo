import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() valueChange = new EventEmitter();
  Add(fea: string){
this.valueChange.emit(fea);
  }


  constructor() { }

  ngOnInit() {
  }

}
