import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ComposersModel} from "../../../../models/composers.model";
import {FormGroup, FormGroupDirective} from "@angular/forms";

@Component({
  selector: 'app-title-result',
  templateUrl: './title-result.component.html',
  styleUrls: ['./title-result.component.scss']
})
export class TitleResultComponent implements OnInit {

  @Input()
  form!: FormGroup

  constructor() { }

  ngOnInit(): void {

  }
}
