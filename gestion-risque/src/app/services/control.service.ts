import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Control } from '../models/control';

@Injectable({
  providedIn: 'root'
})
export class ControlService {

  private getUrl : string = `${environment.apiUrl}/allcontrol`;
  private getUrl1 : string = `${environment.apiUrl}/control`;
  private getUrl2 : string = `${environment.apiUrl}/editcontrol`;
    constructor(private _httpClient: HttpClient) { }
    getAll(): Observable<Control[]>{
      return this._httpClient.get<Control[]>(this.getUrl).pipe(map((response) => response))
    }

    getControlByname(name:string): Observable<Control>{
      return this._httpClient.get<Control>(`${this.getUrl1}/${name}`);
    }
    updateControl(value: Control): Observable<Control> {
      return this._httpClient.post<Control>(`${this.getUrl2}`, value);
    }
    update(name: string, value: any): Observable<Object> {
      return this._httpClient.put(`${this.getUrl2}/${name}`, value);
    }
}
   
