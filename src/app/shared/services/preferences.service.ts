import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PreferencesService {
  _isDark: boolean = false;

  constructor() {
    let strDark = localStorage.getItem('dark');

    if (strDark == null) {
      this.isDark = this._isDark;
      console.log(this._isDark);

    } else {
      this.isDark = JSON.parse(strDark.toLowerCase())
      console.log(this._isDark);
    }
  }

  get isDark(): boolean {
    return this._isDark;
  }

  set isDark(value: boolean) {
    localStorage.setItem('dark', String(this._isDark));
    this._isDark = value;
  }


}


// localStorage.setItem('dark', JSON.stringify(this.isDark));
