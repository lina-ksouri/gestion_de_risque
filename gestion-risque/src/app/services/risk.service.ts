import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Risque } from '../models/risque';

@Injectable({
  providedIn: 'root'
})
export class RiskService {
  private getUrl : string = `${environment.apiUrl}/allrisk`;
  private getUrl1 : string = `${environment.apiUrl}/addrisk`;
  private getUrl2 : string = `${environment.apiUrl}/editrisk`;
  private getUrl3 : string = `${environment.apiUrl}/risk`;
    constructor(private _httpClient: HttpClient) { }
    getrisk(): Observable<Risque[]>{
      return this._httpClient.get<Risque[]>(this.getUrl).pipe(map((response) => response))
    }
  
    saveRisk(risk : Risque ): Observable<Risque>{
      return this._httpClient.post<Risque>(this.getUrl1, risk);
    }
    update(name: string,risk : Risque ): Observable<Risque>{
      return this._httpClient.post<Risque>(`${this.getUrl2}/${name}`, risk);
    }
    getRiskByname(name:string): Observable<Risque>{
      return this._httpClient.get<Risque>(`${this.getUrl3}/${name}`);
    }
    updateRisk(name: string, value: any): Observable<Object> {
      return this._httpClient.put(`${this.getUrl2}/${name}`, value);
    }
   
}
