import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, FormGroupDirective} from "@angular/forms";

@Component({
  selector: 'app-theory',
  templateUrl: './theory.component.html',
  styleUrls: ['./theory.component.scss']
})
export class TheoryComponent implements OnInit {


  @Input() formGroupName!: string

  @Output()
  changeTab = new EventEmitter()


  form!: FormGroup
  constructor(private rootFormGroup: FormGroupDirective, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.rootFormGroup.control.get(this.formGroupName) as FormGroup
  }

  onTabChange(text: string){
    this.changeTab.emit(text)
  }



  getArr(path: string){
    return this.rootFormGroup.control.get(path) as FormArray
  }

  addPart(path: string){
    let userArr = this.getArr(path)
    let newArr =  this.formBuilder.group({
        'from': '',
        'to': ''
      }
    )
    userArr.push(newArr)
  }
}
