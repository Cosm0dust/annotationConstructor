import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ITab} from "../../interfaces/tab";



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }



  @Output()
  sayHi = new EventEmitter()

  ngOnInit(): void {
  }

  onTabChange(obj: ITab){
      this.sayHi.emit(obj)
  }
}
