import { Injectable } from '@angular/core';
import {Information} from "../interfaces/information";
import {BehaviorSubject, map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InfotmationService {

  constructor() { }

    information: BehaviorSubject<Information>= new BehaviorSubject<Information>(
      {
        composed:  'composer',
        accompaniment: '',
        composer_name: '',
        piece_name: '',
        part: 0,
        wholeComposition : '',
        course: 0,
        fullName: '',
        man: false,
        type: ''
      }
    )

  information$ : Observable<Information> = this.information.asObservable()

  informationChange(info: Information){
    return this.information$
  }

}
