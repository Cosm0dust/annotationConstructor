import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-exper',
  templateUrl: './exper.component.html',
  styleUrls: ['./exper.component.scss']
})
export class ExperComponent implements OnInit {

  userForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      basicInfo: this.fb.group({
        firstName: [],
        lastName: [],
        email: [],
        age: []
      }),
      address: this.fb.group({
        street: [],
        number: [],
        postal: [],
        company: []
      })
    });

  }

}
