import { Component } from '@angular/core';
import {ITab} from "./interfaces/tab";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  partForm =  'title';
  openedTab = 'opener';


  onTabChange(T: ITab){
   this.openedTab = T.tab
    this.partForm = T.text
  }

  onTChange(text: string){
    this.partForm= text
  }
}
