import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  private http = inject(HttpClient);

  private _cvUrl = '';

  constructor() { }

  downloadCV() {
    window.location.href = this._cvUrl;
  }

}
