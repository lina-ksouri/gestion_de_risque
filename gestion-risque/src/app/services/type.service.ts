import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Type } from '../models/type';

@Injectable({
  providedIn: 'root'
})
export class TypeService {
  private getUrl : string = `${environment.apiUrl}/types`;
  private getUrl1 : string = `${environment.apiUrl}/addtype`;
    constructor(private _httpClient: HttpClient) { }
    getType(): Observable<Type[]>{
      return this._httpClient.get<Type[]>(this.getUrl).pipe(map(response => response))
    }
  
    saveType(type: Type ): Observable<Type>{
      return this._httpClient.post<Type>(this.getUrl1, type);
    }
    getTypeByname(name:string): Observable<Type>{
      return this._httpClient.get<Type>(`${this.getUrl}/${name}`);
    }
  }
