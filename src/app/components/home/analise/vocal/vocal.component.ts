import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup, FormGroupDirective} from "@angular/forms";

@Component({
  selector: 'app-vocal',
  templateUrl: './vocal.component.html',
  styleUrls: ['./vocal.component.scss']
})
export class VocalComponent implements OnInit {

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
