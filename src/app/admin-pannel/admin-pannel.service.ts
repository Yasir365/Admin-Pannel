import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AdminPannelService {
  private darkMode = new BehaviorSubject<boolean>(false);

  constructor() { }

  setDarkModeData(data: any) {
    this.darkMode.next(data);
  }

  getDarkModeData() {
    return this.darkMode.asObservable();
  }

}
