import { Injectable } from '@angular/core';
import { HttpErrorResponse } from "@angular/common/http";
import {Http, Response} from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class XyzService {
  word: String = "aardvark";
  constructor(private _http: HttpClient) {}
  private handleError(err: HttpErrorResponse) {
      console.log(err.message);
      return Observable.throw(err.message);
  }
  getDictonaryData(name?): any {
      if(name){
          this.word = name
      }
  let myResponse = this._http.get('/oxfordapi/' + this.word);
  return myResponse;

  }
}