import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup, FormGroupDirective} from "@angular/forms";
import {ComposersModel} from "../../../../models/composers.model";

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {


  @Input() composers?: ComposersModel[]
  @Input() formGroupName!: string

  @Output()
  changeTab = new EventEmitter()



  form!: FormGroup
  constructor(private rootFormGroup: FormGroupDirective) { }

  ngOnInit(): void {
    this.form = this.rootFormGroup.control.get(this.formGroupName) as FormGroup
  }

  onTabChange(text: string){
    this.changeTab.emit(text)
  }
}
