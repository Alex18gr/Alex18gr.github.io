import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  private _cvUrl = '';

  constructor() { }

  downloadCV() {
    window.location.href = this._cvUrl;
  }

}
