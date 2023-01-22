import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ComposersModel} from "../../../../models/composers.model";
import {FormGroup, FormGroupDirective} from "@angular/forms";

@Component({
  selector: 'app-historical',
  templateUrl: './historical.component.html',
  styleUrls: ['./historical.component.scss']
})
export class HistoricalComponent implements OnInit {

  @Input() partForm?: string
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
