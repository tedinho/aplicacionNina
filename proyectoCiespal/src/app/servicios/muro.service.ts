import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, of } from 'rxjs';
import { map } from "rxjs/operators";

const API_URL: string = 'http://localhost:8000/api/';

@Injectable({
  providedIn: 'root'
})
export class MuroService {

  constructor(private http: Http) { }


  getParametros(): Observable<any[]> {
    return this.http.get(API_URL + 'documentos/')
      .pipe(map(res => res.json().data));
  }
}
