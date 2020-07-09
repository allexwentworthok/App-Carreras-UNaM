//api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // API path
  base_path = 'https://app.unam.edu.ar/json';

  constructor(private http: HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',

    })
  }
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };


  // Get anys data
  getListExactas(): Observable<any> {
    return this.http
      .get<any>(this.base_path + '/fceqyn.json')
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getListHumanidades(): Observable<any> {
    return this.http
      .get<any>(this.base_path + '/fhycs.json')
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getListFio(): Observable<any> {
    return this.http
      .get<any>(this.base_path + '/fio.json')
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getListForestales(): Observable<any> {
    return this.http
      .get<any>(this.base_path + '/fcf.json')
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getListArtes(): Observable<any> {
    return this.http
      .get<any>(this.base_path + '/fayd.json')
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getListEconomicas(): Observable<any> {
    return this.http
      .get<any>(this.base_path + '/fce.json')
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getListNuevas(): Observable<any> {
    return this.http
      .get<any>(this.base_path + '/carreras.json')
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
}