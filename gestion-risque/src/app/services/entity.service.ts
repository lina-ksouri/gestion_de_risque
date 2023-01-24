import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Entities } from '../models/entities';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EntityService {
  private getUrl : string = `${environment.apiUrl}/allentity`;
  private getUrl1 : string = `${environment.apiUrl}/addentity`;
  private getUrl2 : string = `${environment.apiUrl}/editentity`;
    constructor(private _httpClient: HttpClient) { }
    getEntity(): Observable<Entities[]>{
      return this._httpClient.get<Entities[]>(this.getUrl).pipe(map((response) => response))
    }
  
    saveEntity(entity: Entities ): Observable<Entities>{
      return this._httpClient.post<Entities>(this.getUrl1, entity);
    }
    getEntityByname(name:string): Observable<Entities>{
      return this._httpClient.get<Entities>(`${this.getUrl}/${name}`);
    }
    updateEmployee(name: string, value: any): Observable<Object> {
      return this._httpClient.put(`${this.getUrl2}/${name}`, value);
    }
}
