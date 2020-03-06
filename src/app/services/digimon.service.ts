import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Digimon } from '../models/digimon/digimon.interface';
const url = environment.api;

@Injectable({
  providedIn: 'root'
})
export class DigimonService {

  private _searchDigimon: Digimon = new Digimon();
  private _filterDigimon: any;

  @Output() digimonEvent: EventEmitter<any> = new EventEmitter();
  @Output() filterEvent: EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient) {
    
  }

  public get searchDigimon() {
    return this._searchDigimon;
  }

  public set searchDigimon(s) {
    this._searchDigimon = s;
    setTimeout(() => {
      this.digimonEvent.emit(true);
    }, 10);
  }

  public get filterDigimon() {
    return this._filterDigimon;
  }

  public set filterDigimon(f) {
    this._filterDigimon = f;
    setTimeout(() => {
      this.filterEvent.emit(true);
    }, 10);
  }


  getAllDigimons(): Observable<any> {
    return this.http
      .get(`${url}/api/digimon`)
      .pipe(catchError(this._handleError));
  }

  getAllDigimonsById(id): Observable<any> {
    return this.http
      .get(`${url}/api/digimon/id/${id}`)
      .pipe(catchError(this._handleError));
  }

  getAllDigimonsByName(name: string): Observable<any> {
    return this.http
    .get(`${url}/api/digimon/id/${name}`)
    .pipe(catchError(this._handleError));
  }

  getAllDigimonsByLevel(level: string): Observable<any> {
    return this.http
    .get(`${url}/api/digimon/id/${level}`)
    .pipe(catchError(this._handleError));
  }

  private _handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return throwError('Something bad happened; please try again later.');
  }

}