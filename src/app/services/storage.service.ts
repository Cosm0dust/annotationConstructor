import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  private dataSubject: BehaviorSubject<string> = new BehaviorSubject('initial value');
  data$: Observable<string> = this.dataSubject.asObservable();

  setData(newValue: string) {
    this.dataSubject.next(newValue);
  }
}
