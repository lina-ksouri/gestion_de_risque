import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Riskanalyse } from '../models/riskanalyse';
//import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class AnalyseService {
  private getUrl : string = `${environment.apiUrl}/analyse`;
  constructor(private _httpClient: HttpClient) { }
  
  getAll(): Observable<Riskanalyse[]>{
    return this._httpClient.get<Riskanalyse[]>(this.getUrl).pipe(map(response => response))
  }

  getByname(name:string){
    return this._httpClient.get(`${this.getUrl}/${name}`).pipe(map(result => result));
  }

}
